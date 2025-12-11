import React from "react";
import homeBg from "../../../assets/images/web_bg.jpg";
import NavBar from "../navBar/NavBar";
import "./header.scss";
import content from "../../../common/content/content.json"; // Adjust path as necessary
import { useLocation } from "react-router-dom";
import { elementIds } from "../../../constants";

function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#0B0B0B",
  };

  const { mainHeading, subHeadings } = content.home;

  const location = useLocation();  
  const isSeparatePage = location.pathname && location.pathname !== "/";

  return (
    <div style={isSeparatePage ? {} : backgroundStyle} id={elementIds.home}>
      <NavBar isSeparatePage={isSeparatePage} />
      {!isSeparatePage && <div className="h-75 d-flex flex-column justify-content-center text-center text-light px-4">
        <h1 className="fw-bold mb-4 main-heading">{mainHeading}</h1>
        <div className="subheadings">
          {subHeadings.map((subHeading, index) => (
            <React.Fragment key={index}>
              {subHeading}
              {index < subHeadings.length - 1 && (
                <span className="separator"> | </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>}
    </div>
  );
}

export default Header;
