import React from "react";
import AboutStyles from "./about.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SEO from "../../components/SEO/SEO";
import { useSelector } from "react-redux";

const About = () => {
  const { website } = useSelector((state) => state.getwebsitedetails);

  return (
    <>
      <SEO title="About - YOUR CHOOICE" />
      <Breadcrumb name="ABOUT" breadcrumbpath=" > About" auth="no" />
      <div className={`container-fluid ${AboutStyles.about}`}>
        <div className="container">
          <h2>YOUR CHOOICE</h2>
          <p>
            YOUR CHOOICE is a eCommerce plateform where you can find wholesale
            and retail products in good prices and discounts. We are USA based
            company and deliver our products all over USA. You can order a
            single product or in bulk we have stock ready to deliver. we have
            vast variaty in home & kitchen, home decor, bathroom, furniture
            category. Our location: {website?.address}. You can mail us on: {website?.email}. For any inquiry call
            now {website?.contactno}.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
