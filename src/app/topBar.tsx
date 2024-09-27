"use client";

import { useEffect, useState } from "react";
import { Globe, Mail, Phone } from "lucide-react";
import Container from "./components/container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopBar() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage("عربي");
  }, []);

  const headerContacts = {
    email: "info@wassera.com.sa",
    phone: "+966 59 857 7775",
  };

  return (
    <header className="bg-[linear-gradient(135deg,_gray-100_0%,_primary/5_50%,_primary/5_100%)] hidden sm:block">
      <Container className="pb-0 py-0">
        <div className="flex sm:flex-row-reverse items-center gap-2 sm:gap-5 text-xs text-gray-500">
          <div className="hidden sm:flex items-center gap-2 px-2 sm:border-l-2 border-gray-300">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-gray-500">
                  <Globe className="w-4 h-4 mr-2" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("عربي")}>عربي</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex sm:flex-row items-center gap-2 sm:gap-5">
            <a
              href={`mailto:${headerContacts.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{headerContacts.email}</span>
            </a>
            <a
              href={`tel:${headerContacts.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{headerContacts.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}