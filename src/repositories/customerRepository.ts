import { MongoClient, Collection } from 'mongodb';
import { connectToDatabase } from '../lib/mongodb';
import { Customer } from '@/types/customer';

export class CustomerRepository {
  private collection: Collection<Customer>;

  private constructor(client: MongoClient) {
    this.collection = client.db().collection<Customer>('customers');
  }

  // Use this method to create the repository asynchronously
  public static async init(): Promise<CustomerRepository> {
    const client = await connectToDatabase().catch((error) => {
      console.error('Error connecting to database:', error);
      throw error
    });
    return new CustomerRepository(client);
  }

  public async saveCustomer(data: Customer): Promise<void> {
    await this.collection.insertOne(data).catch((error) => {
      console.error('Error saving customer data:', error);
      throw error;
    });
  }
}
