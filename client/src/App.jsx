import React, { useState, useEffect } from 'react';
import ProductSelector from './components/ProductSelector';
import RentalForm from './components/RentalForm';
import PriceDisplay from './components/PriceDisplay';
import ReviewSection from './components/ReviewSection';
import Testimonials from './components/Testimonials';
import AvailabilityChecker from './components/AvailabilityChecker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState('hero11');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = (end - start) / (1000 * 60 * 60 * 24) + 1;

      if (days >= 4) {
        const pricePerDay = selectedProduct === 'hero11' ? 5 : 10;
        setPrice(pricePerDay * days);
      } else {
        setPrice(0);
      }
    }
  }, [selectedProduct, startDate, endDate]);

  return (
    <><> 
    <Navbar />
    </>
    <div className="container py-5">
      <h1 className="text-center mb-5">Location GoPro</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ProductSelector selectedProduct={selectedProduct} onSelectProduct={setSelectedProduct} />
          <RentalForm
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate} />
          <PriceDisplay price={price} />
          <button className="btn btn-primary mt-4">Confirmer la location</button>
          <button className="btn btn-outline-secondary mt-3 ms-3">Contacter le support</button>
          <AvailabilityChecker selectedProduct={selectedProduct} />
          <Testimonials selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default App;
