import Image from "next/image";

export default function Header() {
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
        <h1 className="text-5xl font-bold tracking-tight mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Transforming the debt industry and unlocking potential through
          innovative financial solutions
        </p>
      </div>
    </header>
  );
}