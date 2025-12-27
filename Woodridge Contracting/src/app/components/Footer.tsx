import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900">WD</span>
              </div>
              <div className="ml-3">
                <div className="text-white">Woodridge</div>
                <div className="text-xs text-gray-400">General Contracting</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Quality craftsmanship and reliable service for over 20 years. Licensed, insured, and locally owned.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white">Our Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Home Additions</li>
              <li>Deck & Patio</li>
              <li>Basement Finishing</li>
              <li>Custom Carpentry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:978-590-4567" className="hover:text-white">(978) 590-4567</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:woodridgecontracting@yahoo.com" className="hover:text-white">woodridgecontracting@yahoo.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Wenham, MA 01984</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100054293556354" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/woodridge_hamilton?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Woodridge Contracting. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Licensed & Insured</p>
          <p className="mt-2 text-gray-400">Website created by <a href="mailto:timmyl2410@gmail.com" className="text-blue-400 hover:text-blue-300">Lull Web Design</a></p>
        </div>
      </div>
    </footer>
  );
}