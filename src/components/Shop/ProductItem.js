import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, id, photoUrl } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ title, price, id }));
  };
  let buttonColor;

  if (id === "apples") {
    buttonColor = classes.redBtn;
  } else if (id === "oranges") {
    buttonColor = classes.orangeBtn;
  } else {
    buttonColor = classes.greenBtn;
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <section className={classes["product-body"]}>
          <p className={classes.desc}>{description}</p>
          <img src={photoUrl} className={classes.photo}></img>

          <button onClick={addToCartHandler} className={buttonColor}>
            Add to Cart
          </button>
        </section>
      </Card>
    </li>
  );
};

export default ProductItem;
