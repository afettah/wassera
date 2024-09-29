import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Container from '../components/container';
import AjrasLogo from '@/app/images/ajras.png';
import AnkrLogo from '@/app/images/ankr.png';
import IbanaLogo from '@/app/images/ibana.png';
import STCLogo from '@/app/images/stc.png';
import SCLogo from '@/app/images/SaudiCentral.png';
import CITCLogo from '@/app/images/citc.png';
import Design from '@/app/images/Design.svg';

const partnerCategories = [
  {
    title: 'Technology Providers',
    partners: [
      { name: 'STC', logo: STCLogo },
      { name: 'Ankr', logo: AnkrLogo },
      { name: 'Ankr', logo: AnkrLogo },
      { name: 'Ankr', logo: AnkrLogo },
    ],
  },
  {
    title: 'Potential Clients',
    partners: [
      { name: 'Ajras', logo: AjrasLogo },
      { name: 'Ibana', logo: IbanaLogo },
    ],
  },
  {
    title: 'Regulatory Bodies',
    partners: [
      {
        name: 'Saudi Central Bank',
        logo: SCLogo,
      },
      {
        name: 'Communications, Space & Technology Commission',
        logo: CITCLogo,
      },
      {
        name: 'Communications, Space & Technology Commission',
        logo: CITCLogo,
      },
      {
        name: 'Communications, Space & Technology Commission',
        logo: CITCLogo,
      },
    ],
  },
];

function renderTechnologyProviders() {
  const category = partnerCategories.find((category) => category.title === 'Technology Providers');
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">{category?.title}</h3>
      <div className="space-y-6">
        {category?.partners.map((partner, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow min-h-32 flex justify-center items-center">
            <CardContent className="flex items-center justify-center p-4 h-24">
              <Image src={partner.logo} alt={partner.name} width={300} height={100} className="max-w-full max-h-full object-contain" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function renderPotentialClients() {
  const category = partnerCategories.find((category) => category.title === 'Potential Clients');
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">{category?.title}</h3>
      <div className="space-y-6">
        {category?.partners.map((partner, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow min-h-32 flex justify-center items-center">
            <CardContent className="flex items-center justify-center p-4 h-24">
              <Image src={partner.logo} alt={partner.name} width={300} height={100} className="max-w-full max-h-full object-contain" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <Design />
      </div>
    </div>
  );
}

function renderRegulatoryBodies() {
  const category = partnerCategories.find((category) => category.title === 'Regulatory Bodies');
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">{category?.title}</h3>
      <div className="space-y-6">
        {category?.partners.map((partner, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow min-h-32 flex justify-center items-center">
            <CardContent className="flex items-center justify-center p-4 h-24">
              <Image src={partner.logo} alt={partner.name} width={300} height={100} className="max-w-full max-h-full object-contain" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function WaseeraPartnerships() {
  return (
    <Container className="py-14">
      <div>
        <h2 className="text-6xl font-semibold text-center mb-2">
          <span className="text-primary">Waseera</span> Partnerships
        </h2>
        <p className="text-center text-secondary-foreground text-lg mb-8 my-4">
          Our relationships prepare businesses for the future. We work with a trusted, select group of partners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderTechnologyProviders()}
          {renderPotentialClients()}
          {renderRegulatoryBodies()}
        </div>
      </div>
    </Container>
  );
}
