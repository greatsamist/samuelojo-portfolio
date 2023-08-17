import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/greatsamuelojo"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://www.twitter.com/greatsamuelojo"
              target="_blank"
              rel="nofollow"
            >
              Twitter
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <ContactForm />
      </div>
    </section>
  );
};
