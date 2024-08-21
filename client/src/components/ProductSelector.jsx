import React from 'react';
import hero11Image from '../assets/image_9_0f28fe93-178d-4e2f-b891-e874e4c749e7.jpg.webp';
import hero12Image from '../assets/gopro-hero12-black-p-image-253192-grande.jpg.webp';

const ProductSelector = ({ selectedProduct, onSelectProduct }) => {
  const images = {
    hero11: hero11Image,
    hero12: hero12Image,
  };

  return (
    <div className="mb-4">
      <h2 className="mb-3">Sélectionnez le modèle GoPro</h2>
      <div className="d-flex align-items-center">
        <img src={images[selectedProduct]} alt="GoPro" className="me-3" style={{ width: '150px' }} />
        <select 
          value={selectedProduct} 
          onChange={e => onSelectProduct(e.target.value)} 
          className="form-select"
        >
          <option value="hero11">GoPro Hero 11</option>
          <option value="hero12">GoPro Hero 12</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSelector;
