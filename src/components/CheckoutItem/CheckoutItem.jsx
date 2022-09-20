import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CheckoutItem({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleRemove = () => {
    //when clicked, remove the product from cartItems array
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <tr key={product.id}>
        <td>
          <img src={product.imageUrl} alt={product.name} />
        </td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>
          <button onClick={handleRemove}>Remove Item</button>
        </td>
      </tr>
    </div>
  );
}

export default CheckoutItem;
