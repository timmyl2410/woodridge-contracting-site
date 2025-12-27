import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Projects() {
  const projects = [
    //weird formatting because of copy and paste
    {
  id: 1,
  title: 'Modern Countertop & Cabinet Installation',
  category: 'Kitchen Remodeling',
  location: 'North Shore, MA',
  description: 'Complete kitchen renovation featuring custom cabinetry, clean modern finishes, and an open layout. This project highlights floating wood shelves, updated countertops, and a functional design built for everyday living and entertaining.',
  image: '/images/kitchen(2).jpg',
},

    {
  id: 2,
  title: 'Luxury Master Bathroom',
  category: 'Bathroom Renovation',
  location: 'North Shore, MA',
  description: 'Spa-inspired master bathroom remodel featuring a freestanding soaking tub, custom vanity, modern fixtures, and a bright, calming layout designed for comfort and relaxation.',
  image: '/images/bathroom(3).jpg',
},

    {
  id: 3,
  title: 'Custom Tile Walk-In Shower',
  category: 'Tile & Shower Work',
  location: 'North Shore, MA',
  description: 'Custom walk-in shower with detailed tile work, built-in bench, recessed shelving, and glass enclosure. Designed for durability, functionality, and a clean, modern look.',
  image: '/images/bathroom(5).jpg',

},

   {
  id: 4,
  title: 'Custom Outdoor Kitchen & Patio',
  category: 'Outdoor Living',
  location: 'North Shore, MA',
  description: 'Custom outdoor kitchen and patio built for entertaining, featuring a stone island, built-in grill, seating area, and durable materials designed to withstand New England weather.',
  image: '../images/patio(1).jpg',
},

   {
  id: 5,
  title: 'Finished Dining Room Bar Area',
  category: 'Living Room Finishing',
  location: 'North Shore, MA',
  description: 'Dining room transformation into a functional entertainment space featuring custom cabinetry, built-in shelving, and a clean, modern layout designed for hosting and everyday use.',
  image: '/images/kitchen(4).jpg',
},

    {
  id: 6,
  title: 'Custom Outdoor Bathroom',
  category: 'Custom Carpentry',
  location: 'North Shore, MA',
  description: 'Precision-crafted custom carpentry showcasing clean lines and attention to detail. This project includes custom wood paneling, trim work, and a tailored structure designed to complement the surrounding space.',
  image: '/images/shower(6).jpg',
},

  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of completed projects showcasing quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's create something amazing together
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Request a Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
}
