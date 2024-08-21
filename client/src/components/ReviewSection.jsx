import React, { useState } from 'react';

const ReviewSection = ({ selectedProduct }) => {
  const [reviews, setReviews] = useState([
    
  ]);

  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, product: selectedProduct }]);
    setNewReview({ name: '', comment: '', rating: 1 }); // Reset the form
  };

  return (
    <div className="mt-5">
      <h2>Customer Reviews for {selectedProduct === 'hero11' ? 'GoPro Hero 11' : 'GoPro Hero 12'}</h2>
      
      {/* Affichage des avis */}
      <div className="mb-4">
        {reviews
          .filter(review => review.product === selectedProduct)
          .map((review, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.comment}</p>
                <p className="card-text">Rating: {'⭐'.repeat(review.rating)}</p>
              </div>
            </div>
        ))}
      </div>

      {/* Formulaire pour ajouter un nouvel avis */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            value={newReview.name} 
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment</label>
          <textarea 
            id="comment" 
            className="form-control" 
            rows="3" 
            value={newReview.comment} 
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <select 
            id="rating" 
            className="form-select" 
            value={newReview.rating} 
            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            required
          >
            <option value={1}>1 ⭐</option>
            <option value={2}>2 ⭐⭐</option>
            <option value={3}>3 ⭐⭐⭐</option>
            <option value={4}>4 ⭐⭐⭐⭐</option>
            <option value={5}>5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewSection;
