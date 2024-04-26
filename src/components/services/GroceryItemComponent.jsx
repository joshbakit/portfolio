import React, { useState } from "react";

const GroceryItemComponent = ({ item, handleEditItems, handleDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);
  const [error, setError] = useState("");

  const onEdit = () => {
    if (newItem) {
      handleEditItems(item.id, newItem);
      setIsEditing(false);
      setError("");
    } else {
      setError("grocery item must not be empty!");
    }
  };

  return (
    <>
      <li>
        {isEditing ? (
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}
        <span>{error ? <p className="errors">{error}</p> : null}</span>

        <div>
          <button
            className="btn-edit"
            onClick={() => {
              isEditing ? onEdit() : setIsEditing(true);
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            className="btn-delete"
            onClick={() => handleDeleteItem(item.id)}
          >
            delete
          </button>
        </div>
      </li>
    </>
  );
};

export default GroceryItemComponent;
