import React, { FormEvent } from "react";
import styles from "./contactForm.module.scss";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactForm = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <Reveal width="100%">
        <label className={styles.label} htmlFor="name">
          Name
        </label>
      </Reveal>
      <Reveal width="100%">
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </Reveal>
      <Reveal width="100%">
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </Reveal>
      <Reveal width="100%">
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </Reveal>
      <Reveal width="100%">
        <label className={styles.label} htmlFor="message">
          Message
        </label>
      </Reveal>
      <Reveal width="100%">
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Your message"
          required
        />
      </Reveal>
      <Reveal width="100%">
        <StandardButton width="100%" type="submit ">
          Send
        </StandardButton>
      </Reveal>
    </form>
  );
};

export default ContactForm;
