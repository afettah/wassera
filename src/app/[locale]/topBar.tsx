import { Mail, Phone } from 'lucide-react';
import Container from '../components/container';
import { LanguageSwitcher } from './languagueSwitcher';

export default function TopBar() {
  const headerContacts = {
    email: 'info@wassera.com.sa',
    phone: '+966 59 857 7775',
  };

  return (
    <header className="bg-gradient-to-r from-white from-0% via-white to-primary/25 to-100% hidden sm:block">
      <Container className="pb-0 py-0">
        <div className="flex sm:flex-row-reverse items-center gap-2 sm:gap-5 text-xs text-gray-500">
          <div className="hidden sm:flex items-center gap-2 px-2 sm:border-l-2 border-gray-300">
            <LanguageSwitcher />
          </div>
          <div className="flex sm:flex-row items-center gap-2 sm:gap-5">
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
