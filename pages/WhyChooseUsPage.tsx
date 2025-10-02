import React, { useState, useEffect, useRef } from 'react';
import { 
  HomeIcon, ArrowRightIcon, TruckIcon, SearchIcon, HandshakeIcon, PackageIcon,
  ClockIcon, WorkflowIcon, MapTrackIcon, UsersIcon, BuildingIcon, CheckBadgeIcon,
  LightbulbIcon, BrainIcon
} from '../components/icons/Icons';

const WhyChooseUsHero: React.FC = () => (
    <section 
        className="relative h-[400px] flex flex-col justify-center items-center text-white pt-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587135304387-a417a78a7f5a?q=80&w=2832&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
    >
        <div className="absolute inset-0 bg-blue-900 opacity-85 z-0"></div>
        <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Why Choose Us</h1>
            <p className="mt-2 text-lg text-gray-300">Experience Trust, Efficiency & Cost-Effective Logistics With Our Expert Cargo Solutions.</p>
            <div className="mt-4 text-sm flex items-center justify-center space-x-2">
                <HomeIcon className="w-4 h-4" />
                <span>/</span>
                <span>Why Choose Us</span>
            </div>
        </div>
    </section>
);

const SpeedPrecisionSection: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Speed & Precision</h2>
                <p className="text-gray-600 mb-6">
                    Delivering excellence through optimized processes, real time tracking and seamless global cargo solutions. In today's fast paced trade environment, efficiency is key. We ensure your cargo moves quickly and smoothly, reducing transit times and eliminating unnecessary delays. Our well structured operations guarantee reliable deliveries, making global logistics stress free and cost effective.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg border flex items-center space-x-3"><TruckIcon className="w-8 h-8 text-red-600"/><div><h4 className="font-semibold text-blue-900">Rapid Deliveries</h4><p className="text-xs text-gray-500">Minimized transit times</p></div></div>
                    <div className="p-4 bg-gray-50 rounded-lg border flex items-center space-x-3"><WorkflowIcon className="w-8 h-8 text-red-600"/><div><h4 className="font-semibold text-blue-900">Optimized Processes</h4><p className="text-xs text-gray-500">Streamlined logistics</p></div></div>
                    <div className="p-4 bg-gray-50 rounded-lg border flex items-center space-x-3"><MapTrackIcon className="w-8 h-8 text-red-600"/><div><h4 className="font-semibold text-blue-900">Real Time Tracking</h4><p className="text-xs text-gray-500">Live shipment status</p></div></div>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2787&auto=format&fit=crop" alt="Fast logistics and cargo delivery" className="rounded-lg shadow-xl"/>
            </div>
        </div>
    </section>
);

const ProvenExpertiseSection: React.FC = () => {
    const expertiseAreas = [
        { title: "Logistics", description: "We optimize air and sea freight for fast, cost effective and secure global deliveries." },
        { title: "Sourcing", description: "Connecting businesses with trusted manufacturers and suppliers to ensure high quality products." },
        { title: "Procurement", description: "Handling bulk and small-scale purchasing with precision, ensuring timely supply." },
        { title: "Inspection", description: "Conducting rigorous quality checks to guarantee compliance, safety and authenticity." },
        { title: "Warehousing", description: "Secure, well managed storage solutions that optimize inventory management." },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Proven Expertise</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Decades of experience in logistics, sourcing and global trade. Delivering seamless, secure and efficient cargo solutions worldwide.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {expertiseAreas.map(item => (
                        <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-900 hover:border-red-600 transform hover:-translate-y-2 transition-all duration-300">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LogisticsPartnersSection: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Logistics Partners</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Partnering with industry leaders to guarantee reliable, cost effective and timely cargo transportation across the globe.</p>
             <div className="flex justify-center items-center gap-x-8 md:gap-x-16 flex-wrap">
                {['dhl', 'thaiairways', 'fedex', 'qatarairways', 'maersk', 'airchina'].map(partner => (
                    <img key={partner} src={`https://logo.clearbit.com/${partner}.com`} alt={`${partner} logo`} className="h-8 md:h-12 my-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                ))}
            </div>
        </div>
    </section>
);

const AnimatedStat: React.FC<{ value: number; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = value;
                    if (start === end) return;

                    let duration = 2000;
                    let startTime = 0;
                    const step = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        setCount(Math.floor(progress * (end - start) + start));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-red-500 mb-2">{icon}</div>
            <p className="text-4xl font-bold">{count.toLocaleString()}+</p>
            <p className="text-blue-200">{label}</p>
        </div>
    );
};


const StatsSection: React.FC = () => (
    <section className="py-20 bg-blue-900 text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedStat value={216} label="Happy Customers" icon={<UsersIcon className="w-12 h-12 mx-auto"/>} />
                <AnimatedStat value={144} label="Reliable Manufacturers" icon={<BuildingIcon className="w-12 h-12 mx-auto"/>} />
                <AnimatedStat value={1680} label="Shipments Delivered" icon={<PackageIcon className="w-12 h-12 mx-auto"/>} />
                <AnimatedStat value={98} label="On Time Delivery %" icon={<ClockIcon className="w-12 h-12 mx-auto"/>} />
            </div>
        </div>
    </section>
);

const GlobalReachSection: React.FC = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Global Reach with Local Expertise</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                At Saifa International Trading, we connect businesses worldwide through efficient, reliable and cost effective services. We provide end to end support for procurement, inspection, logistics, import and export services. Whether you're sourcing products from China, shipping bulk goods to Europe or importing to the USA, our streamlined freight solutions ensure your cargo reaches its destination safely and on time.
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Map_of_Pakistan.svg" alt="Map of Pakistan" className="h-48 drop-shadow-lg"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/World_map_blank_without_borders.svg" alt="World Map" className="h-40 drop-shadow-lg"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Map_of_the_People%27s_Republic_of_China.svg" alt="Map of China" className="h-48 drop-shadow-lg"/>
            </div>
        </div>
    </section>
);

const SmarterLogisticsSection: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Smarter, Faster Logistics</h2>
                <p className="text-gray-600 mb-6">Our expert-driven, technology powered processes ensure seamless, efficient and cost effective global shipping solutions. We believe logistics should be effortless. Our advanced technology, strategic partnerships and meticulous planning make shipping faster, smoother and more affordable. Our data driven approach helps us anticipate challenges, reduce risks and enhance operational speed.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border-l-4 border-red-500 shadow"><h4 className="font-semibold text-blue-900">Seamless Operations</h4><p className="text-sm text-gray-500">Smooth logistics with zero unnecessary delays.</p></div>
                    <div className="p-4 bg-white rounded-lg border-l-4 border-red-500 shadow"><h4 className="font-semibold text-blue-900">Precision Handling</h4><p className="text-sm text-gray-500">Expert care for secure and efficient shipping.</p></div>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1610464292996-3739837a7f47?q=80&w=600&h=400&auto=format&fit=crop" alt="Logistics Technology" className="rounded-lg shadow-xl"/>
            </div>
        </div>
    </section>
);

const DrivenByExcellenceSection: React.FC = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-last">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Driven by Excellence</h2>
                <p className="text-gray-600 mb-6">Setting new standards in logistics with precision, reliability and innovative solutions tailored for seamless global trade operations. We don't just deliver cargo, we deliver excellence. Our expert team leverages cutting edge technology and industry insights to simplify complex logistics. Whether you're importing, exporting or sourcing, we ensure a seamless experience, allowing you to focus on growing your business.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3"><CheckBadgeIcon className="w-8 h-8 text-red-600 flex-shrink-0" /><p className="font-semibold text-blue-900">Unmatched Reliability</p></div>
                    <div className="flex items-center space-x-3"><LightbulbIcon className="w-8 h-8 text-red-600 flex-shrink-0" /><p className="font-semibold text-blue-900">Expert Solutions</p></div>
                    <div className="flex items-center space-x-3"><HandshakeIcon className="w-8 h-8 text-red-600 flex-shrink-0" /><p className="font-semibold text-blue-900">Customer Commitment</p></div>
                    <div className="flex items-center space-x-3"><BrainIcon className="w-8 h-8 text-red-600 flex-shrink-0" /><p className="font-semibold text-blue-900">Innovative Approach</p></div>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2787&auto=format&fit=crop" alt="Logistics professional" className="rounded-lg shadow-xl"/>
            </div>
        </div>
    </section>
);


const WhyChooseUsPage: React.FC = () => (
    <>
      <WhyChooseUsHero />
      <SpeedPrecisionSection />
      <ProvenExpertiseSection />
      <LogisticsPartnersSection />
      <StatsSection />
      <GlobalReachSection />
      <SmarterLogisticsSection />
      <DrivenByExcellenceSection />
    </>
);

export default WhyChooseUsPage;