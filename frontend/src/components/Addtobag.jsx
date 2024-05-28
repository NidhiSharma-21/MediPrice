import React, { useState } from 'react';

const AddToBag = () => {
  const [quantity, setQuantity] = useState(1);
  const [addedToBag, setAddedToBag] = useState(false);

  const handleAddToBag = () => {
   
    setAddedToBag(true);
  };

  return (
    <div className="add-to-bag-container">
      <div className="quantity">
        <label htmlFor="quantity">Quantity:</label>
        <input 
          type="number" 
          id="quantity" 
          min="1" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
      </div>
      <button onClick={handleAddToBag} disabled={addedToBag}>
        {addedToBag ? 'Added to Bag' : 'Add to Bag'}
      </button>
    </div>
  );
};

export default AddToBag;
