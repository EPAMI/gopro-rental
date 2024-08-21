import React, { useState } from 'react';
import axios from 'axios';

const AvailabilityChecker = ({ selectedProduct }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [availability, setAvailability] = useState(null);

  const checkAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/stock/availability', {
        params: {
          product: selectedProduct,
          startDate,
          endDate,
        },
      });

      setAvailability(response.data);
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  return (
    <div className="mt-4">
      <h3>Vérifier la disponibilité</h3>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">Start Date</label>
        <input 
          type="date" 
          id="startDate" 
          className="form-control" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="endDate" className="form-label">End Date</label>
        <input 
          type="date" 
          id="endDate" 
          className="form-control" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          required 
        />
      </div>
      <button onClick={checkAvailability} className="btn btn-primary">Check Availability</button>

      {availability && (
        <div className="mt-3">
          <h5>Disponibilité:</h5>
          {availability.length > 0 ? (
            <ul>
              {availability.map((item, index) => (
                <li key={index}>Date: {new Date(item.date).toLocaleDateString()} - Disponible: {item.availableQuantity}</li>
              ))}
            </ul>
          ) : (
            <p>Pas de stock disponible pour les dates sélectionnées.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AvailabilityChecker;
