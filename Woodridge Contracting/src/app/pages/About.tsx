import { Link } from 'react-router-dom';
import { Shield, Award, Users, Handshake } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">About Woodridge</h1>
            <p className="text-xl text-gray-300">
              Over 20 years of quality craftsmanship, reliable service, and satisfied homeowners throughout North Shore Massachusetts.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Woodridge Contracting was founded in 2003 with a simple mission: to provide homeowners with honest, quality construction services they can trust. What started as a small operation has grown into one of Massachusetts' most respected general contracting companies.
                </p>
                <p>
                  Our founders, Ben Burridge and Andy Wood, began their careers as carpenters and worked their way through every aspect of the construction industry. This hands-on experience gave them deep respect for quality workmanship and the importance of clear communication with clients.
                </p>
                <p>
                  Today, Woodridge is a family-owned business that continues to uphold those same values. We treat every project—big or small—with the same level of care and attention to detail that we'd want for our own homes.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587052694737-a972e4186288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdG9yJTIwd29ya2luZ3xlbnwxfHx8fDE3NjY0OTQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Contractor at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust & Integrity',
                description: 'Honest communication, transparent pricing, and reliable service on every project.',
              },
              {
                icon: Award,
                title: 'Quality Craftsmanship',
                description: 'Meticulous attention to detail and pride in every aspect of our work.',
              },
              {
                icon: Users,
                title: 'Client Focus',
                description: 'Your satisfaction is our success. We listen and deliver on our promises.',
              },
              {
                icon: Handshake,
                title: 'Accountability',
                description: 'We stand behind our work with warranties and ongoing support.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Licensed & Insured</h2>
            <p className="text-xl text-gray-600">
              Your peace of mind is our priority
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl text-gray-900 mb-4">Licensing & Certifications</h3>
                  <ul className="space-y-2 text-gray-700">
                      <li>• Fully licensed & insured in Massachussetts</li>
                      <li>• Experienced in residential remodeling & renovations</li>
                       <li>• Safety-focused job practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl text-gray-900 mb-4">Insurance Coverage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fully insured for residential contracting projects</li>
                    <li>• Committed to safe and responsible job-site practices</li>
                    <li>• Care taken to protect client property during all work</li>
                    <li>• Quality workmanship backed by clear project expectations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Experience the Woodridge Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your home improvement project to life
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}