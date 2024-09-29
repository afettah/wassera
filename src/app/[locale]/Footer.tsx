import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../components/container";
import Logo from "@/app/images/logo.svg";

export default function Footer() {
  const footerData = {
    logo: {
      src: "",
      alt: "Waseera Logo",
      width: 150,
      height: 50,
    },
    description:
      "The leading fintech solution that uses nft, ai, and blockchain technologies to unlock the value of untapped equities.",
    contacts: [
      {
        type: "phone",
        href: "tel:+966598577775",
        icon: Phone,
        text: "+966 59 857 7775",
      },
      {
        type: "email",
        href: "mailto:info@waseera.com.sa",
        icon: Mail,
        text: "info@waseera.com.sa",
      },
      {
        type: "address",
        icon: MapPin,
        text: "7134 Al-Rayyan District, Al-Nafal District,\nRiyadh 13312 Kingdom of Saudi Arabia",
      },
    ],
    links: ["Terms", "Privacy", "Security"],
  };

  return (
    <footer className="bg-[#1f382b] text-white relative overflow-hidden mt-10">
      {/* Geometric shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-orange transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>

      <Container className=" py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Logo className="w-40 text-white" />
            </Link>
            <p className="text- max-w-md leading-relaxed">
              {footerData.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contacts
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <div className="space-y-4">
              {footerData.contacts.map((contact, index) => (
                <div key={index} className="flex items-center group">
                  <contact.icon className="w-5 h-5 mr-3 text-orange group-hover:text-white transition-colors duration-200" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="group-hover:text-primary transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-sm">
                      {contact.text.split("\n").map((line, i) => (
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
          <p className=" ">All Rights Reserved © Waseera</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerData.links.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
