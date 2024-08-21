import React, { useState } from 'react';

const Testimonials = ({ selectedProduct }) => {
  const [reviews, setReviews] = useState([
    { product: 'hero11', name: 'John Doe', comment: 'La GoPro Hero 11 a été formidable pour mon voyage ! Le processus de location a été facile et fluide.', rating: 5 },
    { product: 'hero12', name: 'Jane Smith', comment: 'Le service est excellent et la GoPro Hero 12 a permis de capturer tous les instants avec brio !', rating: 4 },
    { product: 'hero11', name: 'Alice Brown', comment: 'Hautement recommandable ! Le prix était juste et l\'équipement de première qualité.', rating: 5 },
  ]);

  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, product: selectedProduct }]);
    setNewReview({ name: '', comment: '', rating: 1 }); // Réinitialiser le formulaire après l'envoi
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Avis Clients</h2>
      
      <div className="row">
        {reviews
          .filter(review => review.product === selectedProduct)
          .map((review, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <p>"{review.comment}"</p>
                  <footer className="blockquote-footer">{review.name}</footer>
                </div>
              </div>
            </div>
        ))}
      </div>

      {/* Formulaire pour ajouter un nouvel avis */}
      <div className="mt-5">
        <h3>Submit Your Review</h3>
        <form onSubmit={handleSubmit} className="mb-5">
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
    </div>
  );
};

export default Testimonials;
