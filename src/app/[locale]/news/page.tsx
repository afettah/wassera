import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Menu, Search } from 'lucide-react';
import Container from '../../components/container';

import BackgroundImageContainer from '@/app/components/backgroundImageContainer';

export default function NewsPage() {
  // Define news data at the beginning
  const newsData = {
    breakingNews: {
      title: 'Breaking News: Major Scientific Discovery',
      description: 'Scientists announce breakthrough in quantum computing',
      image: '/placeholder.svg?height=400&width=800',
      content:
        'In a groundbreaking development, researchers at the Quantum Institute have achieved a major milestone in quantum computing, potentially revolutionizing the field of cryptography and data processing...',
    },
    latestNews: [
      'Global Summit Addresses Climate Change',
      'Tech Giant Unveils New Smartphone',
      'Sports Team Wins Championship',
      'Movie Star Announces Retirement',
    ],
    stories: [
      { title: 'Economic Forecast: Experts Predict Growth', image: '/placeholder.svg?height=200&width=300' },
      { title: 'New Study Reveals Health Benefits of Mediterranean Diet', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Space Agency Announces Plans for Mars Mission', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Environmental Initiative Aims to Reduce Plastic Waste', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Tech Startup Revolutionizes Renewable Energy Sector', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Global Education Summit Addresses Learning Gaps', image: '/placeholder.svg?height=200&width=300' },
    ],
  };

  return (
    <BackgroundImageContainer className="overflow-hidden">
      <Container className="min-h-screen">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <Button variant="outline" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search..." className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold">{newsData.breakingNews.title}</CardTitle>
                    <CardDescription>{newsData.breakingNews.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={newsData.breakingNews.image} alt="Quantum Computer" className="w-full h-64 object-cover mb-4 rounded-md" />
                    <p className="text-muted-foreground">{newsData.breakingNews.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Latest News</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {newsData.latestNews.map((title, index) => (
                          <li key={index}>
                            <Link href="#" className="text-sm hover:underline">
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.stories.map((story, index) => (
                  <Card key={index}>
                    <CardContent className="p-0">
                      <img src={story.image} alt={story.title} className="w-full h-40 object-cover" />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-lg">{story.title}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Separator className="my-8" />

              <Card>
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>Stay updated with the latest news delivered straight to your inbox.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex space-x-2">
                    <Input type="email" placeholder="Enter your email" className="flex-1" />
                    <Button type="submit">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </main>
          <footer className="border-t">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-muted-foreground">&copy; 2024 NewsDaily. All rights reserved.</p>
                </div>
                <nav className="flex space-x-4">
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    About Us
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Contact
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Terms of Service
                  </Link>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </Container>
    </BackgroundImageContainer>
  );
}
