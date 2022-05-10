import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import SearchIcon from "@material-ui/icons/Search";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#fafafa",
  },
  mainWrapper: {
    background: "#fafafa",
    padding: "5rem 0rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "13.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: "#000",
    fontWeight: "500",
    [theme.breakpoints.up("lg")]: {
      fontWeight: "550",
      fontSize: theme.typography.pxToRem(20),
    },
  },
  Accordion: {
    marginBottom: "2rem",
    padding: "0.5rem 0rem",
    boxShadow: "0 0 11px rgba(33,33,33,.2)",
    backgroundColor: "none",
    "&::before": {
      backgroundColor: "none",
      height: "0px",
    },
    "&:hover": {},
  },
  pricingText: {
    color: "#274e99",
    fontWeight: "600",
    textDecoration: "underline",
  },
  Icons: {
    fontSize: theme.typography.pxToRem(30),
    padding: "0rem 1rem",
    color: "#274e99",
    [theme.breakpoints.up("lg")]: {},
  },
  AccordionDetails: {
    color: "#5a5a5a",
    padding: "1rem 0rem",
    fontSize: "17px",
    textAlign: "justify",
    fontWeight: "400",
  },
}));

const ImportantDetails = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container maxWidth="full" className={classes.mainWrapper}>
      <Container maxWidth="md">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={classes.Accordion}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel1" ? (
                <RemoveIcon className={classes.Icons} />
              ) : (
                <AddIcon className={classes.Icons} />
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              <AccountTreeIcon className={classes.Icons} />
            </Typography>
            <Typography variant="h1" className={classes.secondaryHeading}>
              What are your rates?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container maxWidth="md">
              <Typography className={classes.AccordionDetails}>
                Our rates average at $30 – $49 / hr depending on factors such as
                the preferred collaboration model, skill level of the
                specialists involved, and project duration.&nbsp;
                <br />
                <br />
                For your convenience, we have developed an easy-to-use{" "}
                <Link to="/pricing" className={classes.pricingText}>
                  pricing calculator
                </Link>
                . Have a project at hand? Try it out!
              </Typography>
            </Container>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className={classes.Accordion}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel2" ? (
                <RemoveIcon className={classes.Icons} />
              ) : (
                <AddIcon className={classes.Icons} />
              )
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              <LiveHelpIcon className={classes.Icons} />
            </Typography>
            <Typography className={classes.secondaryHeading}>
              How quickly will you be able to start on my project?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container maxWidth="md">
              <Typography>
                On average, it takes us 10 business days to launch a project.
                The timeline may be affected by the size of your project
                (requirements analysis, project estimation, and planning) as
                well as the number and availability of the required specialists.
                On complex, enterprise-level projects, the starting phase may
                take up to one month.
              </Typography>
            </Container>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className={classes.Accordion}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel3" ? (
                <RemoveIcon className={classes.Icons} />
              ) : (
                <AddIcon className={classes.Icons} />
              )
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              <SearchIcon className={classes.Icons} />
            </Typography>
            <Typography className={classes.secondaryHeading}>
              How do I know whether my project requires a Junior, Middle, or
              Senior engineer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container maxWidth="md">
              <Typography>
                Your choice of an engineer should depend on the role they are
                hired to perform on your project as well as the complexity and
                scale of the particular tasks they would need to complete.
                Obviously, senior and middle engineers possess far better coding
                skills and more knowledge accumulated along the way, but
                sometimes a junior specialist’s enthusiasm and curiosity about
                learning new things might provide your project with many new,
                interesting, unconventional ideas and solutions.
                <br />
                <br />
                To avoid any extra costs when hiring a specialist and have a
                clear understanding of what you’re actually paying for and why,
                read our
                <span>comprehensive guide</span>
                on Software Development Roles and Responsibilities in
                Outsourcing.
              </Typography>
            </Container>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className={classes.Accordion}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel4" ? (
                <RemoveIcon className={classes.Icons} />
              ) : (
                <AddIcon className={classes.Icons} />
              )
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              <MeetingRoomIcon className={classes.Icons} />{" "}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Who will handle the project management?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container maxWidth="md">
              <Typography>
                The project manager should be where most of your software
                development team is. If the majority of your team is located
                in-house, it’s best to keep project management in-house too.
                When going with outsourcing or staff augmentation services,
                however, you should always consider hiring a project manager
                from your vendor. Having a manager close to the team is key to
                efficient communication and high productivity.
                <br /> <br />
                <span>Learn more</span>
                about the pros and cons of In-house and Outsourced Project
                Management.
              </Typography>
            </Container>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          className={classes.Accordion}
        >
          <AccordionSummary
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}></Typography>
            <Typography className={classes.secondaryHeading}>
              Still have questions? We have answers!
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Container>
    </Container>
  );
};
export default ImportantDetails;
