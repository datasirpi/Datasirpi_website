import React from "react";
import "./services.scss";
import Specializations from "./specialization/Specializations";
import AccreditationCard from "./accreditation/AccreditationCard";
import OurPartnership from "./our-partnership/OurPartnership";
import OurClients from "./our-clients/OurClients";
import { elementIds } from "../../constants";

function Services() {
  return (
    <>
      <div id={elementIds.services} className="d-flex flex-column align-items-center mt-5 pt-4">
        <h3 className="fw-bold">Our Specializations</h3>
        <div className="w-100">
            <Specializations />
            <AccreditationCard />
            <OurClients />
            <OurPartnership />
        </div>
      </div>
    </>
  );
}

export default Services;
