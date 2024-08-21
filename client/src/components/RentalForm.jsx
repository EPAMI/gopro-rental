import React from 'react';

const RentalForm = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
  return (
    <div className="mb-4">
      <h2 className="mb-3">Sélectionner les dates de location</h2>
      <div className="mb-3">
        <label className="form-label">Date de début:</label>
        <input 
          type="date" 
          value={startDate} 
          onChange={e => onStartDateChange(e.target.value)} 
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date de fin:</label>
        <input 
          type="date" 
          value={endDate} 
          onChange={e => onEndDateChange(e.target.value)} 
          className="form-control"
        />
      </div>
    </div>
  );
};

export default RentalForm;
