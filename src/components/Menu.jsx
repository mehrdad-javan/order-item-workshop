import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const Menu = ({ fastFoods, isDarkMode, addToOrder }) => {
  return (
    <div className="row">
      {fastFoods.map((food) => (
        <div key={food.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={food.image} className="card-img-top" alt={food.name} />
            <div className="card-body">
              <h5 className="card-title">{food.name}</h5>
              <p className="card-text">{food.description}</p>
              <p className="card-text">SEK {food.price.toFixed(2)}</p>
              <button
                onClick={() => addToOrder(food)}
                className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
              >
                <FaCartPlus className="mr-2" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
