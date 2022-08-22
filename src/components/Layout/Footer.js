import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div>
        <h3>Our way...</h3>
        <p>
          ... is providing you with the fresh, homemade, natural-grown and
          seasonal fruits that will surprise you with the taste, price and
          delivery time.
        </p>
        <p>Copyright © 2021 Fruit Market. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
