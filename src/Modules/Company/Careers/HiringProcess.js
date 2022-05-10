import React from "react";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { HiringWay } from "../../../images/images";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  HiringContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "5rem",
    paddingBottom: "4rem",
  },
  HiringBlock: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "37rem",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "none",
    },
  },
  hiredHeader: {
    margin: "0 10px 0 10px",
    color: "#000",
    fontFamily: "'Poppins', sans-serif",
  },
  hiredHeaderSerialNum: {
    margin: "0 10px 0 10px",
    color: "#3D8ED7",
    fontFamily: "'Poppins', sans-serif",
  },
  HiringWayBlock: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  accordian: {
    margin: "0 0 1rem 0",
    padding: "0.5rem 0rem",
    boxShadow: "0 0 11px rgba(33,33,33,.2)",
    backgroundColor: "none",
    "&::before": {
      backgroundColor: "none",
      height: "0px",
    },
    "&:hover": {},
  },
}));

const HiringProcess = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg" className={classes.HiringContainer}>
        <Box className={classes.HiringBlock}>
          <Box>
            <Typography
              variant="h4"
              style={{ fontFamily: " 'Ubuntu', sans-serif" }}
            >
              {" "}
              Our Hiring Process
            </Typography>
            <p
              style={{
                fontFamily: " 'Lora', serif",
                fontSize: "14px",
                paddingBottom: "1rem",
              }}
            >
              We respect our candidates and value their personal time, which is
              reflected in how we optimized our recruiting and hiring processes
              over time.
            </p>
          </Box>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<Add style={{ color: "#3D8ED7" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div>
                  <span className={classes.hiredHeaderSerialNum}>01</span>
                  <span className={classes.hiredHeader}>Send Your CV</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "'Poppins', sans-serif" }}>
                Apply for a job by sending us your CV or a link to your LinkedIn
                profile.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<Add style={{ color: "#3D8ED7" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <div>
                  <span className={classes.hiredHeaderSerialNum}>02</span>
                  <span className={classes.hiredHeader}>Initial Screening</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our recruiter will get back to you if your resume meets our
                requirements in order to introduce you to the role.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<Add style={{ color: "#3D8ED7" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <div>
                  <span className={classes.hiredHeaderSerialNum}>03</span>
                  <span className={classes.hiredHeader}>Job Interview</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "'Poppins', sans-serif" }}>
                You will meet a few of your potential colleagues to talk about
                your skills, background, and expectations in detail.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<Add style={{ color: "#3D8ED7" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <div>
                  <span className={classes.hiredHeaderSerialNum}>04</span>
                  <span className={classes.hiredHeader}>Test Task</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "'Poppins', sans-serif" }}>
                We’ll negotiate a small test task with you, if necessary.
                Depending on the project and position, this may be followed by
                an interview with our client.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<Add style={{ color: "#3D8ED7" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <div>
                  <span className={classes.hiredHeaderSerialNum}>05</span>
                  <span className={classes.hiredHeader}>You're Hired!</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "'Poppins', sans-serif" }}>
                By deciding we are a good match for each other, we’ll agree the
                terms of you starting your career at Senwell Solutions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className={classes.HiringWayBlock}>
          <img
            src={HiringWay}
            alt=""
            style={{ maxHeight: "27rem", marginLeft: "40%" }}
          />
        </Box>
      </Container>
    </>
  );
};

export default HiringProcess;
