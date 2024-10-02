import { Mail, Phone } from 'lucide-react';
import Container from '../components/container';
import { LanguageSwitcher } from './languagueSwitcher';

export default function TopBar() {
  const headerContacts = {
    email: 'info@wassera.sa',
    phone: '+966 59 857 7775',
  };

  return (
    <header className="hidden sm:block">
      <Container className="pb-0 py-0">
        {/* Force LTR ordering regardless of the language direction */}
        <div className="flex items-center gap-2 sm:gap-5 text-xs text-gray-500 ltr:flex-row-reverse">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 px-2 sm:border-l-2 border-gray-300">
            <LanguageSwitcher />
          </div>
          {/* Contact Information */}
          <div className="flex flex-row items-center gap-2 sm:gap-5">
            <a href={`mailto:${headerContacts.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>{headerContacts.email}</span>
            </a>
            <a href={`tel:${headerContacts.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>{headerContacts.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
