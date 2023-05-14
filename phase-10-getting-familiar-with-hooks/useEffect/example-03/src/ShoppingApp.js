import { useState, useEffect } from "react";
import "./ShoppingApp.css";

export default function ShoppingApp() {
  const [itemObj, setItemObj] = useState({ itemName: "", itemPrice: 0 });
  const [itemArr, setItemArr] = useState([]);

  useEffect(() => {
    let totalPrice = 0;
    for (let item of itemArr) {
      totalPrice = totalPrice + Number(item.itemPrice);
    }
    document.querySelector(".total-items").innerHTML = `${itemArr.length}`;
    document.querySelector(".total-price").innerHTML = `${totalPrice}`;
  }, [itemArr]);

  return (
    <section className="ShoppingApp">
      <h2>Shopping App</h2>
      <form
        onSubmit={(synBaseEventObj) => {
          synBaseEventObj.preventDefault();
          setItemArr([...itemArr, itemObj]);
          setItemObj({ itemName: "", itemPrice: 0 });
        }}
      >
        <div>
          <label htmlFor="itemName">Type item name: </label>
          <input
            type="text"
            id="itemName"
            value={itemObj.itemName}
            onChange={(synBaseEventObj) => {
              setItemObj({
                ...itemObj,
                itemName: synBaseEventObj.target.value,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="itemPrice">Type item price: </label>
          <input
            type="number"
            id="itemPrice"
            value={itemObj.itemPrice}
            onChange={(synBaseEventObj) => {
              setItemObj({
                ...itemObj,
                itemPrice: Number(synBaseEventObj.target.value),
              });
            }}
          />
        </div>

        <button>Add Item</button>
      </form>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {itemArr.length > 0 &&
            itemArr.map((elementObj, idx) => {
              return (
                <tr key={idx}>
                  <td>{elementObj.itemName}</td>
                  <td>{elementObj.itemPrice}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <p>
        Total Items: <span className="total-items">0</span> Cart Total Price:{" "}
        <span className="total-price">0</span>
      </p>
    </section>
  );
}
