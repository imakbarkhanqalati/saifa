import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PackageIcon, ArrowRightIcon, HomeIcon, QuoteIcon, StarIcon, ShieldCheckIcon } from '../components/icons/Icons';

interface ProductCategoriesPageProps {}

const ProductCategoriesHero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section 
      className="relative h-[400px] flex flex-col justify-center items-center text-white pt-24"
      style={{ backgroundImage: "url('')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-85 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Leading Product Categories</h1>
        <p className="mt-2 text-lg text-gray-300">Discover the leading product categories our clients import from China</p>
        <div className="mt-4 text-sm flex items-center justify-center space-x-2">
          <HomeIcon className="w-4 h-4" />
          <span>/</span>
          <span>Product Categories</span>
        </div>
      </div>
    </section>
  );
};

const ProductCategoriesPage: React.FC<ProductCategoriesPageProps> = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, title: "Premium Stocks", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop", description: "High-quality investment opportunities and premium stock options" },
    { id: 2, title: "Packaging", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop", description: "Professional packaging materials and solutions for all industries" },
    { id: 3, title: "Food Items", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop", description: "Fresh and processed food products from trusted suppliers" },
    { id: 4, title: "Hardware Tools & Drills", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop", description: "Professional tools and hardware equipment for construction and DIY" },
    { id: 5, title: "Grooming", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop", description: "Hair care products, wigs, and beauty tools" },
    { id: 6, title: "Printing & Packaging", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=400&auto=format&fit=crop", description: "Industrial printing equipment and packaging solutions" },
    { id: 7, title: "Medical Equipments & Machines", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop", description: "Medical devices and healthcare equipment" },
    { id: 8, title: "Mobile Parts & Accessories", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=400&auto=format&fit=crop", description: "Smartphone components and mobile accessories" },
    { id: 9, title: "Mobile & Airpods Cases", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=400&auto=format&fit=crop", description: "Phone cases and wireless earbud accessories" },
    { id: 10, title: "Audio & Video", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&auto=format&fit=crop", description: "Music and video equipment and accessories" },
    { id: 11, title: "Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop", description: "Shoes, sneakers, and footwear for all occasions" },
    { id: 12, title: "Jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop", description: "Fashion accessories and jewelry items" },
    { id: 13, title: "Unique Items & Collectibles", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", description: "Antiques, collectibles, and unique items" },
    { id: 14, title: "Leather Crafts", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop", description: "Leather products and handmade crafts" },
    { id: 15, title: "Home & Decor", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop", description: "Interior decoration and home improvement items" },
    { id: 16, title: "House Hold", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop", description: "Cleaning supplies and household essentials" },
    { id: 17, title: "Digital Display Stands", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop", description: "Display equipment and digital signage solutions" },
    { id: 18, title: "Baby Care", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=400&auto=format&fit=crop", description: "Infant products and baby care essentials" },
    { id: 19, title: "Copy Wrist Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&auto=format&fit=crop", description: "Timepieces and wristwatch collections" },
    { id: 20, title: "Computers", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=400&auto=format&fit=crop", description: "Computer components and technology equipment" },
    { id: 21, title: "School Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop", description: "Educational accessories and school supplies" },
    { id: 22, title: "Clothing", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop", description: "Fashion items and clothing collections" },
    { id: 23, title: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=400&auto=format&fit=crop", description: "Electronic devices and gadgets" },
    { id: 24, title: "Toys", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=400&auto=format&fit=crop", description: "Children's toys and entertainment items" },
    { id: 25, title: "Hand Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop", description: "Fashion accessories and handbag collections" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductCategoriesHero />

      {/* Categories Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our comprehensive range of product categories, each carefully curated to meet your import needs. 
              From electronics to fashion, we handle everything with expert inspection and logistics services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Red Banner Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-red-600 px-3 py-2">
                    <h3 className="text-white font-bold text-sm text-center truncate">{category.title}</h3>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <h4 className="text-gray-900 font-semibold mb-2 text-sm">{category.title}</h4>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{category.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => navigate('/request-quote')}
                      className="w-full bg-blue-900 text-white px-3 py-2 rounded text-xs font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
                    >
                      <PackageIcon className="w-3 h-3 mr-1"/>
                      Get Quote
                    </button>
                    <button 
                      onClick={() => window.open('https://wa.me/+8618306101718', '_blank')}
                      className="w-full bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded text-xs font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Why Choose Our Products?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Every product category we handle is backed by rigorous quality control, competitive pricing, and reliable logistics. 
                From sourcing to delivery, we ensure excellence at every step.
              </p>
              
              {/* Feature Boxes Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                      <ShieldCheckIcon className="w-6 h-6 text-white"/>
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">Quality Assured</h5>
                    <p className="text-gray-600 text-sm">Thorough inspections ensure high standards before shipping.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                      <PackageIcon className="w-6 h-6 text-white"/>
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">Secure Packaging</h5>
                    <p className="text-gray-600 text-sm">Professional packaging for safe global delivery.</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-8 py-3 bg-blue-900 text-white font-bold text-lg rounded-md shadow-lg hover:bg-blue-800 transition-colors flex items-center"
              >
                Learn More About Our Services
                <ArrowRightIcon className="w-5 h-5 ml-2"/>
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&auto=format&fit=crop" 
                alt="Quality products and packaging" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Import Process Section */}
      <section className="py-20 bg-blue-900 text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Simple Import Process</h2>
          <p className="text-blue-200 mb-16 max-w-2xl mx-auto">From product selection to doorstep delivery, we handle everything for you.</p>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-700 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center text-3xl font-bold border-4 border-blue-700 z-10">
                  <QuoteIcon className="w-12 h-12"/>
                </div>
                <h4 className="text-xl font-semibold mt-4 mb-2">Select Products</h4>
                <p className="text-sm text-blue-200">Choose from our extensive product categories.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center text-3xl font-bold border-4 border-blue-700 z-10">
                  <ShieldCheckIcon className="w-12 h-12"/>
                </div>
                <h4 className="text-xl font-semibold mt-4 mb-2">Quality Check</h4>
                <p className="text-sm text-blue-200">We inspect and verify product quality.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center text-3xl font-bold border-4 border-blue-700 z-10">
                  <PackageIcon className="w-12 h-12"/>
                </div>
                <h4 className="text-xl font-semibold mt-4 mb-2">Safe Delivery</h4>
                <p className="text-sm text-blue-200">Secure packaging and timely delivery worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', quote: 'Amazing variety of products and excellent quality control. My electronics order arrived perfectly packaged!', rating: 5, category: 'Electronics' },
              { name: 'Ahmed Hassan', quote: 'Great service for clothing imports. The team helped me source exactly what I needed at competitive prices.', rating: 5, category: 'Clothing' },
              { name: 'Maria Rodriguez', quote: 'Reliable partner for home decor items. Fast shipping and professional handling throughout the process.', rating: 4, category: 'Home & Decor' },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <QuoteIcon className="text-red-600 opacity-30 w-12 h-12 mb-4"/>
                <p className="text-gray-600 mb-6 italic">"{t.quote}"</p>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.category} Import</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Import Journey?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific import needs and get a personalized quote. 
            We're here to make your importing process smooth and efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/request-quote')}
              className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-md shadow-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
            >
              Get a Quote
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-white text-blue-900 font-bold text-lg rounded-md shadow-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategoriesPage;
