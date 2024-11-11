import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-blue-200 text-blue-900 py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800">
        Discover What Our Clients Say About Our Online Bookkeeping Services
      </h2>
      <p className="text-center text-lg mb-6 text-blue-700">
        Empowering our clients with the financial support they need to thrive in their business is our sole focus.
      </p>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">

        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Try us out for free!</h3>
          <p className="mb-4 text-gray-700">
            Remote Books Online handles all transactions, performs necessary journal entries, and reconciles one month of your books at no cost.
            We invite you to experience and assess our bookkeeping service and process firsthand, aiming to establish a long-term partnership.
          </p>
          <p className="mb-4 text-gray-700">
            Connect with an Accountant or Bookkeeper Call (800) 583-0148 to receive a quote and schedule a consultation with a Certified QuickBooks ProAdvisor for a comprehensive review of your books.
            Alternatively, click below to get started. We eagerly anticipate assisting you.
          </p>
          <p className="flex items-center text-gray-700">
            <span className="mr-2 font-medium text-blue-600">📞 1800 583 0148</span>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all">
              GET A QUOTE
            </button>
          </p>
        </div>

        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Check Bookkeeping off Your To-Do List</h3>
          <p className="mb-2 text-gray-700">When you delegate bookkeeping tasks, you gain more time to focus on your business.</p>
          <ul className="list-none space-y-2 text-gray-700">
            <li>✅ No more late nights spent on data entry and tedious bookkeeping tasks.</li>
            <li>✅ Eliminate the need for training employees in bookkeeping, saving time and resources.</li>
            <li>✅ Enjoy up-to-date and accurate books at all times.</li>
            <li>✅ Liberate your time to concentrate on growing your business.</li>
          </ul>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="p-2 flex-1 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg shadow-md hover:bg-blue-700 transition-all">
              REQUEST A CALLBACK
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">

        <div className="w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com"
            title="Client Testimonial 1"
            className="rounded-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="mt-2 text-center text-gray-700 font-medium">Client Name</p>
        </div>

        <div className="w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/watch?v=EtZVGuQb0zo"
            title="Client Testimonial 2"
            className="rounded-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="mt-2 text-center text-gray-700 font-medium">Client Name</p>
        </div>
        
      </div>
      
      <p className="text-center mt-8 text-lg font-medium text-blue-800">
        Our customers say Excellent <span className="font-bold">4.6 out of 5</span> based on 153 reviews
        <img src="image/image.png" alt="Rating" className="inline-block ml-2 w-22 h-8 align-middle" />
      </p>

    </section>
  );
};

export default TestimonialsSection;
