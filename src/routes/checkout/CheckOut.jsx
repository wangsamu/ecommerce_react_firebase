import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../context/CartContext";

function CheckOut() {
  const { cartItems, setCartItems, priceCount } = useContext(CartContext);

  const handleRemove = (p) => {
    //when clicked, remove the product from cartItems array
    const newCartItems = cartItems.filter((item) => item.id !== p.id);
    setCartItems(newCartItems);
  };

  const handleIncreaseQuantity = () => {};
  const handleDecreaseQuantity = () => {};

  return (
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {cartItems.map((product) => (
          <CheckoutItem
            product={product}
            key={product.id}
            handleRemove={() => handleRemove(product)}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />
        ))}
      </table>
      <h2>Total: ${priceCount}</h2>
    </div>
  );
}

export default CheckOut;
