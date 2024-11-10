import React from 'react';

const PricingSection : React.FC = () => {
  return (
    <section className="bg-blue-100 py-10 px-6 md:px-12 lg:px-24">

      <h2 className="text-blue-800 text-2xl font-bold text-center mb-4">
        Bookkeeping Services Price List For Small Business
      </h2>
      <p className="text-center mb-8">
        Select from three budget-friendly and adaptable options. We collaborate with you to tailor bookkeeping solutions to fit your unique business requirements.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-center">
       
        <div className="bg-white p-6 shadow-md rounded-lg border-2 border-blue-800">
          <h3 className="text-lg font-semibold text-blue-800">BEGINNER</h3>
          <p className="text-4xl font-bold text-blue-800">$95</p>
          <p className="text-sm text-gray-600">/month</p>
          <p className="mt-4 text-sm">Customized for Startups & Micro Businesses (includes accounting software subscription)</p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-lg">BUY NOW</button>
        </div>
      
        <div className="bg-white p-6 shadow-md rounded-lg border-2 border-blue-800 relative">
          <span className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs">Most Popular</span>
          <h3 className="text-lg font-semibold text-blue-800">INTERMEDIATE</h3>
          <p className="text-4xl font-bold text-blue-800">$150</p>
          <p className="text-sm text-gray-600">/month</p>
          <p className="mt-4 text-sm">Single checking account (includes accounting software subscription) – Unlimited</p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-lg">BUY NOW</button>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg border-2 border-blue-800">
          <h3 className="text-lg font-semibold text-blue-800">ENTERPRISE</h3>
          <p className="text-4xl font-bold text-blue-800">$175</p>
          <p className="text-sm text-gray-600">/month</p>
          <p className="mt-4 text-sm">For two to nine bank accounts, includes accounting software subscription, unlimited transactions</p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-lg">BUY NOW</button>
        </div>
      </div>

      <h2 className="text-blue-800 text-2xl font-bold text-center mt-16 mb-4">
        Bookkeeping Services Price List for Medium to Large Businesses
      </h2>
      <p className="text-center mb-8">
        Explore our tailored bookkeeping solutions designed to meet the unique needs of medium to large businesses.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-center">

        <div className="bg-white p-6 shadow-md rounded-lg border-2 border-blue-800">
          <p className="text-4xl font-bold text-blue-800">$1,000</p>
          <p className="text-sm text-gray-600">/month</p>
          <p className="mt-4 text-sm">Hourly Rate: $25/hour</p>
          <p className="text-sm">Minimum Commitment: 40 hours per month</p>
          <p className="text-sm">Total Monthly Cost: $1,000</p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-lg">BUY NOW</button>
        </div>
       
        <div className="bg-white p-6 shadow-md rounded-lg border-2 border-blue-800">
          <p className="text-4xl font-bold text-blue-800">$2,000</p>
          <p className="text-sm text-gray-600">/month</p>
          <p className="mt-4 text-sm">Hourly Rate: $25/hour</p>
          <p className="text-sm">Commitment: 80 hours per month</p>
          <p className="text-sm">Total Monthly Cost: $2,000</p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-lg">BUY NOW</button>
        </div>
       
        <div className="bg-white p-6 shadow-md rounded-lg border-2 border-blue-800">
          <p className="text-4xl font-bold text-blue-800">$4,000</p>
          <p className="text-sm text-gray-600">/month</p>
          <p className="mt-4 text-sm">Hourly Rate: $25/hour</p>
          <p className="text-sm">Commitment: 160 hours per month</p>
          <p className="text-sm">Total Monthly Cost: $4,000</p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-lg">BUY NOW</button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-blue-800 text-center">Additional Information:</h3>
        <ul className="list-disc list-inside text-center text-gray-600">
          <li>All plans are billed monthly.</li>
          <li>Extra hours beyond the committed amount are billed at $25/hour.</li>
          <li>For adjustments to your plan or additional services, please contact us.</li>
        </ul>
      </div>
    </section>
  );
};

export default PricingSection;
