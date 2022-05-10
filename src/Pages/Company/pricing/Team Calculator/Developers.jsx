import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { setDeveloper } from "../../../../redux";
import { connect } from "react-redux";

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
    margin: "3rem 0px 6rem",
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
    padding: "2px 2px",
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

const frontEndList = [
  { name: "Javascript", count: 0 },
  { name: "Vue", count: 0 },
  { name: "Angular", count: 0 },
  { name: "TypeScript", count: 0 },
  { name: "React", count: 0 },
  { name: "HTMLCSS", count: 0 },
];

const backEndList = [
  { name: "Java", count: 0 },
  { name: "Python", count: 0 },
  { name: "C#", count: 0 },
  { name: ".NET", count: 0 },
  { name: "PHP", count: 0 },
  { name: "Node.js", count: 0 },
  { name: "MongoDB", count: 0 },
  { name: "MySQL", count: 0 },
  { name: "PostgreSQL", count: 0 },
];

const mobileList = [
  { name: "React Native", count: 0 },
  { name: "iOS", count: 0 },
  { name: "Android", count: 0 },
  { name: "Swift", count: 0 },
];

const databaseList = [
  { name: "MySQL", count: 0 },
  { name: "Oracle", count: 0 },
  { name: "PostgreSQL", count: 0 },
  { name: "NoSQL", count: 0 },
  { name: "Amazon Cloud", count: 0 },
];

const Developers = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [developersData, setDevelopersData] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();
  // console.log("sdfsf", frontEndList);

  const [frontEnd, setFrontEnd] = useState([]);
  const [backEnd, setBackEnd] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [database, setDatabase] = useState([]);

  const [allData, setAllData] = useState();

  useEffect(() => {
    setFrontEnd(frontEndList);
    setBackEnd(backEndList);
    setMobile(mobileList);
    setDatabase(databaseList);
  }, []);
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

  useEffect(() => {
    setDevelopersData([...developersData, frontEnd]);
    setDevelopersData([...developersData, backEnd]);
    setDevelopersData([...developersData, mobile]);
    setDevelopersData([...developersData, database]);
    setAllData([frontEnd, backEnd, mobile, databaseList]);
  }, []);

  // useEffect(() => {
  //   props.setDeveloper(developersData);
  // }, []);

  // // debugger;
  // useEffect(() => {
  //   setDevelopersData([...developersData, frontEnd]);
  // }, [frontEnd]);

  // useEffect(() => {
  //   getDevelopersData(developersData);
  // }, [nextClick]);

  const collectData = (arr) => {
    setAllData(arr);
    setDeveloper(arr);
    console.log("prm", allData);
    console.log("arr", arr);
  };

  return (
    <Container maxWidth="lg">
      <h1 className={classes.heading}>02. Developers</h1>
      <p className={classes.subHeading}>
        Assemble a perfect team that covers all the tech stacks for your
        project.
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
            <Typography>Front-End Developer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {frontEnd.map((tech, index) => {
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
                      onClick={() => {
                        dec(frontEnd, setFrontEnd, tech.name);
                        collectData(frontEnd);
                      }}
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() => {
                        inc(frontEnd, setFrontEnd, tech.name);
                        collectData([frontEnd, backEnd, mobile, databaseList]);
                      }}
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
              Back-End Developer
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {backEnd.map((tech, index) => {
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
                      onClick={() => {
                        dec(backEnd, setBackEnd, tech.name);
                        collectData(backEnd);
                      }}
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() => {
                        inc(backEnd, setBackEnd, tech.name);
                        collectData(backEnd);
                      }}
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
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Mobile</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {mobile.map((tech, index) => {
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
                      onClick={() => dec(mobile, setMobile, tech.name)}
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() => inc(mobile, setMobile, tech.name)}
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
              Database
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {database.map((tech, index) => {
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
                      onClick={() => dec(database, setDatabase, tech.name)}
                    />

                    <p className={classes.count}>{tech.count}</p>
                    <AddIcon
                      className={classes.update}
                      onClick={() => inc(database, setDatabase, tech.name)}
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

const mapStateToProps = (state) => {
  return {
    developersData: state.developersData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDeveloper: function (developersData) {
      dispatch(setDeveloper(developersData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
