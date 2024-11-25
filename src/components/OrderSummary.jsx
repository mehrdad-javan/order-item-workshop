import React from "react";
import {
  FaTrashAlt,
  FaCartPlus,
  FaMoneyBillWave,
} from "react-icons/fa";

const OrderSummary = ({
  orderList,
  removeFromOrder,
  increaseQuantity,
  getTotalPrice,
  isDarkMode,
}) => {
  return (
    <div className="pt-4 pb-4">
      <h2
        className={`${isDarkMode ? "text-light" : "text-dark"}`}
      >
        Your Orders
      </h2>
      {/* https://www.w3schools.com/bootstrap5/bootstrap_list_groups.php */}
      <ul className="list-group">
        {orderList.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center" // https://www.w3schools.com/bootstrap5/bootstrap_flex.php
          >
            <span>{`${item.name} x${item.count}`}</span>
            <div>
              <button
                onClick={() => removeFromOrder(item.id)}
                className="btn btn-danger btn-sm m-1"
                title="Remove Item"
              >
                <FaTrashAlt />
              </button>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="btn btn-success btn-sm m-1"
                title="Add More"
              >
                <FaCartPlus />
              </button>
            </div>
              SEK {(item.price * item.count).toFixed(2)}
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-end active">
          <strong>
            Total : {getTotalPrice().toFixed(2)}
          </strong>

        </li>
      </ul>
    </div>
  );
};

export default OrderSummary;
