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

const uiuxList = [
  { name: "Junior", count: 0 },
  { name: "Senior", count: 0 },
  { name: "Middle", count: 0 },
];

const devopsList = [
  { name: "Junior", count: 0 },
  { name: "Senior", count: 0 },
  { name: "Middle", count: 0 },
];

const projectManagerList = [
  { name: "Junior", count: 0 },
  { name: "Senior", count: 0 },
  { name: "Middle", count: 0 },
];

const businessAnalystList = [
  { name: "Junior", count: 0 },
  { name: "Senior", count: 0 },
  { name: "Middle", count: 0 },
];

const OtherSpecialist = () => {
  const [expanded, setExpanded] = useState(false);
  const [uiux, setUiux] = useState([]);

  const [devops, setDevops] = useState([]);

  const [projectManager, setProjectManager] = useState([]);
  const [businessAnalyst, setBusinessAnalyst] = useState([]);

  useEffect(() => {
    setUiux(uiuxList);
    setDevops(devopsList);
    setProjectManager(projectManagerList);
    setBusinessAnalyst(businessAnalystList);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  const inc = (state, setState, name) => {
    const selected = state.find((f) => f.name === name);
    const index = uiux.indexOf(selected);
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
      <h1 className={classes.heading}>04. Other Specialist</h1>
      <p className={classes.subHeading}>
        Are there any other specialists that can help you during the software
        development lifecycle?
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
            <Typography>UI/UX Designer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {uiux.map((tech, index) => {
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
                      onClick={() => dec(uiux, setUiux, tech.name)}
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() => inc(uiux, setUiux, tech.name)}
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
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              DevOps Engineers
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {devops.map((tech, index) => {
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
                      onClick={() => dec(devops, setDevops, tech.name)}
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() => inc(devops, setDevops, tech.name)}
                    />
                    <p className={classes.tech}>{tech.name}</p>
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Project Manager
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {projectManager.map((tech, index) => {
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
                        dec(projectManager, setProjectManager, tech.name)
                      }
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() =>
                        inc(projectManager, setProjectManager, tech.name)
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
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Business Analyst
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {businessAnalyst.map((tech, index) => {
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
                        dec(businessAnalyst, setBusinessAnalyst, tech.name)
                      }
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() =>
                        inc(businessAnalyst, setBusinessAnalyst, tech.name)
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

export default OtherSpecialist;
