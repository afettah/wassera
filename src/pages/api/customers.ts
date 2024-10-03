import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { CustomerRepository } from '@/repositories/customerRepository';

const TIMEOUT_LIMIT = 5000;

const customerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(1, 'Phone number is required'),
  serviceType: z.array(z.string()).nonempty('Service type must contain at least one service'),
});

const createTimeoutPromise = (ms: number) => new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));

const storeCustomerData = async (data: z.infer<typeof customerSchema>) => {
  const { firstName, lastName, email, phone, serviceType } = data;
  const repository = await CustomerRepository.init();
  return repository.saveCustomer({ firstName, lastName, email, phone, serviceType });
};

const handlePostRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const validatedData = customerSchema.parse(req.body);

    await Promise.race([storeCustomerData(validatedData), createTimeoutPromise(TIMEOUT_LIMIT)]);

    return res.status(200).json({
      message: 'Customer data stored successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Invalid customer data',
        errors: error.errors,
      });
    }
    return handleError(res, error as Error);
  }
};

const handleError = (res: NextApiResponse, error: Error) => {
  const status = error.message === 'Request timed out' ? 504 : 500;
  console.error('Error adding document:', error);
  return res.status(status).json({
    message: error.message === 'Request timed out' ? 'Request timed out' : 'Failed to store customer data',
    error: error.message,
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handlePostRequest(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
