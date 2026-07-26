import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" fill className="object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">About Anjali Enterprises</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting elegance and security for your homes since 2010. We are your trusted partners in home improvement.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Anjali Enterprises started with a simple mission: to provide homeowners and builders with high-quality, beautifully designed doors and windows without the exorbitant price tag. What began as a small shop has grown into a leading manufacturer and retailer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience, we've honed our craft, sourcing the best materials globally and employing skilled artisans. Every product in our catalogue represents our commitment to durability, aesthetics, and unmatched value.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="Workshop" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image src="https://images.unsplash.com/photo-1542621323-22ce9bd01844?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="Team" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To transform houses into beautiful homes by providing premium, innovative, and accessible door and window solutions that exceed customer expectations in quality and service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and recognized brand in the fenestration industry, known for our unwavering commitment to craftsmanship, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-900 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">5000+</div>
              <div className="text-gray-900 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-900 font-medium">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-900 font-medium">Expert Staff</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
