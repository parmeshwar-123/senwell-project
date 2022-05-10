import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./Styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div
      className="scroll-to-top"
      style={{ position: "fixed", bottom: "20px", right: "10px" }}
      data-aos="zoom-in"
    >
      {isVisible && (
        <div onClick={scrollToTop}>
          <div
            className="scrollbutton bounce animated"
            style={{ width: "50px", height: "50px" }}
          >
            <ExpandLessIcon className="button" style={{ fontSize: "2rem" }} />
          </div>
        </div>
      )}
    </div>
  );
}
