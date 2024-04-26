import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryItemComponent from "./GroceryItemComponent";

const GroceryComponents = () => {
  const inputRef = useRef();
  const [error, setError] = useState("");
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  const handleAddItem = () => {
    if (item) {
      setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
      setItem("");
      setError("");
    } else {
      setError("grocery item cannot be empty!");
      inputRef.current.focus();
    }
  };

  const handleEditItems = (id, newItem) => {
    const updateGroceryItems = groceryItems.map((item) => {
      if (item.id === id) {
        return { ...item, name: newItem };
      }
      return item;
    });
    setGroceryItems(updateGroceryItems);
  };

  const handleDeleteItem = (removeId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== removeId);
    setGroceryItems(filteredItems);
  };

  const handleClearItems = () => {
    setGroceryItems([]);
  };

  return (
    <div className="grocery-buddy">
      <h1>Grocery Buddy</h1>
      <div className="input-section">
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="input grocery..."
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button className="btn-add" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
        <span>{error ? <p className="errors">{error}</p> : null}</span>
      </div>
      <ul className="grocery-list">
        {groceryItems.map((item) => (
          <GroceryItemComponent
            key={item.id}
            item={item}
            handleEditItems={handleEditItems}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      {groceryItems.length > 0 ? (
        <button onClick={handleClearItems} className="btn-clear">
          Clear Items
        </button>
      ) : null}
    </div>
  );
};

export default GroceryComponents;
