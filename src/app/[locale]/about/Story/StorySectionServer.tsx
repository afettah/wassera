import { getScopedI18n } from "@/locales/server";
import StorySectionClient from "./StorySectionClient";

export default async function StorySectionServer() {
  const t = await getScopedI18n("storySection");

  const storyData = {
    heading: t("heading"),
    paragraphs: [t("paragraphs.0"), t("paragraphs.1"), t("paragraphs.2")],
    image: {
      src: "/images/wassera-building.webp",
      alt: "Wassera office",
    },
  };

  return <StorySectionClient storyData={storyData} />;
}
