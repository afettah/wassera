import { MongoClient } from 'mongodb';
import { readFileSync } from 'fs';

// Read the MONGODB_URI from the file specified in MONGODB_URI_FILE if it's not provided directly via environment variable
const uriFilePath = process.env.MONGODB_URI_FILE;
const uri = process.env.MONGODB_URI || (uriFilePath ? readFileSync(uriFilePath, 'utf8').trim() : null);
const dbName = process.env.MONGODB_DB as string;

if (!uri) {
  throw new Error('Please define the MONGODB_URI or provide the MONGODB_URI_FILE environment variable with the path to the URI file');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

const maskedUri = uri.replace(/(mongodb:\/\/)(.*:.*)@/, '$1*****:*****@');

console.log('MongoDB:', maskedUri, 'database:', dbName);

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri as 'string');
  await client.connect().then(() => console.log('Connected to MongoDB:', maskedUri)).catch((error) => {
    console.error('Error connecting to MongoDB:', maskedUri, error);
    throw error;
  });
  cachedClient = client;

  return client;
}
