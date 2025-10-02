import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { HomeIcon, CalculatorIcon, ContainerIcon, SendIcon, MailIcon } from '../components/icons/Icons';

const QuoteHero: React.FC = () => (
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Request A Quote</h1>
            <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto">Let's get your shipment moving! Tell us your requirements & get a personalized quote</p>
            <div className="mt-4 text-sm flex items-center justify-center space-x-2">
                <HomeIcon className="w-4 h-4" />
                <span>/</span>
                <span>Request A Quote</span>
            </div>
        </div>
    </section>
);

const QuickGuide: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
                <video controls className="w-full">
                    <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Quick Guide to Get Started</h2>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Simply play the video to easily learn how to request your free shipping quote, even if you don't know your parcel's CBM.</h3>
                <p className="text-gray-600">
                    This quick video guide shows you exactly what to do, from filling in your contact and parcel details to getting the best quote & type of service you will require for the item. If you don't know your CBM, we'll also walk you through using our built-in CBM calculator so you can get a quote directly on the form. It's designed to make the process simple, clear and fast so you can get your quote without confusion or delays.
                </p>
            </div>
        </div>
    </section>
);

const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-900 pb-2 mb-4 border-b-2 border-gray-200">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {children}
        </div>
    </div>
);

const InputField: React.FC<{ label: string; name: string; required?: boolean; optional?: boolean; placeholder?: string; type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, name, required, optional, placeholder, type = 'text', value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>} {optional && <span className="text-gray-500">(Optional)</span>}
        </label>
        <div className="relative">
             <input type={type} id={name} name={name} placeholder={placeholder} required={required} value={value} onChange={onChange} className="w-full px-3 py-2 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" />
             {name === 'email' && <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>}
        </div>
    </div>
);

const SelectField: React.FC<{ label: string; name: string; required?: boolean; children: React.ReactNode, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }> = ({ label, name, required, children, value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select id={name} name={name} required={required} value={value} onChange={onChange} className="w-full px-3 py-2 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {children}
        </select>
    </div>
);

const TextAreaField: React.FC<{ label: string; name: string; required?: boolean; optional?: boolean; placeholder?: string; maxLength?: number, value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }> = ({ label, name, required, optional, placeholder, maxLength, value, onChange }) => (
     <div className="md:col-span-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>} {optional && <span className="text-gray-500">(Upto {maxLength} Characters)</span>}
        </label>
        <textarea id={name} name={name} rows={4} placeholder={placeholder} required={required} maxLength={maxLength} value={value} onChange={onChange} className="w-full px-3 py-2 bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
    </div>
);


const RequestQuotePage: React.FC = () => {
    const [formState, setFormState] = useState({
        firstName: '', lastName: '', companyName: '', email: '', telephone: '', whatsapp: '', contactMethod: '',
        serviceType: '', transportMode: '', goodsSource: '', numPackages: '', estWeight: '', estCbm: '',
        boxQty: '1', height: '', width: '', length: '', unit: 'cm',
        goodsSourceDetails: '', goodsDescription: '',
        importCountry: '', stateName: '', cityName: '', postalCode: '', exportCountry: 'China', pickupDate: '', specialRequirements: '',
        currency: '', budget: '', howDidYouHear: '', comments: '',
        agreeTerms: false
    });

    const [calculations, setCalculations] = useState({
        cbm: 0, cft: 0, volWeightSea: 0, volWeightAir: 0, cubicInch: 0, cubicCm: 0, cubicYard: 0,
        boxesIn20ft: 0, boxesIn40ft: 0, boxesIn20ftReefer: 0, boxesIn40ftReefer: 0, boxesIn40ftHC: 0
    });

    useEffect(() => {
        const h = parseFloat(formState.height) || 0;
        const w = parseFloat(formState.width) || 0;
        const l = parseFloat(formState.length) || 0;
        const qty = parseInt(formState.boxQty) || 0;

        if (h > 0 && w > 0 && l > 0 && qty > 0) {
            let h_m, w_m, l_m;
            if (formState.unit === 'cm') {
                h_m = h / 100; w_m = w / 100; l_m = l / 100;
            } else { // inches
                h_m = h * 0.0254; w_m = w * 0.0254; l_m = l * 0.0254;
            }

            const singleBoxCbm = h_m * w_m * l_m;
            const totalCbm = singleBoxCbm * qty;
            const totalCft = totalCbm * 35.3147;

            setCalculations({
                cbm: totalCbm, cft: totalCft,
                volWeightSea: totalCbm * 1000,
                volWeightAir: totalCbm * 167,
                cubicCm: totalCbm * 1_000_000,
                cubicInch: totalCft * 1728,
                cubicYard: totalCft / 27,
                boxesIn20ft: Math.floor(28 / singleBoxCbm),
                boxesIn40ft: Math.floor(58 / singleBoxCbm),
                boxesIn20ftReefer: Math.floor(26 / singleBoxCbm),
                boxesIn40ftReefer: Math.floor(54 / singleBoxCbm),
                boxesIn40ftHC: Math.floor(68 / singleBoxCbm),
            });
        }
    }, [formState.height, formState.width, formState.length, formState.boxQty, formState.unit]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const isCheckbox = type === 'checkbox';
        setFormState(prev => ({
            ...prev,
            [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formState);
    };

    return (
        <div className="bg-gray-50">
            <QuoteHero />
            <QuickGuide />
            <section className="py-20">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Request Your Estimate</h2>
                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Tell us your cargo, order, requirements details and we'll get back to you with competitive pricing within 48 hours.</p>
                     </div>
                     <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-white rounded-lg shadow-2xl border-t-4 border-blue-800">
                        <FormSection title="Personal Information">
                           <InputField label="Your Name" name="firstName" placeholder="eg. William" required value={formState.firstName} onChange={handleChange} />
                           <InputField label="Last Name" name="lastName" placeholder="eg. David" required value={formState.lastName} onChange={handleChange} />
                           <InputField label="Company Name" name="companyName" optional placeholder="Enter Company Name" value={formState.companyName} onChange={handleChange} />
                           <InputField label="Email Address" name="email" type="email" placeholder="eg. abc@gmail.com" required value={formState.email} onChange={handleChange} />
                           <InputField label="Telephone Number" name="telephone" type="tel" placeholder="eg. 123 456 7890" required value={formState.telephone} onChange={handleChange} />
                           <InputField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="eg. 123 456 7890" value={formState.whatsapp} onChange={handleChange} />
                           <SelectField label="Preferred Contact Method" name="contactMethod" required value={formState.contactMethod} onChange={handleChange}>
                               <option value="">Select Contact Method</option>
                               <option value="email">Email</option><option value="phone">Phone</option><option value="whatsapp">WhatsApp</option>
                           </SelectField>
                        </FormSection>

                        <FormSection title="Service Details">
                           <SelectField label="Type of Service" name="serviceType" required value={formState.serviceType} onChange={handleChange}><option value="">Select Type of Service</option><option value="import">Import</option><option value="export">Export</option></SelectField>
                           <SelectField label="Mode of Transport" name="transportMode" required value={formState.transportMode} onChange={handleChange}><option value="">Select Mode of Transport</option><option value="air">Air Freight</option><option value="sea">Sea Freight</option></SelectField>
                           <SelectField label="Source of Goods" name="goodsSource" required value={formState.goodsSource} onChange={handleChange}><option value="">Select Source of Goods</option><option value="alibaba">Alibaba</option><option value="factory">Factory</option></SelectField>
                           <InputField label="Number of Packages" name="numPackages" type="number" placeholder="eg. 100" value={formState.numPackages} onChange={handleChange} />
                           <InputField label="Estimated Weight in KG" name="estWeight" optional type="number" placeholder="Enter Weight in KG" value={formState.estWeight} onChange={handleChange} />
                           <InputField label="Estimated CBM (if Known)" name="estCbm" placeholder="Enter CBM" value={formState.estCbm} onChange={handleChange} />
                        </FormSection>

                         <div className="mb-8">
                            <h3 className="text-xl font-bold text-blue-900 pb-2 mb-4 border-b-2 border-gray-200">Enter Average Dimensions</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4 items-end">
                                <InputField label="Box Quantity" name="boxQty" type="number" placeholder="e.g. 5" value={formState.boxQty} onChange={handleChange} />
                                <InputField label="Height" name="height" optional type="number" placeholder="Enter Height" value={formState.height} onChange={handleChange} />
                                <InputField label="Width" name="width" optional type="number" placeholder="Enter Width" value={formState.width} onChange={handleChange} />
                                <InputField label="Length" name="length" optional type="number" placeholder="Enter Length" value={formState.length} onChange={handleChange} />
                                <SelectField label="Select a unit" name="unit" value={formState.unit} onChange={handleChange}><option value="cm">cm</option><option value="in">inch</option></SelectField>
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-6 font-semibold">Based on your input of {formState.length || 0} x {formState.width || 0} x {formState.height || 0}. Below are approximate* calculations:</p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-lg border flex flex-col md:flex-row">
                                <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-2"><CalculatorIcon className="w-5 h-5"/> <span className="font-bold">Weight & Measurements</span></div>
                                    <p>Volumetric Weight Sea (kg): <span className="font-bold text-blue-800">{calculations.volWeightSea.toFixed(3)}</span></p>
                                    <p>Volumetric Weight Air (kg): <span className="font-bold text-blue-800">{calculations.volWeightAir.toFixed(3)}</span></p>
                                    <p>Cubic Inch: <span className="font-bold text-blue-800">{calculations.cubicInch.toFixed(3)}</span></p>
                                    <p>Cubic Centimetre: <span className="font-bold text-blue-800">{calculations.cubicCm.toFixed(3)}</span></p>
                                    <p>Cubic Yard: <span className="font-bold text-blue-800">{calculations.cubicYard.toFixed(3)}</span></p>
                                </div>
                                <div className="w-full md:w-px bg-gray-300 mx-6"></div>
                                <div className="flex-1 text-center md:text-left">
                                     <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-2"><ContainerIcon className="w-5 h-5"/> <span className="font-bold">Cartons & Boxes</span></div>
                                     <p>20FT General: <span className="font-bold text-blue-800">{calculations.boxesIn20ft}</span></p>
                                     <p>40FT General: <span className="font-bold text-blue-800">{calculations.boxesIn40ft}</span></p>
                                     <p>20FT Reefer: <span className="font-bold text-blue-800">{calculations.boxesIn20ftReefer}</span></p>
                                     <p>40FT Reefer: <span className="font-bold text-blue-800">{calculations.boxesIn40ftReefer}</span></p>
                                     <p>40FT Highcube: <span className="font-bold text-blue-800">{calculations.boxesIn40ftHC}</span></p>
                                </div>
                            </div>
                         </div>
                        
                         <FormSection title="Goods and Shipping Details">
                            <TextAreaField label="Source of Goods Details" name="goodsSourceDetails" optional placeholder="Write Source of Goods here" maxLength={500} value={formState.goodsSourceDetails} onChange={handleChange} />
                            <TextAreaField label="Description of Goods" name="goodsDescription" required placeholder="Write Description of goods here" maxLength={500} value={formState.goodsDescription} onChange={handleChange} />
                            <SelectField label="Country of Import" name="importCountry" required value={formState.importCountry} onChange={handleChange}><option value="">Select Country</option><option value="USA">USA</option><option value="UK">UK</option><option value="PK">Pakistan</option></SelectField>
                            <SelectField label="Country of Export" name="exportCountry" required value={formState.exportCountry} onChange={handleChange}><option value="China">China</option></SelectField>
                            <InputField label="State Name" name="stateName" placeholder="Enter State name" required value={formState.stateName} onChange={handleChange}/>
                            <InputField label="City Name" name="cityName" placeholder="Enter City name" required value={formState.cityName} onChange={handleChange}/>
                            <InputField label="Postal Code" name="postalCode" placeholder="Enter Postal code" required value={formState.postalCode} onChange={handleChange}/>
                            <InputField label="Preferred Pickup Date" name="pickupDate" optional type="date" value={formState.pickupDate} onChange={handleChange}/>
                            <TextAreaField label="Any Special Requirements?" name="specialRequirements" optional placeholder="Write special requirements here" maxLength={500} value={formState.specialRequirements} onChange={handleChange} />
                        </FormSection>

                        <FormSection title="Additional Information">
                           <SelectField label="Currency Selection" name="currency" value={formState.currency} onChange={handleChange}><option value="">Select Currency</option><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option></SelectField>
                           <InputField label="Budget Estimate" name="budget" optional placeholder="Enter your budget range" value={formState.budget} onChange={handleChange}/>
                           <SelectField label="How Did You Hear About Us?" name="howDidYouHear" value={formState.howDidYouHear} onChange={handleChange}><option value="">Select here</option><option>Google</option><option>Social Media</option><option>Referral</option></SelectField>
                           <TextAreaField label="Additional Comments or Instructions" name="comments" optional placeholder="Write additional comments here" maxLength={500} value={formState.comments} onChange={handleChange}/>
                        </FormSection>

                        <div className="mt-8 flex flex-col items-center">
                            <div className="flex items-center">
                                <input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formState.agreeTerms} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                                    I agree to the <a href="#" className="font-medium text-blue-600 hover:underline">Terms & Conditions</a>
                                </label>
                            </div>
                            <button type="submit" className="mt-6 flex items-center justify-center gap-2 px-10 py-3 bg-red-600 text-white font-bold text-lg rounded-md shadow-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105">
                                Submit Form <SendIcon className="w-5 h-5"/>
                            </button>
                        </div>

                     </form>
                </div>
            </section>
        </div>
    );
};

export default RequestQuotePage;
