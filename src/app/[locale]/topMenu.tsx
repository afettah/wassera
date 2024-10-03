'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Container from '../components/container';
import Logo from '@/app/images/logo.svg';
import { useState } from 'react';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { LanguageSwitcher } from './languagueSwitcher';

const normalizePath = (path: string, locale?: string) => {
  if (!path) return '/';

  if (locale && (path.startsWith(`/${locale}/`) || path === `/${locale}`)) {
    path = path.slice(locale.length + 1);
  }

  const lowerPath = path === '' ? '/' : path.toLowerCase();
  return lowerPath === '/home' ? '/' : lowerPath;
};

export default function TopMenu() {
  const currentLocale = useCurrentLocale();
  const pathname = normalizePath(usePathname() ?? '', currentLocale);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuT = useScopedI18n('menu');

  const navigation = [
    { name: menuT('home'), href: '/' },
    { name: menuT('services'), href: '/services' },
    { name: menuT('about'), href: '/about' },
    { name: menuT('contact'), href: '/contact' },
  ];

  return (
    <div>
      <Container className="sm:px-4 py-1  ">
        <header className="">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Logo className="w-40 text-logo-foreground-secondary" />
            </Link>

            <div className="hidden lg:flex lg:gap-x-12 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold leading-6 ${
                    pathname === item.href ? 'text-primary border-b-2 border-primary' : 'text-gray-900'
                  } hover:text-primary`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div></div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-semibold ${pathname === item.href ? 'text-primary' : 'text-gray-900'} hover:text-primary`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex items-center gap-2 px-2 border-t border-gray-300 pt-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </header>
      </Container>
    </div>
  );
}
