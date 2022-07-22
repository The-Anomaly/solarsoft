import { contactFormURL, postRequest } from "api";
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
    const contact = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.workEmail,
      company: data.companyName,
      inquiry: data.message,
    };

    postRequest(contactFormURL(), contact)
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          setToast({
            title: "Great!",
            text: "Your inquiry was submitted successful",
            type: true,
            show: true,
          });
          setReset(!reset);
        } else {
          setToast({
            title: "Sorry",
            text: "Your inquiry failed to submit",
            type: false,
            show: true,
          });
        }
      })
      .catch((error) => {
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
