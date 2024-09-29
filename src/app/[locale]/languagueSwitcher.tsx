'use client';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { ChevronDownIcon, Globe } from 'lucide-react';

const supportedLocals = [
  { name: 'English', locale: 'en' },
  { name: 'عربي', locale: 'ar' },
];

export const LanguageSwitcher = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const localName = supportedLocals.find((lang) => lang.locale === locale)?.name;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2  text-xs text-gray-500">
          <Globe className="h-5 w-5" />
          <span>{localName}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuGroup>
          {supportedLocals.map((lang) => (
            <DropdownMenuItem key={lang.locale} onClick={() => changeLocale(lang.locale as 'ar' | 'en')}>
              <Globe className="w-4 h-4 mr-2" />
              {lang.name}{' '}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
