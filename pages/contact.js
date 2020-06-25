import * as React from "react";
import Layout from "../components/layout";
import SubPageHero2 from "../components/subPageGsap";
import HubspotForm from "react-hubspot-form";

const Contact = () => {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "//js.hsforms.net/forms/shell.js";
  //   document.body.appendChild(script);

  //   const createForms = () => {
  //     if (window.hbspt) {
  //       window.hbspt.forms.create({
  //         portalId: "7788527",
  //         formId: "69a66f1a-5ace-49ab-ae7b-1e768d0bb1b6",
  //       });
  //     }
  //   };

  //   script.addEventListener("load", createForms);
  // }, []);

  // https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formGuid

  return (
    <Layout>
      <SubPageHero2 title="Contact" subTitle="wanna talk?" />
      <HubspotForm
        portalId="7788527"
        formId="69a66f1a-5ace-49ab-ae7b-1e768d0bb1b6"
        loading={<div>Loading...</div>}
      />
    </Layout>
  );
};

export default Contact;
