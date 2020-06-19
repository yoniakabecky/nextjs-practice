import * as React from "react";
import Layout from "../components/layout";
import SubPageHero2 from "../components/subPageGsap";

const Contact = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    const createForms = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7788527",
          formId: "69a66f1a-5ace-49ab-ae7b-1e768d0bb1b6",
        });
      }
    };

    script.addEventListener("load", createForms);
  }, []);

  return (
    <Layout>
      <SubPageHero2 title="Contact" subTitle="wanna talk?" />
    </Layout>
  );
};

export default Contact;
