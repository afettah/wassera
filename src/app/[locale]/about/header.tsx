import Image from "next/image";
import { getScopedI18n } from "@/locales/server";

export default async function Header() {
  const headerT = await getScopedI18n("header");

  return (
    <header className="relative text-center py-20 h-80">
      <Image
        src="/images/hero.png"
        alt="Abstract financial graph"
        width={1200}
        height={700}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />
      <div className="relative text-white z-10">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          {headerT("title")}
        </h1>
        <p className="text-xl max-w-2xl mx-auto">{headerT("description")}</p>
      </div>
    </header>
  );
}
