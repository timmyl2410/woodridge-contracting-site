import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function Services() {
  const services = [
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with our complete remodeling services.',
      features: [
        'Custom cabinet design and installation',
        'Countertop selection and installation',
        'Flooring and tile work',
        'Lighting and electrical updates',
        'Plumbing modifications',
        'Appliance installation',
      ],
    },
    {
      title: 'Bathroom Renovation',
      description: 'Create a spa-like retreat with our professional bathroom renovation services.',
      features: [
        'Shower and tub installations',
        'Vanity and sink upgrades',
        'Tile and flooring work',
        'Fixture replacement',
        'Lighting improvements',
        'Accessibility modifications',
      ],
    },
    {
      title: 'Home Additions',
      description: 'Expand your living space with professionally designed and built home additions.',
      features: [
        'Room additions',
        'Second story additions',
        'Sunrooms and conservatories',
        'Garage construction',
        'In-law suites',
        'Seamless integration with existing structure',
      ],
    },
    {
      title: 'Deck & Patio Construction',
      description: 'Enhance your outdoor living with custom-built decks and patios.',
      features: [
        'Custom deck design',
        'Composite and wood decking',
        'Pergolas and gazebos',
        'Paver patios',
        'Outdoor kitchens',
        'Built-in seating and planters',
      ],
    },
    {
      title: 'Basement Finishing',
      description: 'Convert unused basement space into functional, beautiful living areas.',
      features: [
        'Moisture control and waterproofing',
        'Framing and drywall',
        'Flooring installation',
        'Electrical and lighting',
        'Bathroom additions',
        'Entertainment spaces',
      ],
    },
    {
      title: 'Custom Carpentry',
      description: 'Expert woodworking and carpentry for any project in your home.',
      features: [
        'Custom built-ins and shelving',
        'Crown molding and trim work',
        'Door and window installation',
        'Staircases and railings',
        'Wainscoting and paneling',
        'Custom cabinetry',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive general contracting services to bring your home improvement vision to life. Quality workmanship backed by over 20 years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make your home improvement project smooth and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'We meet to discuss your vision, needs, and budget' },
              { step: '2', title: 'Design & Planning', description: 'Detailed plans and accurate cost estimates' },
              { step: '3', title: 'Construction', description: 'Quality workmanship with minimal disruption' },
              { step: '4', title: 'Completion', description: 'Final walkthrough and your complete satisfaction' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">Request Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
