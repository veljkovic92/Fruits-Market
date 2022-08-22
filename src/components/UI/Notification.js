import classes from "./Notification.module.css";
import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const Notification = (props) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(true);
  const closeBtnHandler = () => {
    setModalOpen(false);
    dispatch(uiActions.hideNotification());
  };
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    modalOpen && (
      <Modal className={cssClasses}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        <button
          className={classes["close-modal-btn"]}
          onClick={closeBtnHandler}
        >
          Back to main menu
        </button>
      </Modal>
    )
  );
};

export default Notification;
