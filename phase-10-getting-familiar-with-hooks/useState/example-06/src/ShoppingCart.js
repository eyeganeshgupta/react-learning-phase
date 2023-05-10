import { useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="ShoppingCart">
      <h1>Shopping Cart</h1>
      <form
        onSubmit={(synEventObj) => {
          synEventObj.preventDefault();
          if (itemName.length > 0) {
            setItems([...items, itemName]);
          }
          setItemName("");
        }}
      >
        <label htmlFor="item">Type item name: </label>
        <input
          type="text"
          id="item"
          value={itemName}
          onChange={(synEventObj) => {
            setItemName(synEventObj.target.value);
          }}
        />
        <button>Add item</button>
      </form>

      <h1>
        Your shopping cart:{" "}
        {items.length === 0 && <span className="empty">Empty</span>}
      </h1>

      {items.length > 0 && (
        <ul>
          {items.map((element) => {
            return <li key={element}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
