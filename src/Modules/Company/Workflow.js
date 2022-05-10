import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Tab,
  Tabs,
  Grid,
} from "@material-ui/core";
import { Time } from "./WorkflowTabs";
import { Team } from "./WorkflowTabs";
import { Staff } from "./WorkflowTabs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  TabBox: {
    // borderBottom: '2px solid transparent',
  },
  OurServicesSectionWrappr: {
    background: "#f6f6f6",
    padding: "2rem 0rem",
  },
  OurServicesSectionTitle: {
    fontWeight: "700",
    paddingBottom: "3rem",
  },
  PrivateTabIndicatorColorSecondary15: {
    backgroundColor: "#000",
  },
  QualityfirstsectionParaWrapper: {
    color: "#000",
    lineHeight: "1.5rem",
    padding: "2rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem",
    },
  },
  QualityfirstsectionWrapper: {
    padding: "2rem 0rem",
    // fontFamily: " 'Lora', serif",
    fontFamily: "'Poppins', sans-serif",
  },
  QualityfirstsectionTitleWrapper: {
    padding: "2rem 0rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0rem",
    },
  },
  TextWrapper: {
    color: "#000",
    padding: "0rem 2rem",
    fontFamily: " 'Ubuntu', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));
const CustomWorkflow = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <>
      <Container maxWidth="xxl" className={classes.OurServicesSectionWrappr}>
        <Container className={classes.QualityfirstsectionWrapper} maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.QualityfirstsectionTitleWrapper}
            >
              <Typography variant="h4" className={classes.TextWrapper}>
                Start fast with senwell well-established processes!
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.QualityfirstsectionParaWrapper}
            >
              <p style={{ fontSize: "14px" }}>
                Here you can see our custom workflows for each engagement model.
                Regardless of the collaboration approach you choose, we aim to
                take less than two weeks from the initial request to the first
                line of code written by our developers.
              </p>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="lg"
          className={classes.OurServicesSectionContainer}
        >
          <Grid item xs={12}>
            <div className={classes.OurServicesTabWrapper}>
              <div data-aos="fade-up" data-aos-duration="2000">
                <Tabs
                  value={value}
                  onChange={handleTabs}
                  indicatorColor="primary"
                  style={{ borderBottom: "1px solid #c1baba" }}
                >
                  <Tab label="Time and material"> Time and material</Tab>
                  <Tab label="Technologies"> Technologies</Tab>
                  <Tab label="Industries"> Industries</Tab>
                </Tabs>
                <Container maxWidth="lg">
                  <TabPanel
                    value={value}
                    index={0}
                    className={classes.TabPanel}
                  >
                    {<Time />}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Team />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Staff />{" "}
                  </TabPanel>
                </Container>
              </div>
            </div>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
export default CustomWorkflow;
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
