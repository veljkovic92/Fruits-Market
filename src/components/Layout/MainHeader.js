import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Fruit Market</h1>

        <nav>
          <ul>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes["bgr-img"]}></div>
    </>
  );
};

export default MainHeader;
