import { getScopedI18n } from "@/locales/server";
import ValuesObjectivesSectionClient from "./ValuesObjectivesSectionClient";
import { Users, Rocket, Heart, Zap, TrendingUp } from "lucide-react";

export default async function ValuesObjectivesSectionServer() {
  const t = await getScopedI18n("valuesObjectivesSection");

  const valuesData = [
    {
      title: t("values.0.title"),
      description: t("values.0.description"),
      icon: <Users className="h-10 w-10" />,
    },
    {
      title: t("values.1.title"),
      description: t("values.1.description"),
      icon: <Rocket className="h-10 w-10" />,
    },
    {
      title: t("values.2.title"),
      description: t("values.2.description"),
      icon: <Heart className="h-10 w-10" />,
    },
    {
      title: t("values.3.title"),
      description: t("values.3.description"),
      icon: <Zap className="h-10 w-10" />,
    },
    {
      title: t("values.4.title"),
      description: t("values.4.description"),
      icon: <TrendingUp className="h-10 w-10" />,
    },
  ];

  return (
    <ValuesObjectivesSectionClient
      heading={t("heading")}
      description={t("description")}
      valuesData={valuesData}
    />
  );
}