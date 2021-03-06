import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

export interface ContactInfo {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  message: string;
}

const initialFormState: ContactInfo = {
  firstName: "",
  lastName: "",
  workEmail: "",
  companyName: "",
  message: "",
};

interface ContactProps {
  contact: (data: ContactInfo) => void;
  reset: boolean;
}

const ContactUI: React.FC<ContactProps> = ({ contact, reset }) => {
  const [contactInfo, setContactInfo] = React.useState<ContactInfo>(initialFormState);
  const [errors, setErrors] = React.useState<ContactInfo>(initialFormState);

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

    if (keys.every((key) => errorMsgs[key] === "")) {
      return submit();
    }
  };

  const submit = () => {
    contact(contactInfo);
  };

  React.useEffect(() => {
    setContactInfo(initialFormState);
  }, [reset]);

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
