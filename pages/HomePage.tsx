import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRightIcon, PlaneIcon, QuoteIcon, StarIcon, ShipIcon, TruckIcon, SearchIcon, HandshakeIcon, 
  PackageIcon, ShieldCheckIcon, GlobeIcon, FlagIconUS, FlagIconPK, FlagIconUAE, FlagIconUK, FlagIconEU,
  ClipboardIcon, HomeIcon, PhoneIcon, MailIcon, MapPinIcon
} from '../components/icons/Icons';

interface HomePageProps {}

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
  <section 
    className="relative h-[650px] flex items-center text-white pt-24"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611703225023-52796e957989?q=80&w=2832&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-blue-900 opacity-80 z-0"></div>
    <div 
      className="absolute inset-0 z-0 opacity-10"
      style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
          Fast, Reliable Cargo Delivered to Your Doorstep
        </h2>
        <p className="mt-4 text-lg md:text-xl font-light text-gray-200 drop-shadow-lg max-w-xl">
          From China to anywhere in the world, we ensure safe, timely and cost-effective delivery through our commitment.
        </p>
        <button
          onClick={() => navigate('/request-quote')}
          className="mt-8 px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-md shadow-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
        >
          Get a Quote
        </button>
      </div>
    </div>
  </section>
  );
};

const IntroSection: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Saifa International Trading</h3>
        <p className="text-gray-600 mb-6">
          Saifa International Trading specializes in seamless cargo shipping from China to the world. Whether you're a business or an individual, we handle everything from sourcing and procurement to quality inspection and delivery. Our expertise ensures safe, timely, and cost-effective solutions. With years of experience and a trusted network, we make global imports simple, efficient, and affordable.
        </p>
        <div className="space-y-4">
          <div className="flex items-center"><ShipIcon className="w-6 h-6 mr-3 text-red-600"/><span>Scalable Cargo Shipping</span></div>
          <div className="flex items-center"><PackageIcon className="w-6 h-6 mr-3 text-red-600"/><span>Complete Import Solutions</span></div>
          <div className="flex items-center"><PlaneIcon className="w-6 h-6 mr-3 text-red-600"/><span>Air & Sea Freight</span></div>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">Read More</button>
      </div>
      <div>
        <img src="/media/cargo-plane.jpg" alt="Cargo containers" className="rounded-lg shadow-xl"/>
      </div>
    </div>
  </section>
);

const WhyTrustUsSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img 
          src="/media/why-trust-us.jpg" 
          alt="Business professionals discussing" 
          className="rounded-lg shadow-xl w-full h-[600px] object-cover"
        />
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">Why Trust Us?</h3>
        <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Experience, reliability and cost effective solutions. Our expertise ensures safe, timely and hassle free cargo shipping from China to anywhere in the world.
        </h4>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Saifa International Trading specializes in seamless cargo shipping from China via air and sea. Whether you're a business or an individual, we manage everything from sourcing and procurement to quality inspection and delivery. Our expertise ensures safe, timely and hassle free shipping, no matter the destination. With years of experience and a trusted network, we make global imports simple, efficient and affordable. Let us handle your logistics with confidence!
        </p>
        
        {/* Feature Boxes Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-white"/>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Trusted Expertise</h5>
              <p className="text-gray-600 text-sm">Years of experience in global cargo and logistics.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                <ClipboardIcon className="w-6 h-6 text-white"/>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Quality Assurance</h5>
              <p className="text-gray-600 text-sm">Thorough inspections ensure high standards before shipping.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                <GlobeIcon className="w-6 h-6 text-white"/>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Global Reach</h5>
              <p className="text-gray-600 text-sm">Shipping solutions from China to anywhere in the world.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                <HandshakeIcon className="w-6 h-6 text-white"/>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Customer Support</h5>
              <p className="text-gray-600 text-sm">Dedicated assistance for smooth, hassle free shipping experiences.</p>
            </div>
          </div>
        </div>
        
        <button className="px-8 py-3 bg-blue-900 text-white font-bold text-lg rounded-md shadow-lg hover:bg-blue-800 transition-colors flex items-center">
          Uncover More
          <ArrowRightIcon className="w-5 h-5 ml-2"/>
        </button>
      </div>
    </div>
  </section>
);

const PopularProductsSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    { id: 1, title: "Premium Stocks", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop", description: "High-quality investment opportunities and premium stock options" },
    { id: 2, title: "Packaging", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop", description: "Professional packaging materials and solutions for all industries" },
    { id: 3, title: "Food Items", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop", description: "Fresh and processed food products from trusted suppliers" },
    { id: 4, title: "Hardware Tools & Drills", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop", description: "Professional tools and hardware equipment for construction and DIY" },
    { id: 5, title: "Grooming", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop", description: "Hair care products, wigs, and beauty tools" },
    { id: 6, title: "Printing & Packaging", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1000&auto=format&fit=crop", description: "Industrial printing equipment and packaging solutions" },
    { id: 7, title: "Medical Equipments & Machines", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1000&auto=format&fit=crop", description: "Medical devices and healthcare equipment" },
    { id: 8, title: "Mobile Parts & Accessories", image: "https://images.unsplash.com/photo-1511707171631-2edc7dd94f42?q=80&w=1000&auto=format&fit=crop", description: "Smartphone components and mobile accessories" },
    { id: 9, title: "Mobile & Airpods Cases", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1000&auto=format&fit=crop", description: "Phone cases and wireless earbud accessories" },
    { id: 10, title: "Audio & Video", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop", description: "Music and video equipment and accessories" },
    { id: 11, title: "Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop", description: "Shoes, sneakers, and footwear for all occasions" },
    { id: 12, title: "Jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop", description: "Fashion accessories and jewelry items" },
    { id: 13, title: "Unique Items & Collectibles", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", description: "Antiques, collectibles, and unique items" },
    { id: 14, title: "Leather Crafts", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop", description: "Leather products and handmade crafts" },
    { id: 15, title: "Home & Decor", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop", description: "Interior decoration and home improvement items" },
    { id: 16, title: "House Hold", image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?q=80&w=1000&auto=format&fit=crop", description: "Cleaning supplies and household essentials" },
    { id: 17, title: "Digital Display Stands", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", description: "Display equipment and digital signage solutions" },
    { id: 18, title: "Baby Care", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1000&auto=format&fit=crop", description: "Infant products and baby care essentials" },
    { id: 19, title: "Copy Wrist Watches", image: "https://images.unsplash.com/photo-1523170335258-f5b88d7c8c35?q=80&w=1000&auto=format&fit=crop", description: "Timepieces and wristwatch collections" },
    { id: 20, title: "Computers", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1000&auto=format&fit=crop", description: "Computer components and technology equipment" },
    { id: 21, title: "School Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop", description: "Educational accessories and school supplies" },
    { id: 22, title: "Clothing", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop", description: "Fashion items and clothing collections" },
    { id: 23, title: "Electronics", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1000&auto=format&fit=crop", description: "Electronic devices and gadgets" },
    { id: 24, title: "Toys", image: "https://images.unsplash.com/photo-1558060370-539c8d0a2d0b?q=80&w=1000&auto=format&fit=crop", description: "Children's toys and entertainment items" },
    { id: 25, title: "Hand Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop", description: "Fashion accessories and handbag collections" }
  ];

  // Auto-roll functionality
  useEffect(() => {
    const maxSlides = Math.ceil(products.length / 5);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 5000); // Change slide every 5 seconds for smoother experience

    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    const maxSlides = Math.ceil(products.length / 5);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(products.length / 5);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">Popular Imported Products</h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            From electronics to fashion, businesses and individuals trust us to import top-selling products. 
            Explore the most in demand items shipped through our services and get yours delivered safely, 
            efficiently and hassle free from China.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 20}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-1/5 flex-shrink-0 px-3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {/* Red Banner Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 px-3 py-2">
                      <h4 className="text-white font-bold text-sm text-center truncate">{product.title}</h4>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <h5 className="text-gray-900 font-semibold mb-2 text-sm">{product.title}</h5>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button className="w-full bg-blue-900 text-white px-3 py-2 rounded text-xs font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center">
                        <PackageIcon className="w-3 h-3 mr-1"/>
                        Explore More
                      </button>
                      <button className="w-full bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded text-xs font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        WhatsApp Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ArrowRightIcon className="w-6 h-6 text-gray-600 rotate-180"/>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ArrowRightIcon className="w-6 h-6 text-gray-600"/>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 mb-6">
          {Array.from({ length: Math.ceil(products.length / 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                Math.floor(currentSlide / 5) === index ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Discover More Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/product-categories')}
            className="px-8 py-3 bg-blue-900 text-white font-bold text-lg rounded-md shadow-lg hover:bg-blue-800 transition-colors flex items-center mx-auto"
          >
            Discover More
            <ArrowRightIcon className="w-5 h-5 ml-2"/>
          </button>
        </div>
      </div>
    </section>
  );
};

const ServicesSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our Services</h3>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">We specialize in seamless and efficient cargo solutions, ensuring that your shipments arrive safely and on time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { title: 'Procurement', img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=400&h=300&auto=format&fit=crop' },
          { title: 'Import', img: '/media/import.jpg' },
          { title: 'Export', img: '/media/export.svg' },
          { title: 'Sourcing', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&h=300&auto=format&fit=crop' },
        ].map(service => (
          <div key={service.title} className="bg-white p-2 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img src={service.img} alt={service.title} className="rounded-md mb-4 h-40 w-full object-cover" />
            <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
            <p className="mt-2 text-gray-600 text-sm px-4">Seamless and reliable services tailored for your business needs.</p>
            <button className="mt-4 mb-2 text-blue-800 font-semibold hover:underline">Discover More <ArrowRightIcon className="inline w-4 h-4" /></button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MarketsSection: React.FC = () => {
  const navigate = useNavigate();
    const [activeMarket, setActiveMarket] = useState('USA');
    const markets = {
        USA: { name: 'United States Of America', flag: <FlagIconUS className="w-10 h-auto" />, content: "Shipping from China to USA is smooth with our reliable cargo services. We ensure safe, timely and professional handling, ensuring fast air and sea freight options.", points: ["Fast and secure shipping across all US states", "Competitive rates with no hidden fees", "Hassle-free customs clearance", "Secure warehousing and inventory"] },
        Europe: { name: 'Europe', flag: <FlagIconEU className="w-10 h-auto" />, content: "Our European logistics network provides comprehensive coverage, ensuring your cargo from China reaches any destination with efficiency and care.", points: ["Full EU coverage", "VAT and customs expertise", "Multiple freight options"] },
        Pakistan: { name: 'Pakistan', flag: <FlagIconPK className="w-10 h-auto" />, content: "We offer specialized cargo services for Pakistan, managing all logistics from pickup in China to delivery at your doorstep, with complete customs support.", points: ["Major cities covered", "End-to-end logistics", "Local expertise"] },
        UAE: { name: 'United Arab Emirates', flag: <FlagIconUAE className="w-10 h-auto" />, content: "Ship your goods to the UAE with confidence. We provide fast, reliable air and sea freight solutions tailored to the needs of this dynamic market.", points: ["Coverage across Emirates", "Express air freight", "Full container load (FCL)"] },
        UK: { name: 'United Kingdom', flag: <FlagIconUK className="w-10 h-auto" />, content: "Our dedicated UK shipping routes ensure your cargo is handled professionally, with timely customs clearance and delivery across the United Kingdom.", points: ["Nationwide UK delivery", "Post-Brexit compliance", "Secure and tracked shipping"] },
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Serving Key Global Markets</h3>
                <div className="flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden min-h-[450px]">
                    <div className="flex md:flex-col bg-gray-100">
                        {Object.entries(markets).map(([key, { name, flag }]) => (
                            <button key={key} onClick={() => setActiveMarket(key)} className={`p-4 w-full text-left font-semibold transition-colors flex items-center gap-4 relative ${activeMarket === key ? 'bg-white' : 'hover:bg-gray-200'}`}>
                                {activeMarket === key && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600"></div>}
                                <div className={`p-2 rounded-full ${activeMarket === key ? 'bg-red-50' : 'bg-gray-200'}`}>{flag}</div>
                                <span className="hidden lg:inline">{name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="bg-blue-900 text-white p-8 md:p-12 flex-1 flex flex-col justify-center">
                        <h4 className="text-3xl font-bold mb-4">{markets[activeMarket].name}</h4>
                        <p className="mb-6">{markets[activeMarket].content}</p>
                        <ul className="space-y-3">
                            {markets[activeMarket].points.map(point => <li key={point} className="flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2 text-green-400 flex-shrink-0"/> {point}</li>)}
                        </ul>
                         <button onClick={() => navigate('/request-quote')} className="mt-8 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors self-start">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ImportJourneySection: React.FC = () => (
    <section className="py-20 bg-blue-900 text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Hassle Free Import Journey</h3>
            <p className="text-blue-200 mb-16 max-w-2xl mx-auto">Our streamlined process ensures hassle-free cargo shipment. We handle everything, keeping you informed at every step.</p>
            <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-700 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center text-3xl font-bold border-4 border-blue-700 z-10">
                            <QuoteIcon className="w-12 h-12"/>
                        </div>
                        <h4 className="text-xl font-semibold mt-4 mb-2">Request A Quote</h4>
                        <p className="text-sm text-blue-200">Tell us what you need and we provide a transparent quote.</p>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center text-3xl font-bold border-4 border-blue-700 z-10">
                            <ClipboardIcon className="w-12 h-12"/>
                        </div>
                        <h4 className="text-xl font-semibold mt-4 mb-2">Book Your Service</h4>
                        <p className="text-sm text-blue-200">Choose the service you need, from sourcing to shipping.</p>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center text-3xl font-bold border-4 border-blue-700 z-10">
                            <HomeIcon className="w-12 h-12"/>
                        </div>
                        <h4 className="text-xl font-semibold mt-4 mb-2">Doorstep Delivery</h4>
                        <p className="text-sm text-blue-200">We deliver directly to your location, ensuring timely and safe arrival.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Ayesha Malik', quote: 'Excellent communication and professional handling of my cargo. I\'d definitely use their services again!', rating: 5 },
          { name: 'Bilal Hussain', quote: 'I ordered electronics from China, and they arrived safely. Seamless shipping process overall.', rating: 5 },
          { name: 'Emily Watson', quote: 'Good service but tracking updates could be more frequent. My package arrived safely.', rating: 4 },
        ].map(t => (
          <div key={t.name} className="bg-white p-8 rounded-lg shadow-lg">
            <QuoteIcon className="text-red-600 opacity-30 w-12 h-12 mb-4"/>
            <p className="text-gray-600 mb-6 italic">"{t.quote}"</p>
            <div className="border-t pt-4 flex items-center justify-between">
                <div>
                    <p className="font-bold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">Customer</p>
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
);

const HomeContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Get in Touch</h3>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600">Have questions or need a quote? Contact us for reliable import, sourcing and shipping solutions. Our team is ready to assist you!</p>
            <div className="space-y-4">
              <div className="flex items-start"><MapPinIcon className="w-6 h-6 mr-3 text-red-600 mt-1 flex-shrink-0"/><div><h5 className="font-bold">China</h5><p>No.80-86 Xibayi Road,Liwan District,Guanazhou City.Building 5 and 6 (Self-numbered Sixth Floor), C013</p></div></div>
              <div className="flex items-start"><MapPinIcon className="w-6 h-6 mr-3 text-red-600 mt-1 flex-shrink-0"/><div><h5 className="font-bold">Pakistan</h5><p>Office 1205, 12th Floor Al-Najeebi Centre, Saddar, Karachi, Pakistan.</p></div></div>
              <div className="flex items-start"><PhoneIcon className="w-6 h-6 mr-3 text-red-600 mt-1 flex-shrink-0"/><div><h5 className="font-bold">China Operations - Sikander Ali Qalati</h5><p>+86 183 0610 1718</p></div></div>
              <div className="flex items-start"><PhoneIcon className="w-6 h-6 mr-3 text-green-600 mt-1 flex-shrink-0"/><div><h5 className="font-bold">WeChat - Guangzhou Saifa ITCL</h5><p>Scan QR code to add us as friend</p></div></div>
            </div>
          </div>
          <div className="p-8 bg-blue-900 rounded-lg shadow-2xl text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
            <h4 className="text-2xl font-bold mb-6">Write to Us</h4>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md"/>
              <input type="text" name="company" placeholder="Company Name" onChange={handleChange} className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md"/>
              <input type="email" name="email" placeholder="john@doe.com" onChange={handleChange} className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md"/>
              <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md"/>
              <textarea name="message" placeholder="Message (Optional)" rows={3} onChange={handleChange} className="sm:col-span-2 w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md"></textarea>
              <button type="submit" className="sm:col-span-2 justify-self-start px-8 py-2 bg-red-600 text-white font-bold rounded-md shadow-lg hover:bg-red-700 transition-colors">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnersSection: React.FC = () => (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold text-center text-gray-600 mb-8">Our Trusted Partners</h3>
            <div className="flex justify-center items-center gap-x-8 md:gap-x-16 flex-wrap">
                {['dhl', 'thaiairways', 'fedex', 'qatarairways', 'maersk'].map(partner => (
                    <img key={partner} src={`https://logo.clearbit.com/${partner}.com`} alt={`${partner} logo`} className="h-8 md:h-10 my-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                ))}
            </div>
        </div>
    </section>
);

const HomePage: React.FC<HomePageProps> = () => (
  <>
    <HeroSection />
    <IntroSection />
    <WhyTrustUsSection />
    <PopularProductsSection />
    <ServicesSection />
    <MarketsSection />
    <ImportJourneySection />
    <TestimonialsSection />
    <HomeContactSection />
    <PartnersSection />
  </>
);

export default HomePage;