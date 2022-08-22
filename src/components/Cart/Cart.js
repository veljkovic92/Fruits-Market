import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Modal from "../UI/Modal";
import CartForm from "./Cart-form/CartForm";
import { useState } from "react";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [orderClicked, setOrderClicked] = useState(false);

  const cartButtonHandler = () => {
    dispatch(uiActions.showCart(false));
  };

  const orderHandler = () => {
    setOrderClicked(true);
  };

  const cartHeader =
    cartItems.length > 0 ? "Your Shopping Cart" : "No products added in Cart";

  return (
    <Modal className={classes.cart}>
      <h2>{cartHeader}</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              total: item.totalPrice,
              quantity: item.totalAmount,
              price: item.price,
            }}
          />
        ))}
      </ul>
      {orderClicked && cartItems.length > 0 && <CartForm />}

      <div className={classes.actions}>
        {cartItems.length > 0 && !orderClicked && (
          <button className={classes.mainCartBtn} onClick={orderHandler}>
            Order
          </button>
        )}
        <button onClick={cartButtonHandler} className={classes.mainCartBtn}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
