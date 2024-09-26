"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Container from "./components/container";

const normalizePath = (path: string) => {
  const lowerPath = path === "" ? "/" : path.toLowerCase();
  return lowerPath === "/home" ? "/" : lowerPath;
};

export default function TopMenu() {
  const pathname = normalizePath(usePathname());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Wassera", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <Container className="p-0">
      <header className="bg-background-secondary py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col font-bold text-2xl text-gray-800 leading-none">
              <span className="text-right">وصيــــرة</span>
              <span>waseera</span>
            </div>
            <svg className="w-auto h-10" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </Link>

          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-900"
                } hover:text-primary`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
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
                    className={`text-lg font-semibold ${
                      pathname === item.href ? "text-primary" : "text-gray-900"
                    } hover:text-primary`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="ghost" size="icon" className="w-fit">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </Container>
  );
}
