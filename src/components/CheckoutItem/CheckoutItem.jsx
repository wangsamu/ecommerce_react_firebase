import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CheckoutItem(props) {
  const {
    product,
    handleRemove,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = props;
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div>
      <tr key={product.id}>
        <td>
          <img src={product.imageUrl} alt={product.name} />
        </td>
        <td>{product.name}</td>
        <td>
          <button onClick={handleDecreaseQuantity}>- </button>
          <p>{product.quantity}</p>
          <button onClick={handleIncreaseQuantity}> +</button>
        </td>
        <td>{product.price}</td>
        <td>
          <button onClick={handleRemove}>Remove Item</button>
        </td>
      </tr>
    </div>
  );
}

export default CheckoutItem;
