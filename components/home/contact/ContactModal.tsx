import { Modal } from "@/components/utils/Modal";
import styles from "./contactModal.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  message: string;
}

export const ContactModal = ({ isOpen, setIsOpen, message }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} position="center">
      <div className={styles.modalContent}>
        <h4>{message}</h4>
      </div>
    </Modal>
  );
};
