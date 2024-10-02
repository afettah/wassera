import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Container from '../components/container';
import Logo from '@/app/images/logo.svg';

import LeftFooterSvg from '@/app/images/left-footer.svg';
import RightFooterSvg from '@/app/images/right-footer.svg';
import { getScopedI18n } from '@/locales/server';
export default async function Footer() {
  const footerT = await getScopedI18n('footer');
  const footerData = {
    logo: {
      src: '',
      alt: 'Waseera Logo',
      width: 150,
      height: 50,
    },
    description: footerT('description'),
    contacts: [
      {
        type: 'phone',
        href: 'tel:+966598577775',
        icon: Phone,
        text: '+966 59 857 7775',
      },
      {
        type: 'email',
        href: 'mailto:info@waseera.sa',
        icon: Mail,
        text: 'info@waseera.sa',
      },
      {
        type: 'address',
        icon: MapPin,
        text: footerT('address'),
      },
    ],
  };

  return (
    <footer className="bg-[#1f382b] text-white relative overflow-hidden mt-10">
      <div className="absolute inset-0 opacity-30 flex justify-between text-orange-50 text-opacity-50">
        <div className="h-full w-auto">
          <LeftFooterSvg className="h-full w-auto" />
        </div>

        <div className="h-full w-auto">
          <RightFooterSvg className="h-full w-auto" />
        </div>
      </div>

      <Container className=" py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Logo className="w-40 text-white" />
            </Link>
            <p className="text- max-w-md leading-relaxed">{footerData.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              {footerT('contacts')}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <div className="space-y-4">
              {footerData.contacts.map((contact, index) => (
                <div key={index} className="flex items-center group">
                  <contact.icon className="w-5 h-5 mr-3 text-orange group-hover:text-white transition-colors duration-200" />
                  {contact.href ? (
                    <a href={contact.href} className="group-hover:text-primary transition-colors duration-200">
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-sm">
                      {contact.text.split('\n').map((line, i) => (
                        <div key={i}>
                          {line}
                          <br />
                        </div>
                      ))}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t bg-[#0e1e15] border-white py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-8 items-center">
          <p className=" ">{footerT('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
