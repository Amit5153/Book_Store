import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative bg-blue-700 text-white p-10  px-18 flex items-center justify-between">
     

      <div className="max-w-lg text-left">
        <h2 className="text-3xl font-bold mb-4">
          Get The Expert Small Business Bookkeeping Services You Need
        </h2>
        <p className="mb-6">
          Remote Books Online takes care of the books, so you can run your business. Get{' '}
          <strong>Your First Month of Bookkeeping Services for FREE!</strong>
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100">
          Get a Quote
        </button>
      </div>

    
      <div className="flex-shrink-0 h-50">
        <img src="public/image/sample-1.png" alt="Sample Image" className="h-80 w-auto" />
      </div>

      
    </section>
  );
};

export default Banner;
