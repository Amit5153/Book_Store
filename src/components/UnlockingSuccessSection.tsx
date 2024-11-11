import React from 'react';

const UnlockingSuccessSection : React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-blue-800 text-2xl font-bold text-center mb-4">
        Discover Remote Books Online: Your Trusted Partner in Effortless Bookkeeping Solutions
      </h2>
      <p className="text-center text-gray-600 mb-12">
        For entrepreneurs, small businesses, and startups, bookkeeping can be a significant challenge. 
        At Remote Books Online, we alleviate your pain and frustration with cost-effective, adaptable bookkeeping solutions 
        suitable for businesses of any scale or specialization. No business is beyond our expertise, regardless of size or uniqueness.
      </p>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center space-y-4">
          <img src="image/expert-team.png" alt="Expert Team" className="mx-auto h-12 w-12" />
          <h3 className="text-lg font-semibold text-blue-800">Expert Team</h3>
          <p className="text-gray-600">
            Collaborate with a team of professionals including Certified QuickBooks ProAdvisor bookkeepers and Xero-Certified Advisors.
            
          </p>
          <button className="text-blue-600 font-semibold">Read more</button>
        </div>

       
        <div className="text-center space-y-4">
          <img src="image/efficient-process.png" alt="Efficient Process" className="mx-auto h-12 w-12" />
          <h3 className="text-lg font-semibold text-blue-800">Efficient Process</h3>
          <p className="text-gray-600">
            Our process is swift, accurate, and seamless, handled by a dedicated team of qualified accountants.
          </p>
          <button className="text-blue-600 font-semibold">Read more</button>
        </div>

       
        <div className="text-center space-y-4">
          <img src="image/advanced-systems.png" alt="Advanced Systems" className="mx-auto h-12 w-12" />
          <h3 className="text-lg font-semibold text-blue-800">Advanced Systems</h3>
          <p className="text-gray-600">
            We use industry-leading accounting software like QuickBooks and Xero for seamless bookkeeping.
          </p>
          <button className="text-blue-600 font-semibold">Read more</button>
        </div>

  
        <div className="text-center space-y-4">
          <img src="image/robust-security.png" alt="Robust Data Security" className="mx-auto h-12 w-12" />
          <h3 className="text-lg font-semibold text-blue-800">Robust Data Security</h3>
          <p className="text-gray-600">
            Your data is safeguarded with 256-bit SSL/TLS encryption and secure document storage.
          </p>
          <button className="text-blue-600 font-semibold">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default UnlockingSuccessSection;
