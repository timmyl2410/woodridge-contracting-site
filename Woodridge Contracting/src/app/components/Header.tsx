import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white">WD</span>
              </div>
              <div className="ml-3">
                <div className="text-gray-900">Woodridge</div>
                <div className="text-xs text-gray-600">General Contracting</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="tel:978-590-4567" className="flex items-center text-gray-700 hover:text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>(978) 590-4567</span>
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:978-590-4567"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>(978) 590-4567</span>
              </a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 mx-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}