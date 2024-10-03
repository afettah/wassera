import { ChartLine, CurrencyIcon, Lock, Wallet } from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export async function getServicesData() {
  const servicesT = await getScopedI18n("services");

  return [
    {
      title: servicesT("items.0.title"),
      description: servicesT("items.0.description"),
      icon: <CurrencyIcon className="h-8 w-8" />,
      imageSrc: "/images/mortage.jpeg",
    },
    {
      title: servicesT("items.1.title"),
      description: servicesT("items.1.description"),
      icon: <ChartLine className="h-8 w-8" />,
      imageSrc: "/images/investment.png",
    },
    {
      title: servicesT("items.2.title"),
      description: servicesT("items.2.description"),
      icon: <Lock className="h-8 w-8" />,
      imageSrc: "/images/loan.jpeg",
    },
    {
      title: servicesT("items.3.title"),
      description: servicesT("items.3.description"),
      icon: <Wallet className="h-8 w-8" />,
      imageSrc: "/images/savings.jpeg",
    },
  ];
}

export async function getTiltle() {
  const servicesT = await getScopedI18n("services");

  return servicesT("title");
}
