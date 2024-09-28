import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Wrench, Users, Rocket, Heart, Zap, TrendingUp } from "lucide-react";
import Container from "../components/container";
import SubContainer from "../components/sub-container";

const visionMissionData = [
  {
    title: "Our Vision",
    description: "To be the first choice in the debt industry for monetizing locked capital and untapped assets, revolutionizing financial accessibility for all.",
    icon: <Lightbulb className="h-8 w-8" />,
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
    decorationClass: "bg-primary-foreground",
    decorationPosition: "top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16",
  },
  {
    title: "Our Mission",
    description: "To optimize the use of technological advances, providing new opportunities to give citizens and market participants access to untapped assets and financial growth.",
    icon: <Target className="h-8 w-8" />,
    bgClass: "bg-secondary",
    textClass: "text-secondary-foreground",
    decorationClass: "bg-secondary-foreground",
    decorationPosition: "bottom-0 left-0 w-32 h-32 translate-y-16 -translate-x-16",
  },
];

const valuesData = [
  {
    title: "Customer-Centricity",
    description: "Creating a seamless customer experience that goes beyond expectations, putting our clients at the heart of everything we do.",
    icon: <Users className="h-10 w-10" />,
  },
  {
    title: "Innovation",
    description: "Delivering innovative services by empowering our team to think big, embrace change, and push the boundaries of what's possible in finance.",
    icon: <Rocket className="h-10 w-10" />,
  },
  {
    title: "Social Impact",
    description: "Providing inclusive and affordable solutions across all beneficiary segments, ensuring financial services are accessible to everyone.",
    icon: <Heart className="h-10 w-10" />,
  },
  {
    title: "Agility",
    description: "Establishing our operating model by embracing an agile environment and fast-paced workplace, adapting quickly to market changes.",
    icon: <Zap className="h-10 w-10" />,
  },
  {
    title: "Growth",
    description: "Supporting Saudi Arabia's ambition to fuel growth in non-oil industries, contributing to a diverse and sustainable economy.",
    icon: <TrendingUp className="h-10 w-10" />,
  },
];

const servicesData = [
  {
    title: "Mortgage Split",
    description: "Offers a tailored financing solution by dividing your mortgage into separate portions with varying terms, including fixed and variable rates.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Investments",
    description: "Strategic opportunity to grow customers' financial inclusion, capitalizing on untapped equities with investment options tailored to your financial goals and risk tolerance.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Asset-Backed Loan",
    description: "Provides funding brokerage services secured by collateral, offering flexible financing options for various needs and situations.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Savings",
    description: "Flexible savings solutions designed to help you efficiently accumulate and manage your funds, ensuring your money works towards achieving your long-term financial objectives.",
    icon: <Wrench className="h-8 w-8" />,
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
];

export default function AboutPage() {
  return (
    <SubContainer className="overflow-hidden">
      <Container className="min-h-screen">
        <div className="container mx-auto px-4 space-y-24">
          <header className="relative text-center py-20">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Abstract financial graph"
              width={1200}
              height={400}
              className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl"
            />
            <div className="relative z-10">
              <h1 className="text-5xl font-bold tracking-tight mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforming the debt industry and unlocking potential through innovative financial solutions
              </p>
            </div>
          </header>

          <section aria-labelledby="vision-mission-heading" className="grid md:grid-cols-2 gap-12">
            {visionMissionData.map((item, index) => (
              <Card key={index} className={`${item.bgClass} ${item.textClass} overflow-hidden`}>
                <div className={`absolute ${item.decorationPosition} ${item.decorationClass} opacity-10 rounded-full`}></div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    {item.icon}
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section aria-labelledby="values-objectives-heading" className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Abstract shapes"
              width={600}
              height={600}
              className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10"
            />
            <div className="relative z-10">
              <h2 id="values-objectives-heading" className="text-4xl font-semibold mb-6 text-center">
                Core Values & Objectives
              </h2>
              <p className="text-center mb-12 text-lg max-w-3xl mx-auto">
                We define our priorities and objectives through our core values, shaped by our commitment 
                to contributing to the Kingdom&apos;s transformation in line with Saudi Vision 2030.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {valuesData.map((value, index) => (
                  <ValueCard key={index} {...value} />
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="services-heading" className="relative">
            <h2 id="services-heading" className="text-4xl font-semibold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </SubContainer>
  );
}


interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
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