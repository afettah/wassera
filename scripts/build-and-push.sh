#!/bin/bash

# Set variables
IMAGE_NAME="afettah/waseera-web-site"

# Extract version from package.json
VERSION=$(grep '"version"' package.json | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

# Check if version is valid
if [[ -z "$VERSION" ]]; then
  echo "Error: Version not found in package.json"
  exit 1
fi

echo "Building and tagging Docker image with version $VERSION and latest..."

# Build the Docker image
docker build -t $IMAGE_NAME:$VERSION -t $IMAGE_NAME:latest .

# Push the versioned tag
echo "Pushing $IMAGE_NAME:$VERSION to Docker Hub..."
docker push $IMAGE_NAME:$VERSION

# Push the latest tag
echo "Pushing $IMAGE_NAME:latest to Docker Hub..."
docker push $IMAGE_NAME:latest

echo "Docker image $IMAGE_NAME has been successfully tagged and pushed with version $VERSION and latest."
