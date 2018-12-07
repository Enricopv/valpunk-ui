import * as React from "react";
import Modal from "@material-ui/core/Modal";

interface ClickModalProps {
  openModal?: boolean;
  handleClose?: () => void;
  children?: (
    props: {
      modalStyle?: React.CSSProperties;
    }
  ) => React.ReactNode;
}

const ClickModal = ({ children, openModal, handleClose }: ClickModalProps) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={openModal}
      onClose={handleClose}
    >
      {children({
        modalStyle: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
          maxWidth: "80%",
          padding: 16,
          wordWrap: "normal"
        }
      })}
    </Modal>
  );
};

export default ClickModal;
