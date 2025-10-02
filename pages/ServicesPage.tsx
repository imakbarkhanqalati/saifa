import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HomeIcon, ArrowRightIcon, GlobeIcon, NetworkIcon, ClipboardIcon, HandshakeIcon, CheckIcon,
  FilePenIcon, ReceiptIcon, ClipboardCheckIcon, PackageCheckIcon, DoorOpenIcon, ShipIcon,
  PackageIcon as PackageIcon2, PlaneIcon, SearchIcon, ShieldCheckIcon, DollarIcon
} from '../components/icons/Icons';

interface ServicesPageProps {}

const ServicesHero: React.FC = () => (
    <section 
        className="relative h-[400px] flex flex-col justify-center items-center text-white pt-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-5278ce682426?q=80&w=2940&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 bg-blue-900 opacity-85 z-0"></div>
        <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Our Services</h1>
            <p className="mt-2 text-lg text-gray-300">Comprehensive Cargo & Logistics Services. Air or Sea Freight</p>
            <div className="mt-4 text-sm flex items-center justify-center space-x-2">
                <HomeIcon className="w-4 h-4" />
                <span>/</span>
                <span>Our Services</span>
            </div>
        </div>
    </section>
);

const WhatWeDoSection: React.FC = () => {
    const services = [
        { title: "Procurement", description: "We handle purchase, payments & logistics ensuring smooth and secure imports for you.", img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", button: "Learn More" },
        { title: "Import", description: "We take care of all your import needs. From logistics to packaging & invoicing.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", button: "Discover More" },
        { title: "Export", description: "Seamless worldwide shipping via air or sea with cost effective and timely delivery.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", button: "Find Out" },
        { title: "Sourcing", description: "We find the best products at competitive prices, tailored to your needs and requirements.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", button: "Read More" },
        { title: "Inspection", description: "Thorough quality checks to ensure your goods meet high standards before shipping.", img: "https://images.unsplash.com/photo-1581092921462-20520a5a3a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", button: "See More" },
    ];
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What We Do</h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                    Explore our expert services designed to streamline your business operations. From importing and exporting to sourcing, procurement and goods inspection, we ensure reliability and efficiency every step of the way.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {services.map(s => (
                        <div key={s.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={s.img} alt={s.title} className="h-48 w-full object-cover"/>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-blue-900">{s.title}</h3>
                                <p className="text-gray-600 mt-2 flex-grow">{s.description}</p>
                                <button className="mt-4 w-full px-4 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
                                    {s.button} <ArrowRightIcon className="inline w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhatWeOfferSection: React.FC = () => {
    const offers = [
        { icon: <GlobeIcon className="w-8 h-8"/>, title: "Seamless Trade Solutions", description: "From sourcing to delivery, we handle everything." },
        { icon: <NetworkIcon className="w-8 h-8"/>, title: "Trusted Supplier Network", description: "Access reliable manufacturers and verified products." },
        { icon: <ClipboardIcon className="w-8 h-8"/>, title: "End-to-End Support", description: "We manage procurement, shipping and a lot more for you." },
        { icon: <HandshakeIcon className="w-8 h-8"/>, title: "Your Trade Partner", description: "Reliable support for smooth international transactions." },
    ];
    return(
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What We Offer</h2>
                    <p className="text-gray-600 mb-6">
                        We provide comprehensive cargo and procurement solutions, ensuring seamless sourcing, shipping and inspection of goods from China to your doorstep. At Saifa International Trading, we specialize in procurement, import, export, product sourcing and stock inspection services.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {offers.map(o => (
                            <div key={o.title} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                                <div className="text-red-600 mb-2">{o.icon}</div>
                                <h4 className="font-bold text-blue-900">{o.title}</h4>
                            </div>
                        ))}
                    </div>
                     <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">
                        Learn More <ArrowRightIcon className="inline w-4 h-4" />
                    </button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&auto=format&fit=crop" alt="Warehouse logistics" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </section>
    );
};

const WhyChooseUsServicesSection: React.FC = () => {
    const points = ["Decades of Expertise", "Affordable Solutions", "Reliable Global Network", "Tailored to Your Needs", "Commitment to Quality", "Quality Assurance"];
    return(
        <section className="py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&h=400&auto=format&fit=crop" alt="Business planning" className="rounded-lg shadow-xl"/>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Why Choose Us</h2>
                    <p className="text-gray-600 mb-6">
                        With years of experience, we provide professional, efficient and affordable logistics solutions. Our expertise ensures global trade with reliable service and competitive pricing. Our streamlined processes, transparent pricing and hands on support make global trade simple.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {points.map(p => <div key={p} className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-red-600"/><span>{p}</span></div>)}
                    </div>
                     <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">
                        Read More <ArrowRightIcon className="inline w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};


const HowItWorksSection: React.FC = () => {
    const steps = [
        { icon: <FilePenIcon className="w-10 h-10"/>, title: "Send Your Request", description: "Share your product details and requirements with us." },
        { icon: <ReceiptIcon className="w-10 h-10"/>, title: "Get a Quote", description: "Receive a competitive price for sourcing and shipping." },
        { icon: <ClipboardCheckIcon className="w-10 h-10"/>, title: "Inspection", description: "We check quality and authenticity before purchase." },
        { icon: <PackageCheckIcon className="w-10 h-10"/>, title: "Secure Shipment", description: "Your products are safely packed and shipped worldwide." },
        { icon: <DoorOpenIcon className="w-10 h-10"/>, title: "Doorstep Delivery", description: "Receive your goods on time, hassle free." },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">How It Works</h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                    From sourcing to delivery, we handle everything. Just follow these five easy steps and we'll ensure your products are inspected, safely shipped and delivered to your destination.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {steps.map(step => (
                        <div key={step.title} className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-red-600">
                             <div className="bg-red-100 text-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MarqueeSection: React.FC = () => {
    const items = [
        { icon: <ShipIcon className="w-8 h-8"/>, label: "Timely Shipping" },
        { icon: <SearchIcon className="w-8 h-8"/>, label: "Procurement" },
        { icon: <GlobeIcon className="w-8 h-8"/>, label: "Global Delivery" },
        { icon: <HandshakeIcon className="w-8 h-8"/>, label: "Reliable Service" },
        { icon: <DollarIcon className="w-8 h-8"/>, label: "Affordability" },
    ];
    const marqueeItems = [...items, ...items]; // Duplicate for seamless loop

    return (
        <div className="py-12 bg-white relative overflow-hidden">
            <div className="flex animate-marquee">
                {marqueeItems.map((item, index) => (
                    <div key={index} className="flex-shrink-0 flex items-center space-x-4 mx-8">
                        <span className="text-red-500">{item.icon}</span>
                        <span className="text-2xl font-bold text-blue-900">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const FreeQuoteCta: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-blue-900 text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
        <div className="container mx-auto px-4 py-16 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote Today</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                Need a shipping estimate? Get a fast, transparent quote for your cargo. Simply provide your shipment details and we'll offer the best pricing and shipping options tailored to your needs with no hidden fees, just reliable service.
            </p>
            <button onClick={() => navigate('/request-quote')} className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-md shadow-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105">
              Get A Quote
            </button>
        </div>
    </section>
  );
};

const SolutionsSection: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
            {/* Solutions for Your Needs */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Solutions for Your Needs</h2>
                    <p className="text-gray-600 mb-6">Whether you're a business or an individual, we offer flexible shipping and logistics services designed to fit your specific requirements and budget. Our range of services includes procurement, stock inspection and cargo import solutions tailored to meet diverse shipping needs.</p>
                     <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">
                        Explore More <ArrowRightIcon className="inline w-4 h-4" />
                    </button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1611703225023-52796e957989?q=80&w=600&h=400&auto=format&fit=crop" alt="Cargo trucks on highway" className="rounded-lg shadow-xl"/>
                </div>
            </div>
            {/* Delivering With Care */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-last">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Delivering With Care</h2>
                    <p className="text-gray-600 mb-6">Every shipment matters. We handle your cargo with precision, ensuring it reaches its destination safely, securely and on time no matter the size or type. From fragile goods to bulk shipments, we prioritize the safety of your cargo.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg shadow"><h4 className="font-semibold text-blue-900">Guaranteed Trust</h4><p className="text-sm text-gray-500">Reliable service ensuring your cargo arrives safely.</p></div>
                        <div className="p-4 bg-gray-50 rounded-lg shadow"><h4 className="font-semibold text-blue-900">Customer First</h4><p className="text-sm text-gray-500">Your needs and satisfaction are always our priority.</p></div>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1578575437130-5278ce682426?q=80&w=600&h=400&auto=format&fit=crop" alt="Cargo being handled" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </div>
    </section>
);


const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <ServicesHero />
      <WhatWeDoSection />
      <WhatWeOfferSection />
      <WhyChooseUsServicesSection />
      <HowItWorksSection />
      <MarqueeSection />
      <FreeQuoteCta />
      <SolutionsSection />
    </>
  );
};

export default ServicesPage;