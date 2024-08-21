import React from 'react';

const PriceDisplay = ({ price }) => {
  return (
    <div className="alert alert-info">
      <h4>Prix total: {price} €</h4>
    </div>
  );
};

export default PriceDisplay;
