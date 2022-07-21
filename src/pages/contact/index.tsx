import { contactFormURL, postRequest } from "api";
import { AxiosRequestConfig } from "axios";
import { ContactInfo, ContactUI, Preloader, Toast } from "components";
import * as React from "react";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [toast, setToast] = React.useState({
    type: false,
    title: "",
    text: "",
    show: false,
  });

  const submit = (data: ContactInfo) => {
    setLoading(true);
    const contact = new FormData();
    contact.append("entry.994487932", data.firstName);
    contact.append("entry.2005620554", data.lastName);
    contact.append("entry.308682794", data.workEmail);
    contact.append("entry.1065046570", data.companyName);
    contact.append("entry.839337160", data.message);

    const config: AxiosRequestConfig = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: contact
    };

    postRequest(contactFormURL(), contact, config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setToast({
            title: "Great!",
            text: "Your inquiry was submitted successful",
            type: true,
            show: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setToast({
          title: "Sorry",
          text: "Your inquiry failed to submit",
          type: false,
          show: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });

    // `entry.994487932=${contactInfo.firstName}&entry.2005620554=${contactInfo.lastName}&entry.308682794=${contactInfo.workEmail}&entry.1065046570=${contactInfo.companyName}&entry.839337160=${contactInfo.message}`,
  };
  return (
    <>
      <Toast {...toast} onHide={() => setToast({ ...toast, show: false })} />
      <Preloader loading={loading} />
      <ContactUI contact={submit} reset={reset} />
    </>
  );
};

export { Contact };
