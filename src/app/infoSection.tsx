import Image from 'next/image';
function InfoSection() {
  const cards = [
    {
      title: 'Why Wassera?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      link: '/why-wassera',
      image: '/images/wassera.svg',
    },
    {
      title: 'Our Mission',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      link: '/why-wassera',
      image: '/images/mission.svg',
    },
    {
      title: 'Our Vision',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      link: '/why-wassera',
      image: '/images/mission.svg',
    },
  ];
  return (
    <section className="info-section">
      <div className=" mt-20">
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 items-center justify-center ">
          {cards.map((card) => (
            <div key={card.title} className="bg-background-secondary max-w-sm rounded-xl overflow-hidden shadow-lg  ">
              <div className="mt-4 flex items-center justify-center">
                <Image className="w-30 h-30" src={card.image} alt={card.title} width={200} height={200} />
              </div>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-4 text text-center">{card.title}</div>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
              <div className="flex justify-center">
                <button className="bg-green-300/10 px-6 py-3 text-primary uppercase w-full sm:w-auto mx-auto">Learn more</button>
              </div>
              <div className="pb-4 mb-0.2 border-b-2 border-primary w-1/2 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
