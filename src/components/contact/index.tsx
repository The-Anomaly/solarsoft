import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const initialFormState = {
  firstName: "",
  lastName: "",
  workEmail: "",
  companyName: "",
  message: "",
};

const ContactUI = () => {
  const [contactInfo, setContactInfo] = React.useState(initialFormState);

  const [errors, setErrors] = React.useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const validate = () => {
    const keys = Object.keys(contactInfo);
    let errorMsgs = { ...initialFormState };

    keys.map((key) => (contactInfo[key] === "" ? (errorMsgs[key] = "Required") : ""));
    setErrors(errorMsgs);

    if (keys.every((key) => errorMsgs[key] == "")) {
      return submit();
    }
  };

  const submit = () => {
    window.open(
      `https://docs.google.com/forms/u/0/d/e/1FAIpQLScIhflMBd0k2LRqGR_7kNU1RzEGpYOzbj3Frb7kjPBbDOKeXg/viewform?entry.994487932=${contactInfo.firstName}&entry.2005620554=${contactInfo.lastName}&entry.308682794=${contactInfo.workEmail}&entry.1065046570=${contactInfo.companyName}&entry.839337160=${contactInfo.message}`,
      "_blank",
    );

    setContactInfo(initialFormState);
  };

  return (
    <section className={`siteWrapper ${styles.contactWrapper}`}>
      <h1 className={styles.ttl}>Get in touch</h1>
      <p className={styles.txt}>
        Interested in how Solarsoft can partner with your business using blockchain technology? Tell us about your
        business and we will get in touch.
      </p>
      <form className={styles.form}>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="First Name"
            value={contactInfo.firstName}
            name={"firstName"}
            onChange={handleChange}
            required
          />
          <p className={styles.errorMessage}>{errors.firstName}</p>
        </div>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="Last Name"
            value={contactInfo.lastName}
            name={"lastName"}
            onChange={handleChange}
            required
          />
          <p className={styles.errorMessage}>{errors.lastName}</p>
        </div>
        <div className={styles.inputWrap}>
          <input
            type="email"
            placeholder="Work Email"
            value={contactInfo.workEmail}
            name={"workEmail"}
            onChange={handleChange}
            required
          />
          <p className={styles.errorMessage}>{errors.workEmail}</p>
        </div>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="Your Company"
            value={contactInfo.companyName}
            name={"companyName"}
            onChange={handleChange}
            required
          />
          <p className={styles.errorMessage}>{errors.companyName}</p>
        </div>
        <div className={styles.inputWrap}>
          <textarea
            placeholder="What would you like to speak to us about?"
            value={contactInfo.message}
            onChange={handleChange}
            name={"message"}
            required
          />
          <p className={styles.errorMessage}>{errors.message}</p>
        </div>

        <Button className={styles.btn} type="light" onClick={validate}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export { ContactUI };
