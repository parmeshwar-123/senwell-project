import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Box, Typography, Button } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import BimSmithImg from "../images/portfolio/BimSmithImg.png";
import agileCoaching from "../images/portfolio/agileCoaching.png";
import industrialMachine from "../images/portfolio/industrialMachine.png";
import mealPLanning from "../images/portfolio/mealPLanning.png";
import testingService from "../images/portfolio/testingService.png";
import waterPurify from "../images/portfolio/waterPurify.png";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  CaseStudies: {
    marginTop: "2rem",
  },
  bimsmithBlock: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  bimsmithPara: {
    textAlign: "left",
    maxWidth: "100%",
  },
  BtnWrapper: {
    margin: "20px 0px",
    display: "flex",
    justifyContent: "center",
  },
  Images: {
    maxWidth: "100%",
    height: "24rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      height: "13rem",
    },
  },
}));
export default function Portfolio() {
  const classes = useStyles();
  const industries = [
    { industry: "Banking & Finance" },
    { industry: "E-com & Retail" },
    { industry: "Education" },
    { industry: "Healthcare" },
    { industry: "Media & Entertainment" },
    { industry: "Social Networks" },
  ];
  const technologies = [
    { tech: "React" },
    { tech: "C#" },
    { tech: ".net" },
    { tech: "web-design" },
    { tech: "Angular" },
    { tech: "node.js" },
  ];
  const services = [
    { service: "Android" },
    { service: "Design" },
    { service: "Web" },
    { service: "Desktop" },
    { service: "ios" },
    { service: "Testing" },
  ];

  const portfolio = [
    {
      img: BimSmithImg,
      heading: "Bimsmith Analyatics",
      paragraph:
        "A powerful analytics tool that enables building product manufacturers to efficiently monitor their brand-wide traffic across all the services on the BIMsmith platform",
    },
    {
      img: agileCoaching,
      heading: "Agile Coaching for a Healthcare Digitization Project",
      paragraph:
        "Integration of Agile best practices and improving process efficiency on a healthcare technology project working on the digitization of documentation management processes in healthcare.",
    },
    {
      img: industrialMachine,
      heading: "Development a website for industrial machinery manufacturer",
      paragraph:
        "Our client is a leading global manufacturer that supplies high-quality machines to a wide range of industries, including aerospace, nuclear power, automotive, electronics, and many others.",
    },
    {
      img: mealPLanning,
      heading: "Development and testing services for Meal Planning Application",
      paragraph:
        "A social platform for people who love food and would like to create a positive relationship with their body.",
    },
    {
      img: testingService,
      heading: "Testing Services for Dashlane company",
      paragraph:
        "Dashlane is a leading user-friendly password manager and a secure digital wallet that provides a high level of protection and offers an effective solution to password fatigue.",
    },
    {
      img: waterPurify,
      heading:
        "Website Development for a Water Purification Technology Provider",
      paragraph:
        "Creating a modern, appealing website that conveys the company’s business value, attracts visitors, and converts them into customers.",
    },
  ];
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={industries}
              disableCloseOnSelect
              getOptionLabel={(option) => option.industry}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.industry}
                </React.Fragment>
              )}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Industries"
                  placeholder="Favorites"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={technologies}
              disableCloseOnSelect
              getOptionLabel={(option) => option.tech}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.tech}
                </React.Fragment>
              )}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Technologies"
                  placeholder="Favorites"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={services}
              disableCloseOnSelect
              getOptionLabel={(option) => option.service}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.service}
                </React.Fragment>
              )}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Services & solutions"
                  placeholder="Favorites"
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.CaseStudies}>
          {portfolio.map((testCases) => {
            return (
              <Grid item xs={12} sm={6}>
                <Box className={classes.bimsmithBlock}>
                  <div>
                    <img
                      className={classes.Images}
                      src={testCases.img}
                      alt=""
                      width={"100%"}
                      height={382}
                    />
                  </div>
                  <div>
                    <Typography variant="h4">{testCases.heading}</Typography>
                    <Typography className={classes.bimsmithPara}>
                      {testCases.paragraph}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <div className={classes.BtnWrapper}>
          <div className={classes.root}>
            <Pagination count={5} color="primary" />
          </div>
        </div>
      </Container>
    </>
  );
}
