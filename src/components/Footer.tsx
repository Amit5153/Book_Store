// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
    <div className="bg-blue-800 text-center py-4 flex justify-center items-center space-x-4">
        <p className="text-lg font-semibold">
          Get Your First Month of Bookkeeping Services for FREE!
        </p>
        <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-200">
          GET A QUOTE
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        
          <div>
            <h3 className="font-semibold mb-4">Small Business Accounting</h3>
            <ul className="space-y-2 text-sm">
              <li>Retail Stores (Boutiques, Gift Shops)</li>
              <li>Restaurants and Cafes</li>
              <li>E-commerce Businesses</li>
              <li>Real Estate Agents</li>
              <li>Property Management Companies</li>
              <li>Construction Companies</li>
              <li>Manufacturing Businesses</li>
              <li>Childcare Businesses</li>
              <li>Auto Repair Shops</li>
              <li>Startups</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>Freelancers and Solopreneurs</li>
              <li>Salon Businesses</li>
              <li>Web Design and Digital Marketing Agencies</li>
              <li>Insurance Agencies, MGAs, and Wholesalers</li>
              <li>Fitness Studios and Gyms</li>
              <li>Music Teachers and Performing Arts Studios</li>
              <li>Event Planners</li>
              <li>Consultants and Coaches</li>
              <li>Doctors, Dentists, Chiropractors, and Medical Professionals</li>
              <li>IT Services Companies</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>Housekeeping Services</li>
              <li>Landscaping and Lawn Care Services</li>
              <li>Law Offices</li>
              <li>Pet Stores</li>
              <li>Tourism Agencies</li>
              <li>Security Businesses</li>
              <li>SPA Businesses</li>
              <li>Hotels, Motels, Resorts</li>
              <li>Amazon Sellers</li>
              <li>eBay Sellers</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>Airbnb Owners</li>
              <li>Pet Groomers and Boarding Facilities</li>
              <li>Photographers and Videographers</li>
              <li>Small Farms</li>
              <li>Painting Contractors</li>
              <li>Toy Stores</li>
              <li>Non-Profit Organizations</li>
              <li>Interior Designers</li>
              <li>Trucking and Transportation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <p className="text-sm">800 S. Gay Street, Suite 700, Knoxville, TN 37929</p>
            <p className="text-sm">Phone: 1-800-589-0148, 1-855-325-8989</p>
          </div>
        </div>

      
        <div className="border-t border-gray-500 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>White Label Bookkeeping Services</li>
              <li>Bookkeeping Services</li>
              <li>Catch Up Bookkeeping Services</li>
              <li>Outsourced Bookkeeping Services</li>
              <li>Bookkeeping Services for Small Business</li>
              <li>Bookkeepers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Overview</li>
              <li>Pricing</li>
              <li>How it works</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Bookkeeping</li>
              <li>Virtual Bookkeeping</li>
              <li>Outsource Bookkeeping</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <p className="text-sm">800 S. Gay Street, Suite 700, Knoxville, TN 37929</p>
            <p className="text-sm">Phone: 1800 583 0148, 1-865-935-8888</p>
            <p className="text-sm">Email: sales@remotebooksonline.com</p>
            <h3 className="font-semibold mt-4">Working Hours</h3>
            <p className="text-sm">Monday to Friday: 8:00 AM to 10:00 PM</p>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p className="mb-4">
            *Disclaimer: Remote Books Online provides bookkeeping, tax preparation, tax filing, and accounting services for small businesses using third-party accounting software. We are a THIRD PARTY accounting & bookkeeping solution and we are NOT AFFILIATED with any brands, trademarks, logos, or any other company names used. The brand names, trademarks, and logos belong to their respective owners and are for representation purposes only.
          </p>
          <div className="flex justify-between text-gray-400">
            <p>Privacy Policy | Terms | Refund Policy</p>
            <p>© 2024 Remote Books Online LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
