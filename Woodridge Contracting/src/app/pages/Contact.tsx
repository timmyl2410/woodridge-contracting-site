import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify will handle the form submission automatically
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again or contact us directly.');
      });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to start your project? Get in touch for a free, no-obligation consultation and estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-gray-900 mb-1">Phone</h3>
                        <a href="tel:978-590-4567" className="text-blue-600 hover:text-blue-700">
                          (978) 590-4567
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Click to call</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-gray-900 mb-1">Email</h3>
                        <a href="mailto:woodridgecontracting@yahoo.com" className="text-blue-600 hover:text-blue-700">
                          woodridgecontracting@yahoo.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                        <div className="ml-4">
                        <h3 className="text-gray-900 mb-1">Service Area</h3>
                          <p className="text-gray-600">
                      Proudly serving Wenham, MA and surrounding communities
                          </p>
                        </div>
                    </div>
                  </CardContent>
                </Card>


                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-gray-900 mb-1">Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 7 AM - 6 PM<br />
                          Saturday: 8 AM - 2 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl text-gray-900 mb-6">Request a Free Estimate</h2>
                  <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="mt-1 w-full h-10 px-3 rounded-md border border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select a service...</option>
                        <option value="kitchen">Kitchen Remodeling</option>
                        <option value="bathroom">Bathroom Renovation</option>
                        <option value="addition">Home Addition</option>
                        <option value="deck">Deck & Patio</option>
                        <option value="basement">Basement Finishing</option>
                        <option value="carpentry">Custom Carpentry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="mt-1"
                      />
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600">
                        By submitting this form, you agree to be contacted by Woodridge General Contracting regarding your project inquiry. We respect your privacy and will never share your information.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Request
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 mb-4">Service Areas</h2>
            <p className="text-gray-600">Proudly serving homeowners throughout North Shore Massachusetts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Topsfield', 'Wenham', 'Boxford', 'Newburyport', 'Hamilton', 'Rowley', 'Ipswich', 'Andover', 'North Andover', 'Middleton', 'Salem', 'Manchester by the Sea'].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg">
                <p className="text-gray-700">{city}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Don't see your town? <a href="tel:978-590-4567" className="text-blue-600 hover:text-blue-700">Give us a call</a> — we may still be able to help!
          </p>
        </div>
      </section>
    </div>
  );
}