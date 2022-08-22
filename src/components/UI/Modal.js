import Card from "./Card";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Backdrop = () => {
  const dispatch = useDispatch();

  const onBackdropClickHandler = () => {
    dispatch(uiActions.showCart(false));
    dispatch(uiActions.hideNotification());
  };
  return (
    <div className={classes.backdrop} onClick={onBackdropClickHandler}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={`${classes.overlay} ${props.className}`}>
      {props.children}
    </Card>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
