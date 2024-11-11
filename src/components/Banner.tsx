import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative bg-blue-700 text-white p-6 md:p-10 lg:px-18 flex flex-col md:flex-row items-center justify-between">
      
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
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

      <div className="flex-shrink-0 h-40 md:h-50 mt-6 md:mt-0">
        <img src="image/sample-1.png" alt="Sample Image" className="h-full w-auto max-w-xs md:max-w-none" />
      </div>
    </section>
  );
};

export default Banner;

