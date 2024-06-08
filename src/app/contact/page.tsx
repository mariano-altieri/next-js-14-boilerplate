import { MainLayout } from '@/app/commons/components/templates/MainLayout';
import { Heading } from '@/app/commons/components/Heading';
import { Toaster } from '@/app/commons/components/ui/toaster';

import { ContactForm } from './forms/ContactForm';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container my-3">
        <Heading>Contact Us</Heading>
        <ContactForm />
        <Toaster />
      </div>
    </MainLayout>
  );
}
