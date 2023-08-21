import styles from "./projectmodal.module.scss";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { Modal } from "@/components/utils/Modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <img
        className={styles.modalImage}
        src={imgSrc}
        alt={`An image of the ${title} project.`}
      />
      <div className={styles.modalContent}>
        <h4>{title}</h4>
        <div className={styles.modalTech}>{tech.join(" - ")}</div>

        <div className={styles.suppliedContent}>{modalContent}</div>

        <div className={styles.modalFooter}>
          <p className={styles.linksText}>
            Project Links<span>.</span>
          </p>
          <div className={styles.links}>
            {code ? (
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub /> source code
              </Link>
            ) : null}
            <Link target="_blank" rel="nofollow" href={projectLink}>
              <AiOutlineExport /> live project
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};
