import Image from "next/image";
import Container from "./components/container";
import CustomButton from "./components/button";

export default function OfferSection() {
  return (
    <Container className="py-20 relative">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 relative">
          <div className="absolute inset-0 bg-[#FFA500] opacity-20 transform -skew-x-12"></div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Person using a laptop"
            width={400}
            height={400}
            className="relative z-10 w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0">
          <h3 className="text-2xl md:text-4xl"> Do you know about</h3>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary ">Waseera</span>{" "}
            <span className="text-gray-800">Offers !?</span>
          </h2>
          <ul className="space-y-3 md:pl-32 mb-6 text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-primary mr-2">■</span>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">■</span>
              <p className="text-gray-600">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">■</span>
              <p className="text-gray-600">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <CustomButton className="bg-primary font-bold absolute bottom-4 right-4 md:bottom-8 md:right-8">
        Learn More
      </CustomButton>
    </Container>
  );
}
