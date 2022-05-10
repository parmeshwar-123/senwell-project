import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ReadMore from "../Modules/ReadMore";

const useStyles = makeStyles((theme) => ({
    mainWrapper:{
   
   padding:'4rem  0rem 4rem 0rem',
   [theme.breakpoints.down("xs")]: {
    padding:'1rem',
  },
    },
  root: {
    
    [theme.breakpoints.up("lg")]: {
      maxWidth: "38vw",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "32vw",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.between(1768, 2000)]: {
      maxWidth: "27vw",
    },
    maxWidth: "40vw",
    flexGrow: 1,
  },
  industriesTitle:{
    
    fontFamily: " 'Ubuntu', sans-serif",
    [theme.breakpoints.up("md")]: {
    //   maxWidth: "40vw",
      padding:'0rem 5rem 1rem 0rem',
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    height: "auto",
    background:'#fafafa',
  },

  img: {
    height: "45px",
    marginRight: "1rem",
    borderRadius: "100%",
    width: "45px",
  },
  testimonials: {
  
    marginTop: "20px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  testimonialPagenation: {
    justifyContent: "center",
    background: "none",
    marginTop: "2rem",
  },
  TestimonialBlock: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  TestimonialParagraph: {
    // color: '#5a5a5a',
    // fontSize:'1.1rem',
    fontFamily: "'Lora', serif",
    fontSize:'14px',
    lineHeight:'1.2rem',
    textAlign:'justify',
    [theme.breakpoints.up("md")]: {
      maxWidth: "40vw",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "30vw",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "26vw",
    },
  },
  paragraph:{
    fontFamily: "'Lora', serif",
    fontSize:"14px",
    lineHeight:'1.2rem'

  }
}));

function IndustriesPartner({IndustriesPartner,IndustriesPartnerPara,IndusriesPartnertitle}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = IndustriesPartner.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
    <Container maxWidth='xxl' className={classes.mainWrapper}>
      <Container className={classes.TestimonialBlock}>
        <Box>
        <Typography variant='h4' className={classes.industriesTitle}>{IndusriesPartnertitle}</Typography>
          <p className={classes.TestimonialParagraph}>
           {IndustriesPartnerPara}
          </p>
        </Box>

        <Box>
          <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                
              <Box className={classes.testimonials}>
                <div>
                  <img
                    src={IndustriesPartner[activeStep].img}
                    className={classes.img}
                    alt=""
                  />
                </div>
                <div>
                  <h5>{IndustriesPartner[activeStep].title}</h5>
                
                </div>
              </Box>
              <p className={classes.paragraph}>{IndustriesPartner[activeStep].description}</p>

              
            </Paper>

            <MobileStepper
              className={classes.testimonialPagenation}
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <ArrowBackIcon/>
                  ) : (
                    <ArrowForwardIcon />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <ArrowForwardIcon />
                  ) : (
                    <ArrowBackIcon />
                  )}
                </Button>
              }
            />
          </div>
        </Box>
      </Container>
      </Container>
    </>
  );
}

export default IndustriesPartner
