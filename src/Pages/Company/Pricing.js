import React, { useState, useEffect } from "react";
import HeroBanner from "../HeroBannerText";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TeamCalculator from "./pricing/Team Calculator/TeamCalculator";
import ProjectCalculator from "./pricing/Project Calculator/ProjectCalculator";
import { createContext } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "2rem",
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },
  mainHeading: {
    display: "flex",
    flexDirection: "row",
    margin: "5rem 0px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
  heading: {
    fontSize: "32",
    color: "#1c1c1c",
    lineHeight: "44px",
    width: "30%",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      justifyContent: "flex-start",
    },
  },
  subHeading: {
    width: "70%",
    fontSize: "18px",
    lineHeight: "28px",
    "& p": {
      margin: "auto",
      width: "70%",
      fontSize: "18px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "flex-start",
    },
  },
}));

export const stepContext = createContext();

// const chooseModalData = [
//   {
//     title: "Team Calculator",
//     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident asperiores velit laborum alias repudiandae ullam? Reiciendis quia possimus blanditiis ratione provident non, ullam error voluptas ducimus, voluptatum aut officiis?",
//   },

//   {
//     title: "Project Calculator",
//     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident asperiores velit laborum alias repudiandae ullam? Reiciendis quia possimus blanditiis ratione provident non, ullam error voluptas ducimus, voluptatum aut officiis?",
//   },
// ];

const Pricing = () => {
  const [activeComp, setActiveComp] = useState("team");
  const [stepCount, setStepCount] = useState(1);
  const [pricingDetails, setPricingDetails] = useState([]);

  // console.log(pricingDetails);
  const classes = useStyles();
  const renderComponent = (step) => {
    switch (step) {
      case "team":
        return (
          <TeamCalculator
            setActiveComp={setActiveComp}
            activeComp={activeComp}
            stepCount={stepCount}
            setStepCount={setStepCount}
            pricingDetails={pricingDetails}
            setPricingDetails={setPricingDetails}
          />
        );

      case "project":
        return (
          <ProjectCalculator
            setActiveComp={setActiveComp}
            activeComp={activeComp}
            stepCount={stepCount}
            setStepCount={setStepCount}
            pricingDetails={pricingDetails}
            setPricingDetails={setPricingDetails}
          />
        );

      default:
        return <div>Not Found</div>;
    }
  };
  return (
    <>
      <HeroBanner />

      <Container maxWidth="md" className={classes.container}>
        <div className={classes.mainHeading}>
          <div className={classes.heading}>
            <h1>Pricing Models & Calculator</h1>
          </div>
          <div className={classes.subHeading}>
            <p>
              Choose a pricing model that fits your needs and approximate the
              cost of your work with Senwell Solutions. Let's get started!
            </p>
          </div>
        </div>
        <div>{renderComponent(activeComp)}</div>
      </Container>
    </>
  );
};

export default Pricing;
