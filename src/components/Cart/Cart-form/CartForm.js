import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeOrder } from "../../../store/cart-actions";
import classes from "./CartForm.module.css";
import { cartActions } from "../../../store/cart-slice";

import { uiActions } from "../../../store/ui-slice";

const CartForm = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredRepeatPassword, setEnteredRepeatPassword] = useState("");

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [enteredRepeatPasswordTouched, setEnteredRepeatPasswordTouched] =
    useState(false);

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredNameBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const enteredLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const enteredLastNameBlurHandler = () => {
    setEnteredLastNameTouched(true);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const enteredPasswordBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const enteredRepeatPasswordHandler = (event) => {
    setEnteredRepeatPassword(event.target.value);
  };

  const enteredRepeatPasswordBlurHandler = () => {
    setEnteredRepeatPasswordTouched(true);
  };

  const isNotEmpty = (value) => value.trim().length > 0;
  const isMoreThanSixChars = (value) => value.trim().length > 6;

  const enteredNameIsValid = isNotEmpty(enteredName);

  const enteredLastNameIsValid = isNotEmpty(enteredLastName);

  const enteredPasswordIsValid = isMoreThanSixChars(enteredPassword);

  const enteredRepeatPasswordIsValid = isMoreThanSixChars(
    enteredRepeatPassword
  );

  const bothPasswordsAreEqual = enteredPassword === enteredRepeatPassword;

  const passwordsNotValid =
    !bothPasswordsAreEqual &&
    enteredPasswordTouched &&
    enteredRepeatPasswordTouched &&
    enteredPasswordIsValid &&
    enteredRepeatPasswordIsValid;

  const formIsValid =
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredPasswordIsValid &&
    bothPasswordsAreEqual;

  const nameErrorClass =
    !enteredNameIsValid && enteredNameTouched ? classes["invalid"] : undefined;
  const lastNameErrorClass =
    !enteredLastNameIsValid && enteredLastNameTouched
      ? classes["invalid"]
      : undefined;
  const passwordErrorClass =
    !enteredPasswordIsValid && enteredPasswordTouched
      ? classes["invalid"]
      : undefined;
  const repeatPasswordErrorClass =
    !enteredRepeatPasswordIsValid && enteredRepeatPasswordTouched
      ? classes["invalid"]
      : undefined;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setCheckoutClicked(true);

    console.log("Cart is submitted");
    dispatch(completeOrder(cart));

    dispatch(cartActions.removeCart());
    dispatch(uiActions.showCart(false));
  };

  return (
    <>
      {!checkoutClicked && (
        <form onSubmit={formSubmitHandler} className={classes["cart-form"]}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              value={enteredName}
              onChange={enteredNameHandler}
              onBlur={enteredNameBlurHandler}
              className={nameErrorClass}
            ></input>
            {!enteredNameIsValid && enteredNameTouched && (
              <p className={classes["invalid-text"]}>Please enter a name.</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Your Last Name</label>
            <input
              id="lastName"
              type="text"
              value={enteredLastName}
              onChange={enteredLastNameHandler}
              onBlur={enteredLastNameBlurHandler}
              className={lastNameErrorClass}
            ></input>
            {!enteredLastNameIsValid && enteredLastNameTouched && (
              <p className={classes["invalid-text"]}>
                Please enter a last name.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={enteredPassword}
              onChange={enteredPasswordHandler}
              onBlur={enteredPasswordBlurHandler}
              className={passwordErrorClass}
            ></input>
            {!enteredPasswordIsValid && enteredPasswordTouched && (
              <p className={classes["invalid-text"]}>
                Please enter more than 6 characters.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="r-password">Repeat Password</label>
            <input
              id="r-password"
              type="password"
              value={enteredRepeatPassword}
              onChange={enteredRepeatPasswordHandler}
              onBlur={enteredRepeatPasswordBlurHandler}
              className={repeatPasswordErrorClass}
            ></input>
            {!enteredRepeatPasswordIsValid && enteredRepeatPasswordTouched && (
              <p className={classes["invalid-text"]}>
                Please enter more than 6 characters.
              </p>
            )}
            {passwordsNotValid && <p>Please add same passwords.</p>}
          </div>
          <button disabled={!formIsValid}>Checkout</button>
        </form>
      )}
    </>
  );
};

export default CartForm;
