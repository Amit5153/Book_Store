import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import SoftwareSolutionsSection from './components/SoftwareSolutionsSection';
import UnlockingSuccessSection from './components/UnlockingSuccessSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ServicesSection />
      <SoftwareSolutionsSection />
      <UnlockingSuccessSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />

      {/* Add more components here as needed */}
    </div>
  );
};

export default App;
