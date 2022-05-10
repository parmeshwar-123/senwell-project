import React from "react";
import { Container, Grid, TextField, Box } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { Person, ArrowForward, LocationOn } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  hiringHeading: {
    // fontWeight: "bold",
    fontFamily: "'Poppins', sans-serif",
  },
  hiringParagraph: {
    // fontSize: "20px",

    fontFamily: " 'Lora', serif",
    fontSize: "14px",
  },
  jobLocation: {
    display: "flex",
    margin: "1rem 0 0 0",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  jobList: {
    backgroundColor: "#fafafa",
    padding: "1rem",
    margin: "12px",
    height: "80%",
    borderBottom: "4px solid #fafafa",
    boxShadow: "1px 1px 10px 0px #bfb6b6",
    "&:hover": {
      borderBottom: "4px solid #2191cd",
    },
  },
  designation: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "'Poppins', sans-serif",
  },
  location: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  designationLocation: {
    display: "flex",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  cities: {
    margin: "0 3px 10px 3px",
    padding: "4px 10px 4px 10px",
    boxShadow: "3px 3px 5px -1px #94a4ba",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",

    backgroundColor: "#eeeeee",

    borderRadius: "10px",
  },
  workingCity: {
    margin: "0 3px 0 3px",
    fontSize: "15px",
    fontWeight: "600",
  },
  MainWrapper: {},
}));
const HiringPage = () => {
  const [value, setValue] = React.useState(null);
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ];
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: top100Films.map((option) => option.title),
  };

  const classes = useStyle();

  return (
    <>
      <Container
        maxWidth="lg"
        style={{ marginTop: "5rem", paddingBottom: "5rem" }}
      >
        <Grid container>
          <Grid itemxs={12} sm={12} md={6} style={{ marginTop: "2rem" }}>
            <h2 className={classes.hiringHeading}>We are hiring</h2>
            <p className={classes.hiringParagraph}>
              Find a job opening that matches your qualifications and send us
              your CV
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.MainWrapper}>
            <Autocomplete
              {...defaultProps}
              id="select-on-focus"
              selectOnFocus
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="choose position"
                  margin="normal"
                />
              )}
            />

            <Box className={classes.jobLocation}>
              <span className={classes.cities}>cherkasy</span>
              <span className={classes.cities}>kharkiv</span>
              <span className={classes.cities}>kyiv</span>
              <span className={classes.cities}>Lviv</span>
            </Box>
            <hr />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.jobList}>
              <div className={classes.designation}>
                <h3>Event Manager</h3>
                <Person style={{ width: "45px", height: "45px" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                Senwell Solutions invites a Junior Event Manager to join our
                team.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <div style={{ display: "flex" }}>
                  <LocationOn
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#3D8ED7",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  />
                  <div className={classes.designationLocation}>
                    <span className={classes.workingCity}>cherkasy</span>
                    <span className={classes.workingCity}>kharkiv</span>
                    <span className={classes.workingCity}>kyiv</span>
                    <span className={classes.workingCity}>Lviv</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ color: "#3D8ED7" }}>learn more</h6>
                  <span>
                    <ArrowForward
                      style={{
                        width: "40px",
                        height: "25px",
                        color: "#3D8ED7",
                      }}
                    />
                  </span>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.jobList}>
              <div className={classes.designation}>
                <h3>C# developer</h3>
                <Person style={{ width: "45px", height: "45px" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are looking for C# developer.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  <LocationOn
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#3D8ED7",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  />
                  <div className={classes.designationLocation}>
                    <span className={classes.workingCity}>cherkasy</span>
                    <span className={classes.workingCity}>kharkiv</span>
                    <span className={classes.workingCity}>kyiv</span>
                    <span className={classes.workingCity}>Lviv</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ color: "#3D8ED7" }}>learn more</h6>
                  <span>
                    <ArrowForward
                      style={{
                        width: "54px",
                        height: "25px",
                        color: "#3D8ED7",
                      }}
                    />
                  </span>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.jobList}>
              <div className={classes.designation}>
                <h3>Golang Developer (middle)</h3>
                <Person style={{ width: "40px", height: "45px" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are looking for a middle Golang Engineer..
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  <LocationOn
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#3D8ED7",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  />
                  <div className={classes.designationLocation}>
                    <span className={classes.workingCity}>cherkasy</span>
                    <span className={classes.workingCity}>kharkiv</span>
                    <span className={classes.workingCity}>kyiv</span>
                    <span className={classes.workingCity}>Lviv</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ color: "#3D8ED7" }}>learn more</h6>
                  <span>
                    <ArrowForward
                      style={{
                        width: "40px",
                        height: "25px",
                        color: "#3D8ED7",
                      }}
                    />
                  </span>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.jobList}>
              <div className={classes.designation}>
                <h3>Golang developer</h3>
                <Person style={{ width: "45px", height: "45px" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are looking for a Senior Golang Engineer to take a key role
                in creating a new category in the health tech space – the
                digital assistant.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  <LocationOn
                    style={{ width: "30px", height: "30px", color: "#3D8ED7" }}
                  />
                  <div className={classes.designationLocation}>
                    <span className={classes.workingCity}>cherkasy</span>
                    <span className={classes.workingCity}>kharkiv</span>
                    <span className={classes.workingCity}>kyiv</span>
                    <span className={classes.workingCity}>Lviv</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ color: "#3D8ED7" }}>learn more</h6>
                  <span>
                    <ArrowForward
                      style={{
                        width: "40px",
                        height: "25px",
                        color: "#3D8ED7",
                      }}
                    />
                  </span>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.jobList}>
              <div className={classes.designation}>
                <h3>Middle Golang and/or C/C++ Developer</h3>
                <Person style={{ width: "45px", height: "45px" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are looking for Middle Golang and/or C/C++ Developer..
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  <LocationOn
                    style={{ width: "30px", height: "30px", color: "#3D8ED7" }}
                  />
                  <div className={classes.designationLocation}>
                    <span className={classes.workingCity}>cherkasy</span>
                    <span className={classes.workingCity}>kharkiv</span>
                    <span className={classes.workingCity}>kyiv</span>
                    <span className={classes.workingCity}>Lviv</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ color: "#3D8ED7" }}>learn more</h6>
                  <span>
                    <ArrowForward
                      style={{
                        width: "40px",
                        height: "25px",
                        color: "#3D8ED7",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </span>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.jobList}>
              <div className={classes.designation}>
                <h3>Cloud Software Engineer</h3>
                <Person style={{ width: "45px", height: "45px" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are looking for Cloud Software Engineer..
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <div style={{ display: "flex" }}>
                  <LocationOn
                    style={{
                      width: "40px",
                      height: "25px",
                      color: "#3D8ED7",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  />
                  <div className={classes.designationLocation}>
                    <span className={classes.workingCity}>cherkasy</span>
                    <span className={classes.workingCity}>kharkiv</span>
                    <span className={classes.workingCity}>kyiv</span>
                    <span className={classes.workingCity}>Lviv</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6
                    style={{
                      color: "#3D8ED7",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    learn more
                  </h6>
                  <span>
                    <ArrowForward
                      style={{
                        width: "40px",
                        height: "25px",
                        color: "#3D8ED7",
                      }}
                    />
                  </span>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HiringPage;
