import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, discription }) => {
  return (
    <Helmet>
      <title>{title ? title : "YOUR CHOOICE"}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={discription ? discription : "YOUR CHOOICE"}
      />
    </Helmet>
  );
};

export default SEO;
