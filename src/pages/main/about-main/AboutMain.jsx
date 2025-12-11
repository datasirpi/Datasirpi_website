import React, { useEffect, useState } from "react";
import "./about.scss"; // Custom styles for the About section
import logo from "../../../assets/images/Logo/dsweb_logo.png";
import contentData from "../../../common/content/content.json";
import WhatWeDo from "./WhatWeDo";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { elementIds, routesPath } from "../../../constants";

function AboutMain() {
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(contentData?.about);
  }, []);

  return (
    <>
      <div id={elementIds.about} className="d-flex flex-column align-items-center text-center mt-5">
        <h2 className="about-heading fw-bold">
          {content.title}{" "}
          <img src={logo} alt="Logo" className="responsive-logo" />
        </h2>
        <p className="about-description text-muted">{content.description}</p>
        <div className="mt-4">
          <Link to={routesPath.about} className="ds-btn">
            <span>{content.buttonText} <BsArrowUpRight strokeWidth={1} size={16} /></span>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-5 pt-4">
        <WhatWeDo />
      </div>
    </>
  );
}

export default AboutMain;
