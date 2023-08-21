import React, { FormEvent, useState } from "react";
import styles from "./contactForm.module.scss";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ContactModal } from "./ContactModal";

export const ContactForm = () => {
  const [contactModalOpen, setIsContactModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result: EmailJSResponseStatus) => {
          setMessage("🎉🎉🎉 Message Sent!");
          setIsContactModalOpen(true);
          form.reset();
          setIsLoading(false);
        },
        (error) => {
          setMessage("Error occurred: Please contact samuelojo.dev@gmail.com");
          setIsContactModalOpen(true);
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <>
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
          <StandardButton disabled={isLoading} width="100%" type="submit ">
            Send
          </StandardButton>
        </Reveal>
      </form>
      <ContactModal
        message={message}
        isOpen={contactModalOpen}
        setIsOpen={setIsContactModalOpen}
      />
    </>
  );
};
