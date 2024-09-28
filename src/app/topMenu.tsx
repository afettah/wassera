"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search, Menu, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Container from "./components/container";
import Logo from "@/app/images/logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const normalizePath = (path: string) => {
  const lowerPath = path === "" ? "/" : path.toLowerCase();
  return lowerPath === "/home" ? "/" : lowerPath;
};

export default function TopMenu() {
  const pathname = normalizePath(usePathname());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("عربي");

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Wassera", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-gradient-to-r from-white from-0% via-white to-primary/25 to-100%">
      <Container className="sm:px-4 py-1  ">
        <header className="">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="flex flex-col font-bold text-2xl text-gray-800 leading-none">
                <span className="text-right">وصيــــرة</span>
                <span>waseera</span>
              </div>
              <Logo className="h-12 w-12" />
            </Link>

            <div className="hidden lg:flex lg:gap-x-12 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold leading-6 ${
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
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-900"
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
                  <div className="flex items-center gap-2 px-2 border-t border-gray-300 pt-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-xs text-gray-500"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          {language}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => setLanguage("English")}
                        >
                          English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("عربي")}>
                          عربي
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
