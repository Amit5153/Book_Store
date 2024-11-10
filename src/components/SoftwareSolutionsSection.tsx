import React from 'react';

const SoftwareSolutionsSection: React.FC = () => {
  return (
    <section className="bg-blue-800 text-white py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl font-bold text-center mb-8">
        Leading Accounting Software Solutions
      </h2>
      <p className="text-center mb-10">
        We provide assistance with an outstanding accounting software program to cater to various business needs.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        
       
        <div className="flex flex-col md:flex-row items-center gap-6 bg-blue-300 text-gray-800 p-6 rounded-lg shadow-md w-full md:w-[48%] lg:w-[45%]">
          <div className="w-20 h-20 flex items-center justify-center bg-white-200 rounded">
            <img src="public/image/zoho-logo.png" alt="Zoho" className="h-12" />
          </div>
          <p className="text-left">
            Zoho Books provides a reliable accounting tool for small and mid-sized businesses.
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white text-gray-800 p-6 rounded-lg shadow-md w-full md:w-[48%] lg:w-[45%]">
          <div className="w-20 h-20 flex items-center justify-center bg-blue-200 rounded">
            <img src="public/image/intuit.png" alt="QuickBooks" className="h-12" />
          </div>
          <p className="text-left">
            QuickBooks Online, developed by Intuit, is a popular bookkeeping tool for small and mid-sized businesses.
          </p>
        </div>

      
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white text-gray-800 p-6 rounded-lg shadow-md w-full md:w-[48%] lg:w-[45%]">
          <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded">
            <img src="public/image/xero-platinum.png" alt="Xero" className="h-12" />
          </div>
          <p className="text-left">
            Xero is a robust cloud-based accounting software for managing finances effortlessly.
          </p>
        </div>

    
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white text-gray-800 p-6 rounded-lg shadow-md w-full md:w-[48%] lg:w-[45%]">
          <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded">
            <img src="public/image/wave-logo.png" alt="Wave" className="h-12" />
          </div>
          <p className="text-left">
            Wave Accounting offers small businesses free and easy-to-use financial tools.
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white text-gray-800 p-6 rounded-lg shadow-md w-full md:w-[48%] lg:w-[45%]">
          <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded">
            <img src="public/image/kashoo-logo.png" alt="Kashoo" className="h-12" />
          </div>
          <p className="text-left">
            Kashoo is a simple accounting solution for freelancers and small businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutionsSection;
