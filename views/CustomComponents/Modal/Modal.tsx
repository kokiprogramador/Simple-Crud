import styles from "./Modal.module.css";
import Button from "../../UI/atoms/Button/Button";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={styles.Modal} style={{ display: isOpen ? "grid" : "none" }}>
      <div className={styles.Modal_Body}>
        {children}
        <Button
          variant={"button"}
          Text={"No"}
          CustomClass={""}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
