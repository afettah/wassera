# Base image with the official Node.js runtime
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

# Install necessary system libraries
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package management files and install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found. Exiting." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder

# Set working directory
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the entire app
COPY . .

# Build the Next.js app
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "No lockfile found. Exiting." && exit 1; \
  fi

# Final production image
FROM base AS runner

# Set working directory
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production

# Create a new user and group for running the app
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy necessary files from the build stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose port 3000
EXPOSE 3000

# Set the port and hostname environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Command to run the app
CMD ["node", "server.js"]
