import { getServicesData, getTiltle } from "./servicesData";
import ServicesSectionClient from "./ServicesSectionClient";

export default async function ServicesSectionServer() {
  const title = await getTiltle();
  const servicesData = await getServicesData();

  return <ServicesSectionClient servicesData={servicesData} title={title} />;
}
