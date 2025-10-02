import React, { useState } from 'react';
import { 
    HomeIcon, PhoneIcon, MailIcon, ClockIcon, LightbulbIcon, ShieldCheckIcon,
    WhatsAppIcon, WeChatIcon, FlagIconCN, FlagIconPK, SendIcon, FacebookIcon, InstagramIcon, YouTubeIcon
} from '../components/icons/Icons';

const ContactHero: React.FC = () => (
    <section 
        className="relative h-[400px] flex flex-col justify-center items-center text-white pt-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611703225023-52796e957989?q=80&w=2832&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 bg-blue-900 opacity-85 z-0"></div>
        <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Contact Us</h1>
            <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto">Get in Touch. Reach Out for Reliable Logistics & Shipping Assistance Today.</p>
            <div className="mt-4 text-sm flex items-center justify-center space-x-2">
                <HomeIcon className="w-4 h-4" />
                <span>/</span>
                <span>Contact Us</span>
            </div>
        </div>
    </section>
);

const LetsTalkSection: React.FC = () => {
    const features = [
        { icon: <ClockIcon className="w-8 h-8 text-red-600"/>, title: 'Fast Response', description: 'For all your logistics inquiries.' },
        { icon: <LightbulbIcon className="w-8 h-8 text-red-600"/>, title: 'Expert Guidance', description: 'To make shipping stress free.' },
        { icon: <ShieldCheckIcon className="w-8 h-8 text-red-600"/>, title: 'Reliable Solutions', description: 'For global businesses.' },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Let's Talk Business</h2>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">We're here to help with your logistics, procurement and shipping needs, delivering smart solutions for your business.</h3>
                    <p className="text-gray-600 mb-6">
                        Whether you need expert advice, shipping solutions or real time assistance, our team is ready to help. From sourcing and procurement to customs clearance and inspection services, we ensure smooth global trade operations.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Reach out to us with your queries and we'll provide the right solution for your needs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {features.map(feature => (
                             <div key={feature.title} className="p-4 bg-gray-50 rounded-lg border flex flex-col items-center text-center">
                                {feature.icon}
                                <h4 className="font-semibold text-blue-900 mt-2">{feature.title}</h4>
                                <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2787&auto=format=fit=crop" alt="Business discussion" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </section>
    );
};

const GetInTouchSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
    };
    
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Get in Touch</h2>
                     <p className="text-gray-600 mt-2 max-w-3xl mx-auto">Have questions or need a quote? Contact us for reliable import, sourcing and shipping solutions. Our team is ready to assist you!</p>
                </div>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left side: Contact Details */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-2 mb-6">
                            <a href="#" className="p-2 bg-green-500 text-white rounded-full hover:opacity-90"><WhatsAppIcon /></a>
                            <a href="#" className="p-2 bg-green-600 text-white rounded-full hover:opacity-90"><WeChatIcon /></a>
                            <a href="#" className="p-2 bg-blue-800 text-white rounded-full hover:opacity-90"><FacebookIcon /></a>
                            <a href="#" className="p-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-full hover:opacity-90"><InstagramIcon /></a>
                            <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:opacity-90"><YouTubeIcon /></a>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2 flex items-center"><FlagIconCN className="w-6 h-auto mr-2"/> China</h4>
                                <p className="text-sm text-gray-600">No.80-86 Xibayi Road,Liwan District,Guanazhou City.Building 5 and 6 (Self-numbered Sixth Floor), C013</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 flex items-center"><FlagIconPK className="w-6 h-auto mr-2"/> Pakistan</h4>
                                <p className="text-sm text-gray-600">Office 1205, 12th Floor, Al Najeebi Tower, Saddar, Karachi, Pakistan</p>
                            </div>
                        </div>

                        
                        {/* China Contact Information */}
                        <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-red-200">
                            <h4 className="text-xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center">
                                <FlagIconCN className="w-6 h-auto mr-2"/> China Operations
                            </h4>
                            <div className="text-center">
                                <h5 className="font-semibold text-blue-900 mb-2">Sikander Ali Qalati</h5>
                                <p className="text-lg font-bold text-red-600">+86 183 0610 1718</p>
                                <p className="text-sm text-gray-600 mt-1">China Operations Manager</p>
                            </div>
                        </div>

                        {/* WeChat Contact Information */}
                        <div className="mt-6 p-6 bg-green-50 rounded-lg border-2 border-green-200">
                            <h4 className="text-xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center">
                                <WeChatIcon className="w-6 h-6 mr-2"/> WeChat Contact
                            </h4>
                            <div className="text-center">
                                <h5 className="font-semibold text-blue-900 mb-2">Guangzhou Saifa ITCL</h5>
                                <p className="text-sm text-gray-600 mb-4">Scan the QR code to add us as friend</p>
                                <div className="flex justify-center">
                                    <img 
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Guangzhou%20Saifa%20ITCL%20WeChat" 
                                        alt="WeChat QR Code" 
                                        className="w-48 h-48 border-2 border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Form */}
                    <div className="lg:col-span-2 p-8 bg-blue-900 rounded-lg shadow-2xl text-white relative" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/az-subtle.png)"}}>
                        <div className="absolute top-4 right-4 p-3 bg-red-600 rounded-full">
                            <MailIcon className="w-8 h-8 text-white"/>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">Write to Us</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md placeholder-blue-300"/>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md placeholder-blue-300"/>
                             <div className="relative">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@doe.com" className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md placeholder-blue-300"/>
                                <MailIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400"/>
                            </div>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md placeholder-blue-300"/>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message (Optional)" rows={3} className="w-full bg-blue-800 border-b-2 border-blue-700 p-2 focus:outline-none focus:border-red-500 rounded-t-md placeholder-blue-300"></textarea>
                            <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white font-bold rounded-md shadow-lg hover:bg-red-700 transition-colors">
                                Submit <SendIcon className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VisitUsSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Visit Us</h2>
            <p className="text-gray-600 mt-2 mb-8 max-w-3xl mx-auto">Find our offices easily with the map below and visit us for expert assistance with your logistics and cargo needs.</p>
            <div className="rounded-lg overflow-hidden shadow-2xl border">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4578508499256!2d67.0259503759902!3d24.84824904550734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e083c7b2e63%3A0x6b87b7a5a8161706!2sAl-Najeebi%20Centre!5e0!3m2!1sen!2s!4v1716301131749!5m2!1sen!2s" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
);

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHero />
      <LetsTalkSection />
      <GetInTouchSection />
      <VisitUsSection />
    </>
  );
};

export default ContactPage;