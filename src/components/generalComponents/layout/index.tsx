import * as React from "react";
import { Footer } from "./footer";
import { NavBar } from "./navbar";
import { newsletterURL, postRequest } from "api";
import { Preloader } from "../preloader";
import { Toast } from "../toast";

const Layout = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [toast, setToast] = React.useState({
    type: false,
    title: "",
    text: "",
    show: false,
  });
  const submitNewsletter = (email) => {
    setLoading(true);
    postRequest(newsletterURL(), { email })
      .then((response) => {
        if (response.status === 200) {
          setToast({
            title: "Great!",
            text: "Your newsletter subscription is successful",
            type: response.data.success,
            show: true,
          });
          setReset(!reset);
          setTimeout(() => {
            setToast({
              type: false,
              title: "",
              text: "",
              show: false,
            });
          }, 3000);
        }
      })
      .catch((error) => {
        setToast({
          title: "Sorry",
          text: error.response.data.error,
          type: error.response.data.success,
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
      <NavBar />
      {children}
      <Footer submitNewsletter={submitNewsletter} reset={reset} />
    </>
  );
};

export { Layout };
