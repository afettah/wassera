import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const servicesData = [
  {
    title: "Mortgage Split",
    description:
      "Offers a tailored financing solution by dividing your mortgage into separate portions with varying terms, including fixed and variable rates.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/images/mortage.jpeg",
  },
  {
    title: "Investments",
    description:
      "Strategic opportunity to grow customers' financial inclusion, capitalizing on untapped equities with investment options tailored to your financial goals and risk tolerance.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/images/investment.png",
  },
  {
    title: "Asset-Backed Loan",
    description:
      "Provides funding brokerage services secured by collateral, offering flexible financing options for various needs and situations.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/images/loan.jpeg",
  },
  {
    title: "Savings",
    description:
      "Flexible savings solutions designed to help you efficiently accumulate and manage your funds, ensuring your money works towards achieving your long-term financial objectives.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/images/savings.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="relative">
      <h2
        id="services-heading"
        className="text-4xl font-semibold mb-12 text-center"
      >
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

function ServiceCard({ icon, title, description, imageSrc }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <CardHeader className="relative z-10 -mt-16 bg-background/80 backdrop-blur-sm">
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="p-2 bg-primary text-primary-foreground rounded-full">
            {icon}
          </div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}