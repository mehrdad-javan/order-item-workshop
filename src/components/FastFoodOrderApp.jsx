import React, { useState } from "react";
import Menu from "./Menu";
import OrderSummary from "./OrderSummary";
import ThemeToggle from "./ThemeToggle";
import { getFastFoods } from "../service/fastFoodAPI";

const FastFoodOrderApp = () => {
  const [orderList, setOrderList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light mode
  const toggleMode = () => setIsDarkMode(!isDarkMode);

  // Add item to the order
  const addToOrder = (food) => {
    // Check if the item already exists in the orderList
    const existingItem = orderList.find((item) => item.id === food.id);

    if (existingItem) {
      // If the item exists, increment its count by 1
      const updatedOrderList = orderList.map((item) =>
        item.id === food.id ? { ...item, count: item.count + 1 } : item 
      );
      setOrderList(updatedOrderList);
    } else {
      setOrderList([...orderList, { ...food, count: 1 }]);
    }
  };


  // Remove or decrement item from the order
  const removeFromOrder = (foodId) => {
    const updatedOrderList = orderList.map((item) =>
      item.id === foodId ? { ...item, count: item.count - 1 } : item
    );
    const finalOrderList= updatedOrderList.filter((item) => item.count > 0);
    setOrderList(finalOrderList);
  };

  // Increase item quantity
  const increaseQuantity = (foodId) => {
    const updatedOrderList = orderList.map((item) =>
      item.id === foodId ? { ...item, count: item.count + 1 } : item
    )
    setOrderList(updatedOrderList);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return orderList.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div className={`container mt-5 ${isDarkMode ? "bg-dark" : "bg-light"}`}>
      <ThemeToggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <h1 className={`text-center ${isDarkMode ? "text-light" : "text-dark"}`}>
        Fast Food Menu
      </h1>


      <Menu
        fastFoods={getFastFoods()}
        isDarkMode={isDarkMode}
        addToOrder={addToOrder}
      />
      <OrderSummary
        orderList={orderList}
        removeFromOrder={removeFromOrder}
        increaseQuantity={increaseQuantity}
        getTotalPrice={getTotalPrice}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default FastFoodOrderApp;
