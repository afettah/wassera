'use client';
import { ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { useScopedI18n } from '@/locales/client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { Input } from '../../components/ui/input';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PhoneInput } from '@/components/ui/phone-input';

interface RegistrationFormProps {
  children: ReactNode;
}

const FormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please enter a valid phone number.' }),
  serviceType: z.array(z.string()).min(1, { message: 'Please select at least one service.' }),
});

export default function RegistrationForm({ children }: RegistrationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const registrationT = useScopedI18n('home.hero.registration');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      serviceType: ['mortgageSplit'],
    },
  });

  const serviceOptions = [
    {
      value: 'mortgageSplit',
      label: registrationT('fields.serviceType.options.mortgageSplit.label'),
      description: registrationT('fields.serviceType.options.mortgageSplit.description'),
    },
    {
      value: 'investments',
      label: registrationT('fields.serviceType.options.investments.label'),
      description: registrationT('fields.serviceType.options.investments.description'),
    },
    {
      value: 'assetBackedLoan',
      label: registrationT('fields.serviceType.options.assetBackedLoan.label'),
      description: registrationT('fields.serviceType.options.assetBackedLoan.description'),
    },
    { value: 'savings', label: registrationT('fields.serviceType.options.savings.label') },
  ];

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);

    try {
      // Call the /api/customers endpoint
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Handle the response
      if (response.ok) {
        const result = await response.json();
        console.log('API Response:', result);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      // Close the modal or perform any cleanup
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
        <DialogHeader className="space-y-4 mt-4">
          <DialogTitle className="text-start">{registrationT('modalTitle')}</DialogTitle>
          <div className="my-10">
            <Alert className="text-primary-foreground bg-primary text-lg">
              <AlertTitle className="py-1 text-start">{registrationT('message1')}</AlertTitle>
              <AlertDescription className="text-md text-start">{registrationT('message2')}</AlertDescription>
            </Alert>
          </div>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="lg:flex lg:flex-wrap lg:gap-4 lg:justify-between">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="lg:w-[48%]">
                    <FormLabel>{registrationT('fields.firstName.label')}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="lg:w-[48%]">
                    <FormLabel>{registrationT('fields.lastName.label')}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="lg:w-[48%]">
                    <FormLabel>{registrationT('fields.email.label')}</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="lg:w-[48%]">
                    <FormLabel>{registrationT('fields.phone.label')}</FormLabel>
                    <FormControl>
                      <PhoneInput defaultCountry={'SA'} {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">{registrationT('fields.serviceType.label')}</FormLabel>
                    <FormDescription>{registrationT('fields.serviceType.description')}</FormDescription>
                  </div>
                  <div className="lg:w-3/5 lg:flex lg:flex-wrap lg:gap-4">
                    {serviceOptions.map((item) => (
                      <FormField
                        key={item.value}
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start  space-x-2 space-y-0 lg:w-[48%]">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.value])
                                    : field.onChange(field.value?.filter((value) => value !== item.value));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal ">{item.label}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button type="submit">{registrationT('submit')}</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
