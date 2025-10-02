import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, FacebookIcon, TwitterIcon, PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, WeChatIcon, InstagramIcon, YouTubeIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info with Logo Circle */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start mb-6">
              {/* White Circle with Logo */}
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img src="./logo/saifa-logo.png" alt="Saifa Logo" className="w-20 h-20 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-white text-center lg:text-left">Saifa International</h4>
            </div>
            <p className="text-sm text-center lg:text-left">
              Your trusted partner in seamless international cargo solutions. From sourcing to doorstep delivery, we handle it all with precision and care.
            </p>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Import & Export</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Procurement</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Sourcing</Link></li>
              <li><Link to="/request-quote" className="hover:text-white transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-white transition-colors">Cookie Policy</button></li>
              <li><button className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button className="hover:text-white transition-colors">FAQs</button></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
             <h4 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h4>
             <div className="space-y-3">
               <div className="relative">
                 <input 
                   type="email" 
                   placeholder="Your email" 
                   className="w-full rounded-md px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 pr-10" 
                 />
                 <MailIcon className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
               </div>
               <button type="submit" className="w-full bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
                 Subscribe
               </button>
             </div>
          </div>

        </div>
        
        <div className="mt-8 border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">© {new Date().getFullYear()} Saifa International. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://wa.me/923009464789" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <WhatsAppIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <WeChatIcon />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;