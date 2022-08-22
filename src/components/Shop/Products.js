import ProductItem from "./ProductItem";
import Notification from "../UI/Notification";
import { useSelector } from "react-redux";

import classes from "./Products.module.css";
import applesImg from "../../assets/apples.jpg";
import orangesImg from "../../assets/oranges.jpg";
import kiwisImg from "../../assets/kiwi.jpg";

const fruits = [
  {
    id: "apples",
    price: 6,
    title: "Australian Apples",
    description: "Sweet and juicy",
    photoUrl: applesImg,
  },
  {
    id: "oranges",
    price: 8,
    title: "Spanish Oranges",
    description: "Sour and fresh",
    photoUrl: orangesImg,
  },
  {
    id: "kiwi",
    price: 4,
    title: "Italian Kiwis",
    description: "Ripe and green",
    photoUrl: kiwisImg,
  },
];

const Fruits = (props) => {
  const notification = useSelector((state) => state.ui.notification);

  {
    notification && (
      <Notification title={notification.title} message={notification.message} />
    );
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite fruits</h2>
      <ul>
        {fruits.map((fruit) => {
          return (
            <ProductItem
              key={fruit.id}
              id={fruit.id}
              title={fruit.title}
              price={fruit.price}
              description={fruit.description}
              photoUrl={fruit.photoUrl}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Fruits;
