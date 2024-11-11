import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-blue-800 text-2xl font-bold text-center mb-8">
        Focus on Your Business, We'll Manage Your Books: Remote Books Online - Your Affordable Online Bookkeeping Solution
      </h2>  
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch space-y-6 md:space-y-0">
        
        <div className="flex-1 space-y-4 text-gray-700 md:pr-8">
          <p className="flex items-start">
            <span className="text-blue-500 mr-3">✔️</span>
            Effortlessly Update Your Books for Taxes, Loans, and Transactions: Gain Clarity on Your Business Finances
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-3">✔️</span>
            Starting at just $95 a month, our Certified QuickBooks ProAdvisors and Xero-Certified Advisors offer convenient online bookkeeping services
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-3">✔️</span>
            Enjoy included accounting software and secure monthly bank statement downloads for seamless financial management 
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-3">✔️</span>
            From back bookkeeping to payroll, our services cater to your needs with real-time support from full- or part-time bookkeepers
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-3">✔️</span>
            Experience our stress-free bookkeeping with a complimentary month of reconciled books: Let us remove the frustration for you
          </p>
        </div>
        
        
        <div className="flex-1 flex flex-wrap justify-center md:justify-start items-center gap-4">
          <img src="image/bbb2.png" alt="BBB Accredite Business" className="h-12 w-auto" />
          <img src="image/2-badge-advanced-online-large.png" className="h-20 w-auto" />
          <img src="image/freshbooks-logo.png" alt="QuickBooks ProAdvisor" className="h-12 w-auto" />
          <img src="image/intuit.png" alt="Intuit Authorized Reseller" className="h-12 w-auto" />
          <img src="image/netsuite-logo.png" alt="Citrix ShareFile" className="h-12 w-auto" />
          <img src="image/xero-platinum.png" alt="Xero Platinum Partner" className="h-12 w-auto" />
          <img src="image/wave-logo.png" alt="Xero Partner" className="h-12 w-auto" />
          <img src="image/zoho-logo.png" alt="Xero Certified Advisor" className="h-12 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
