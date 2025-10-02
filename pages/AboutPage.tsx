import React from 'react';
import { 
  HomeIcon, ArrowRightIcon, TruckIcon, ShieldCheckIcon, HandshakeIcon, UserIcon, DollarIcon, CogIcon, LightbulbIcon, LeafIcon, RocketIcon, GrowthIcon, BrainIcon, TargetIcon, GlobeIcon
} from '../components/icons/Icons';


const AboutHero: React.FC = () => (
    <section 
        className="relative h-[400px] flex flex-col justify-center items-center text-white pt-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577985051167-16d7a42a7069?q=80&w=2832&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
    >
        <div className="absolute inset-0 bg-blue-900 opacity-85 z-0"></div>
        <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">About Us</h1>
            <p className="mt-2 text-lg text-gray-300">Reliable Cargo Solutions From China to Worldwide.</p>
            <div className="mt-4 text-sm flex items-center justify-center space-x-2">
                <HomeIcon className="w-4 h-4" />
                <span>/</span>
                <span>About Us</span>
            </div>
        </div>
    </section>
);

const TrustedGlobalCargo: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-red-600 font-bold">Trusted Global Cargo</h3>
                <h2 className="text-3xl md:text-4xl font-bold my-4 text-blue-900 leading-tight">Delivering Secure, Fast and Cost Effective Cargo Solutions from China</h2>
                <p className="text-gray-600 mb-6">
                    From factory floors in China to doorsteps worldwide, Saifa International Trading makes shipping effortless. We don't just move packages; we create connections, enabling businesses to grow and individuals to access what they need. Our streamlined logistics, deep market expertise and commitment to secure and timely deliveries make us the go-to cargo partner.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <TruckIcon className="w-8 h-8 mx-auto text-red-600 mb-2"/>
                        <h4 className="font-semibold text-blue-900">Fast Shipping</h4>
                    </div>
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <ShieldCheckIcon className="w-8 h-8 mx-auto text-red-600 mb-2"/>
                        <h4 className="font-semibold text-blue-900">Secure Handling</h4>
                    </div>
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <HandshakeIcon className="w-8 h-8 mx-auto text-red-600 mb-2"/>
                        <h4 className="font-semibold text-blue-900">Hassle Free Process</h4>
                    </div>
                </div>
            </div>
            <div>
                <img src="/media/cargo-plane-ship.png" alt="Cargo plane" className="rounded-lg shadow-xl"/>
            </div>
        </div>
    </section>
);

const ValuesSection: React.FC = () => {
    const values = [
        { icon: <UserIcon />, title: "Customer First", description: "Your satisfaction drives our commitment to excellence." },
        { icon: <DollarIcon />, title: "Transparent Pricing", description: "No hidden costs, just fair and competitive rates for every customer." },
        { icon: <CogIcon />, title: "Efficiency Matters", description: "We streamline processes for fast, reliable and smooth shipping." },
        { icon: <LightbulbIcon />, title: "Innovative Solutions", description: "Adopting the latest technology for smarter logistics." },
        { icon: <LeafIcon />, title: "Sustainable Shipping", description: "Eco-conscious practices & choices for a greener future." },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-red-600 font-bold">Our Values, Your Trust</h3>
                <h2 className="text-3xl md:text-4xl font-bold my-4 text-blue-900">Guided by integrity, efficiency and customer commitment</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {values.map(value => (
                        <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                {React.cloneElement(value.icon, { className: 'w-8 h-8' })}
                            </div>
                            <h4 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h4>
                            <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const JourneySection: React.FC = () => {
    const milestones = [
        { year: 2020, title: "Founded Amidst Challenges", description: "Launched operations to bridge supply chain gaps during COVID-19.", icon: <RocketIcon/> },
        { year: 2021, title: "Expanding Our Reach", description: "Strengthened global shipping routes and increased service capabilities.", icon: <GlobeIcon /> },
        { year: 2022, title: "Enhanced Logistics Solutions", description: "Introduced faster shipping, advanced tracking and improved security.", icon: <TruckIcon /> },
        { year: 2023, title: "Scaling New Heights", description: "Increased warehouse capacity and expanded to more global markets.", icon: <GrowthIcon /> },
        { year: 2024, title: "Innovation & Growth", description: "Pioneering AI-driven logistics and eco-friendly shipping initiatives.", icon: <BrainIcon /> },
    ];
    return (
        <section className="py-20 bg-blue-900 text-white" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Forward</h2>
                    <p className="mb-6 text-blue-200">
                        Founded in 2020 during the global pandemic, Saifa International Trading emerged as a solution to supply chain disruptions, helping businesses and individuals a seamless way to transport goods. Despite challenges, we built a strong logistics network, ensuring reliability and efficiency in global trade.
                    </p>
                    <p className="text-blue-200">
                        From humble beginnings to becoming a preferred cargo provider, we continue to innovate and set new milestones. As we grow, our focus remains on enhancing customer experience, streamlining operations and ensuring global connectivity.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-700"></div>
                    {milestones.map((item, index) => (
                        <div key={index} className="flex items-center mb-8 last:mb-0">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 border-4 border-blue-900 z-10"></div>
                            <div className="ml-8 bg-blue-800 p-4 rounded-lg shadow-lg w-full">
                                <p className="font-bold text-red-400">{item.year}</p>
                                <h4 className="font-semibold text-lg">{item.title}</h4>
                                <p className="text-sm text-blue-200">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StrategicBaseSection: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold my-4 text-blue-900">Our Strategic Base</h2>
             <p className="text-gray-600 mb-12 max-w-3xl mx-auto">Nestled in JinHua, Zhejiang, China's trade powerhouse our central hub connects businesses to global markets. Positioned in a key industrial region, we efficiently handle your business.</p>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="/media/map-of-china.jpg" alt="Map of China" className="w-full h-auto"/>
                <div className="text-left space-y-6">
                    <div className="flex">
                        <div className="mr-4 mt-1 w-1.5 h-16 bg-red-600"></div>
                        <div>
                            <h4 className="font-bold text-blue-900">Central Location</h4>
                            <p>Located in JinHua, Zhejiang. One of China's leading trade and manufacturing hubs.</p>
                        </div>
                    </div>
                     <div className="flex">
                        <div className="mr-4 mt-1 w-1.5 h-16 bg-red-600"></div>
                        <div>
                            <h4 className="font-bold text-blue-900">Supplier Access</h4>
                            <p>Proximity to major factories allows direct sourcing and competitive pricing advantages.</p>
                        </div>
                    </div>
                     <div className="flex">
                        <div className="mr-4 mt-1 w-1.5 h-16 bg-red-600"></div>
                        <div>
                            <h4 className="font-bold text-blue-900">Logistics Hub</h4>
                            <p>Well connected with major ports, airports and highways for smooth global logistics.</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
);


const ExpertsSection: React.FC = () => {
    const experts = [
        { name: "Sikander Ali Qalati", title: "Business Development Manager", img: "/media/sid.jpg" },
        { name: "Akbar Khan Qalati", title: "Operations Director", img: "/media/akee.jpg" },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold my-4 text-blue-900">Meet Our Experts</h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">A dedicated team of logistics professionals committed to delivering seamless, efficient and reliable cargo solutions worldwide.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {experts.map(expert => (
                        <div key={expert.name} className="text-center">
                            <div className="relative inline-block">
                                <img src={expert.img} alt={expert.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg object-cover"/>
                                <div className="absolute bottom-0 right-0 bg-blue-900 p-2 rounded-full">
                                    <HandshakeIcon className="w-5 h-5 text-white"/>
                                </div>
                            </div>
                            <h4 className="font-bold text-blue-900">{expert.name}</h4>
                            <p className="text-sm text-gray-600">{expert.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutPage: React.FC = () => (
    <>
        <AboutHero />
        <TrustedGlobalCargo />
        <ValuesSection />
        <JourneySection />
        <StrategicBaseSection />
        <ExpertsSection />
    </>
);

export default AboutPage;