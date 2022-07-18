import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const ContactUI = () => {
  return (
    <section className={`siteWrapper ${styles.contactWrapper}`}>
      <h1 className={styles.ttl}>Get in touch</h1>
      <p className={styles.txt}>
        Interested in how Solarsoft can partner with your business using blockchain technology? Tell us about your
        business and we will get in touch.
      </p>
      <form className={styles.form}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Work Email" />
        <input type="text" placeholder="Your Company" />
        <textarea placeholder="What would you like to speak to us about?" />
        <Button className={styles.btn} type="light" onClick={() => {}}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export { ContactUI };
