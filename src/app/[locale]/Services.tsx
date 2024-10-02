import { FC } from 'react';
import ReactFlow, { Controls, Background, Node, Edge, Position } from 'reactflow';
import 'reactflow/dist/style.css';

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 'service1',
    title: 'Web Development',
    description:
      'Create stunning, responsive websites tailored to your needs. Our expert developers use cutting-edge technologies to bring your vision to life.',
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'service2',
    title: 'Mobile App Development',
    description:
      'Build powerful, user-friendly mobile applications for iOS and Android. We deliver seamless experiences that keep your users engaged.',
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'service3',
    title: 'Cloud Solutions',
    description:
      'Harness the power of cloud computing with our scalable, secure solutions. Optimize your infrastructure and reduce costs with our expert guidance.',
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'service4',
    title: 'AI & Machine Learning',
    description:
      'Leverage the power of artificial intelligence to gain insights and automate processes. Our AI solutions drive innovation and efficiency in your business.',
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
];

// Create nodes for each service
const serviceNodes: Node[] = services.map((service, index) => ({
  id: service.id,
  position: { x: 0, y: index * 300 },
  data: {
    label: (
      <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
        <img src={service.imageUrl} alt={service.title} className="w-40 h-40 object-cover" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{service.title}</h2>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    ),
  },
  type: 'default',
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
}));

// Create edges to connect the nodes
const serviceEdges: Edge[] = services
  .map((service, index) => {
    if (index === services.length - 1) return null; // No edge for the last item
    return {
      id: `e${service.id}-${services[index + 1].id}`,
      source: service.id,
      target: services[index + 1].id,
      type: 'smoothstep', // Smooth curved connection
      animated: true, // Animates the edge for visual effect
    };
  })
  .filter((edge) => edge !== null); // Filter out null edges

const ServicesPage: FC = () => {
  return (
    <div className="h-screen w-full">
      <ReactFlow nodes={serviceNodes} edges={serviceEdges} nodesDraggable={false} fitView>
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ServicesPage;
