import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import '../App.css'
const useStyles = makeStyles((theme) => ({
    mainWrapper:{
   background:'#fafafa',
   padding:'4rem',
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
  header: {
    display: "flex",
    
    flexDirection: "column",
    padding: "32px",
    height: "auto",
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
    fontFamily: "'Poppins', sans-serif",

    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  TestimonialParagraph: {
    color: '#1c1c1c',
    fontSize:'1.1rem',
    lineHeight:'1.5rem',
    textAlign:'justify',
    fontFamily: " 'Lora', serif",
    fontSize:'14px',
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
}));

function TestimonialsBlock({Testimonials}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
    <Container maxWidth='full' className={classes.mainWrapper}>
      <Container className={classes.TestimonialBlock}>
        <Box>
        <Typography variant="h4" style={{fontFamily: " 'Ubuntu', sans-serif"}}>Testimonials</Typography>
          <p className={classes.TestimonialParagraph}>
            We are proud of every single project we’ve completed for our
            clients. We’re happy that our code and thorough testing have helped
            our clients run their businesses and attract new customers every
            day.
          </p>
          <p className={classes.TestimonialParagraph}>
            Here’s what our clients have to say about our software development
            outsourcing services. We hope to see your name here in a couple of
            months as well!
          </p>
        
        </Box>

        <Box>
          <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
              <Typography variant="h6" style={{fontFamily: "'Poppins', sans-serif",fontSize:'14px',
}}>{Testimonials[activeStep].label}</Typography>
              <Box className={classes.testimonials}>
                <div>
                  <img
                    src={Testimonials[activeStep].img}
                    className={classes.img}
                    alt=""
                  />
                </div>
                <div>
                  <h5>{Testimonials[activeStep].name}</h5>
                  <h6>{Testimonials[activeStep].post}</h6>
                </div>
              </Box>
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

export default TestimonialsBlock;
