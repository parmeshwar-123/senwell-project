import React, { useState } from "react";
import ChooseModal from "../ChooseModal";
import Services from "./Services";
import Platforms from "./Platforms";
import ProjectDuration from "../ProjectDuration";
import Scope from "./Scope";
import GetEstimate from "../GetEstimate";
import NextButton from "../NextButton";
import { Stepper, Step, StepLabel, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  container: {
    paddingBottom: "2rem",
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },
  mainHeading: {
    display: "flex",
    margin: "5rem 0px",
    alignItems: "center",
  },
  gridContainer: {
    display: "flex",
  },
  heading: {
    fontSize: "32",
    color: "#1c1c1c",
    lineHeight: "44px",
    width: "30%",
    fontFamily: "Poppins, sans-serif",
  },
  subHeading: {
    width: "70%",
    fontSize: "18px",
    lineHeight: "28px",
    "& p": {
      margin: "auto",
      width: "70%",
      fontSize: "18px",
    },
  },
  pricingMenu: {
    fontSize: "18px",
    lineHeight: "28px",
    counterIncrement: "calculator-counter",
    color: "#202020",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  stepper: {
    "& .MuiStepIcon-active": { color: "green !important" },
    "& .MuiStepIcon-completed": { color: "rgb(43,162, 222) !important" },
  },
});

const steps = [
  "Choose your Model",
  "Services",
  "Platforms",
  "Scope",
  "Project Duration",
  "Get Estimate",
];

const ProjectCalculator = ({
  setActiveComp,
  activeComp,
  stepCount,
  setStepCount,
  pricingDetails,
  setPricingDetails,
  chooseModalData,
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const getProjectsData = (data) => {
    setPricingDetails([...pricingDetails, data]);
  };

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ChooseModal
            setActiveComp={setActiveComp}
            activeComp={activeComp}
            chooseModalData={chooseModalData}
            getProjectsData={getProjectsData}
          />
        );
      case 1:
        return <Services />;
      case 2:
        return <Platforms />;
      case 3:
        return <Scope />;
      case 4:
        return <ProjectDuration />;
      case 5:
        return <GetEstimate />;
      default:
        return <div>Not Found</div>;
    }
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      return false;
    } else {
      setActiveStep(activeStep + 1);
      // actions.setTouched({});
      // actions.setSubmitting(false);
    }
  }
  function _handleBack(index) {
    setActiveStep(index - 1);
  }

  console.log(pricingDetails);
  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item sm={12} md={4}>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            orientation="vertical"
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>
                  <a
                    href={`#step-${index ? stepCount + index + 5 : 1}`}
                    className={classes.pricingMenu}
                    onClick={
                      activeStep + 5 >= stepCount + index + 5
                        ? () => _handleBack(index + 1)
                        : null
                    }
                  >
                    {label}
                  </a>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item sm={12} md={8}>
          <div>{_renderStepContent(activeStep)}</div>
          <NextButton
            next={_handleSubmit}
            label={isLastStep && "Get Estimate"}
            step={isLastStep}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCalculator;
