import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  heading: {
    margin: "1rem 0px",
    fontSize: "32px",
    lineHeight: "44px",
  },
  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
  },
  accordianContainer: {
    margin: "5rem 0px",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  update: {
    margin: "0 1rem",
    fontSize: "16px !important",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer",
    padding: "1px 2px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  count: {
    fontSize: "20px",
  },
  tech: {
    fontSize: "20px",
  },
  accordion: {
    border: "none",
    margin: "1rem 0",
  },
});

const manualTesterList = [
  { name: "Junior", count: 0 },
  { name: "Middle", count: 0 },
  { name: "Senior", count: 0 },
];

const testingAutoList = [
  { name: "Junior", count: 0 },
  { name: "Middle", count: 0 },
  { name: "Senior", count: 0 },
];
const QAEngineers = ({ pricingDetails, setPricingDetails }) => {
  const [expanded, setExpanded] = useState(false);
  const [manualTester, setManualTester] = useState([]);

  const [testingAuto, setTestingAuto] = useState([]);

  useEffect(() => {
    setManualTester(manualTesterList);
    setTestingAuto(testingAutoList);
    console.log("QA", pricingDetails);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();
  const inc = (state, setState, name) => {
    const selected = state.find((f) => f.name === name);
    const index = state.indexOf(selected);
    selected.count = selected.count + 1;
    let data = state;
    data[index] = selected;
    setState([...data]);
  };

  const dec = (state, setState, name) => {
    const selected = state.find((f) => f.name === name);
    const index = state.indexOf(selected);
    selected.count =
      selected.count > 0 ? selected.count - 1 : (selected.count = 0);
    let data = state;
    data[index] = selected;
    setState([...data]);
  };
  return (
    <Container maxWidth="lg">
      <h1 className={classes.heading}>03. QA Engineers</h1>
      <p className={classes.subHeading}>
        We highly recommend testing every iteration of your project. For this,
        you’ll need a QA team.
      </p>
      <div className={classes.accordianContainer}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>Manual Testers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {manualTester.map((tech, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    className={classes.gridItem}
                  >
                    <RemoveIcon
                      className={classes.update}
                      onClick={() =>
                        dec(manualTester, setManualTester, tech.name)
                      }
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() =>
                        inc(manualTester, setManualTester, tech.name)
                      }
                    />
                    <p className={classes.tech}>{tech.name}</p>
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>Testing Automators</Typography>
            <hr />
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {testingAuto.map((tech, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    className={classes.gridItem}
                  >
                    <RemoveIcon
                      className={classes.update}
                      onClick={() =>
                        dec(testingAuto, setTestingAuto, tech.name)
                      }
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() =>
                        inc(testingAuto, setTestingAuto, tech.name)
                      }
                    />
                    <p className={classes.tech}>{tech.name}</p>
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default QAEngineers;
