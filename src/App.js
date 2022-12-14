import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Fruits from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData } from "./store/cart-actions";
import { fetchCartData } from "./store/cart-actions";
import Footer from "./components/Layout/Footer";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);

  return (
    <Layout>
      {!showCart && notification && (
        <Notification
          title={notification.title}
          message={notification.message}
        />
      )}
      {showCart && !notification && <Cart />}
      <Fruits />
      <Footer />
    </Layout>
  );
}

export default App;
