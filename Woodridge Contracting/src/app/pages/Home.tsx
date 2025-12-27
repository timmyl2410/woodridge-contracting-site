import { Link } from 'react-router-dom';
import { Check, Phone, Award, Users, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Renovation',
      image: '/images/kitchen(4).jpg',
    },
    {
      id: 2,
      title: 'Luxury Bathroom Remodel',
      image: '/images/bathroom(3).jpg',
    },
    {
      id: 3,
      title: 'Custom Patio Construction',
      image: '/images/patio(1).jpg',
    },
    {
      id: 4,
      title: 'Countertop Installation',
      image: '/images/kitchen(2).jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672627170267-fca17bb54156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjY0ODA0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction site"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Quality Craftsmanship You Can Trust
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Expert general contracting services for homeowners in North Shore Massachusetts. Licensed, insured, and locally owned for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                <Link to="/contact">Request Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg">
                <a href="tel:978-590-4567">
                  <Phone className="w-5 h-5 mr-2" />
                  (978) 590-4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Licensed & Insured</div>
            </div>
            <div>
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">20+ Years Experience</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Locally Owned</div>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">On-Time Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From kitchens to complete home renovations, we bring your vision to life with quality workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Kitchen Remodeling', description: 'Transform your kitchen into a beautiful, functional space with custom cabinets, countertops, and modern appliances.' },
              { title: 'Bathroom Renovation', description: 'Create your dream bathroom with quality fixtures, tile work, and expert plumbing installations.' },
              { title: 'Home Additions', description: 'Expand your living space with seamlessly integrated additions that match your home\'s architecture.' },
              { title: 'Deck & Patio', description: 'Enhance your outdoor living with custom-built decks and patios designed for durability and style.' },
              { title: 'Basement Finishing', description: 'Convert your basement into usable living space with proper insulation, flooring, and finishing.' },
              { title: 'Custom Carpentry', description: 'Precision woodwork including trim, built-ins, and custom cabinetry for any room in your home.' },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">
              See the quality of our work and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-3">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-gray-900">{project.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free, no-obligation estimate for your next home improvement project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg">
              <a href="tel:978-590-4567">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Today
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}