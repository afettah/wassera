'use client';
import { faBars, faClose, faSchoolCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import LogoSvg from './images/logo.svg';
import { usePathname } from 'next/navigation';

const normalizePath = (path: string) => {
  const lowerPath = path === '' ? '/' : path.toLowerCase();
  return lowerPath === '/home' ? '/' : lowerPath;
};

function TopMenu() {
  const pathname = normalizePath(usePathname());

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Wassera', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="menu bg-background-secondary">
      <nav aria-label="Global" className="flex items-center justify-between p-6 px-4 sm:px-6 lg:px-10 xl:px-32 max-w-7xl mx-auto">
        <div className="flex mr-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Wassera</span>
            <LogoSvg className="w-auto h-10" />
            <div className="flex flex-col ml-4"></div>
          </a>
        </div>
        <div className="flex-grow lg:hidden"></div>

        <div className="hidden lg:flex lg:gap-x-12 ">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-md py-2 font-semibold leading-6  ${
                pathname === item.href ? 'text-primary border-b-2 border-primary' : 'text-gray-900'
              } hover:text-primary-700`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center dark:hover:text-slate-300"
          >
            <span className="sr-only">Search</span>
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center ml-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-500" />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Wassera</span>
              <LogoSvg className="w-auto h-10" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon icon={faClose} className="text-gray-500" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default TopMenu;
