import React from "react";
import Platform from "../../../assets/images/Specialization/Platform_Eng.jpg";
import Application from "../../../assets/images/Specialization/Application_Eng.jpg";
import SalesForce from "../../../assets/images/Specialization/SalesForce.png";
import Cyber from "../../../assets/images/Specialization/Cyber.png";
import "../services.scss";
import ApplicationSubContentCard from "./ApplicationSubContentCard";
import SalesForceSubContent from "./SalesForceSubContentCard";
import CyberSecuritySubContentCard from "./CyberSecuritySubContentCard";
import PlatformEngSubContentCard from "./PlatformEngSubContentCard";
import specializationsContent from "../../../common/content/specializations.json";

function Specializations() {
  return (
    <>
      <div className="container my-5 p-0">
        <div className="card border-0 text-white specialization-card">
          <img
            src={Platform}
            className="card-img img-fluid"
            alt={specializationsContent.platforms.alt}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title">{specializationsContent.platforms.title}</h5>
            <p className="card-text d-none d-md-block">
              {specializationsContent.platforms.description}
            </p>
          </div>
        </div>
      <PlatformEngSubContentCard />
      </div>

      <div className="container my-5 p-0">
        <div className="card border-0 text-white specialization-card">
          <img
            src={Application}
            className="card-img img-fluid"
            alt={specializationsContent.applications.alt}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title">{specializationsContent.applications.title}</h5>
            <p className="card-text d-none d-md-block">
              {specializationsContent.applications.description}
            </p>
          </div>
        </div>
      <ApplicationSubContentCard />
      </div>

      <div className="container my-5 p-0">
        <div className="card border-0 text-white specialization-card">
          <img
            src={SalesForce}
            className="card-img img-fluid"
            alt={specializationsContent.salesforce.alt}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title">{specializationsContent.salesforce.title}</h5>
            <p className="card-text d-none d-md-block">
              {specializationsContent.salesforce.description}
            </p>
          </div>
        </div>
      <SalesForceSubContent />
      </div>

      <div className="container my-5 p-0">
        <div className="card border-0 text-white specialization-card">
          <img
            src={Cyber}
            className="card-img img-fluid"
            alt={specializationsContent.cybersecurity.alt}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title">{specializationsContent.cybersecurity.title}</h5>
            <p className="card-text d-none d-md-block">
              {specializationsContent.cybersecurity.description}
            </p>
          </div>
        </div>
      <CyberSecuritySubContentCard />
      </div>
    </>
  );
}

export default Specializations;
