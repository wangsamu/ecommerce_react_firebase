import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../context/CartContext";
import "./checkout.styles.scss";

function CheckOut() {
  const { cartItems, setCartItems, priceCount } = useContext(CartContext);

  const handleRemove = (currentProduct) => {
    //when clicked, remove the product from cartItems array
    const newCartItems = cartItems.filter(
      (item) => item.id !== currentProduct.id
    );
    setCartItems(newCartItems);
  };

  //*********** */ to be substituted by addItemToCart function from CartContext
  const handleIncreaseQuantity = (currentProduct) => {
    //when clicked, add one to cartItems.product.quantity
    const newCartItems = cartItems.map((item) =>
      item.id === currentProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(newCartItems);
  };

  //*********** */ to be substituted by addItemToCart function from CartContext
  //add the following functionalities:
  //subtract the obj.quantity when clicked
  //when it reaches zero, eliminate the product from the cartItems array
  const handleDecreaseQuantity = (currentProduct) => {
    //when clicked, subtract one to cartItems.product.quantity
    const newCartItems = cartItems.map((item) =>
      item.id === currentProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(newCartItems);
  };

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
            handleIncreaseQuantity={() => handleIncreaseQuantity(product)}
            handleDecreaseQuantity={() => handleDecreaseQuantity(product)}
          />
        ))}
      </table>
      <h2>Total: ${priceCount}</h2>
    </div>
  );
}

export default CheckOut;
