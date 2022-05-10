import React from "react";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Person, PictureAsPdf } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
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
    height: "90%",
    borderBottom: "5px solid #fff",
    boxShadow: "2px 2px 10px 0px #bfb6b6",
    "&:hover": {
      boxShadow: "4px 4px 10px 0px #bfb6b6",
      borderBottom: "5px solid #2195d0bf",
    },
  },

  HiringIcon: {
    width: "45px",
    height: "45px",
    color: "blue",
    [theme.breakpoints.down("xs")]: {
      width: "35px",
      height: "35px",
      color: "blue",
    },
  },
  Pdf: {
    width: "45px",
    height: "45px",
    color: "blue",
    opacity: "0.2",
  },
  IconWithName: {
    display: "flex",
    alignItems: "center",
  },
  HiringPerson: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  SkillsAlignment: {
    margin: "0 0.5rem 0.6rem 0.5rem",
  },
  experianceBlock: {
    margin: "1rem 0 1rem 0.7rem",
  },
  NameBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
  mainWrapper: {
    padding: "5rem 1rem",
  },
  titleWrapper: {
    padding: "1rem 1rem 3rem 1rem",
    textAlign: "center",
    fontFamily: " 'Ubuntu', sans-serif",
  },
  gridWrapper: {
    marginBottom: "3rem",
  },
  requestButton: {
    padding: "0.4rem 2rem",
    color: "#2757a0",
    fontSize: "1rem",
    fontWeight: "700",
    backgroundColor: "#fff",
    borderRadius: "25rem",
    border: "3px solid #2757a0",
    marginTop: "2rem",
    "&:hover": {
      background:
        "linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)",
      color: "#fff",
      border: "3px solid #2757a0",
    },
  },
}));
const ReactHiring = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="xxl" style={{ background: "#fafafa" }}>
        <Container maxWidth="lg" className={classes.mainWrapper}>
          <Typography variant="h4" className={classes.titleWrapper}>
            Front-End Developers for Hire
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.gridWrapper}>
              <Box className={classes.jobList}>
                <Box className={classes.NameBlock}>
                  <span className={classes.IconWithName}>
                    <span>
                      <Person className={classes.HiringIcon} />
                    </span>
                    <h3 className={classes.HiringPerson}> Alexandr.k</h3>
                  </span>
                  <div>
                    <PictureAsPdf className={classes.Pdf} />
                  </div>
                </Box>
                <Box className={classes.experianceBlock}>
                  <Typography>Front-End Developer</Typography>
                  <Typography>2.5+ year of Experiance</Typography>
                </Box>

                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className={classes.Skills}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React Redux
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Yii
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Cake PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      ionic
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      css3
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      jQuery
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Typescript
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Javascript
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.gridWrapper}>
              <Box className={classes.jobList}>
                <Box className={classes.NameBlock}>
                  <span className={classes.IconWithName}>
                    <span>
                      <Person className={classes.HiringIcon} />
                    </span>
                    <h3 className={classes.HiringPerson}> Jambul.B</h3>
                  </span>
                  <div>
                    <PictureAsPdf className={classes.Pdf} />
                  </div>
                </Box>
                <Box className={classes.experianceBlock}>
                  <Typography>Senior Software Developer</Typography>
                  <Typography>5 year of Experiance</Typography>
                </Box>

                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className={classes.Skills}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React Redux
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Yii
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Cake PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      ionic
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      css3
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      jQuery
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Typescript
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Javascript
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.gridWrapper}>
              <Box className={classes.jobList}>
                <Box className={classes.NameBlock}>
                  <span className={classes.IconWithName}>
                    <span>
                      <Person className={classes.HiringIcon} />
                    </span>
                    <h3 className={classes.HiringPerson}> Konstantyn s.k</h3>
                  </span>
                  <div>
                    <PictureAsPdf className={classes.Pdf} />
                  </div>
                </Box>
                <Box className={classes.experianceBlock}>
                  <Typography>Front-End Developer</Typography>
                  <Typography>3 year of Experiance</Typography>
                </Box>

                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className={classes.Skills}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React Redux
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Yii
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Cake PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      ionic
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      css3
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      jQuery
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Typescript
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Javascript
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.gridWrapper}>
              <Box className={classes.jobList}>
                <Box className={classes.NameBlock}>
                  <span className={classes.IconWithName}>
                    <span>
                      <Person className={classes.HiringIcon} />
                    </span>
                    <h3 className={classes.HiringPerson}> Mykhailo h.</h3>
                  </span>
                  <div>
                    <PictureAsPdf className={classes.Pdf} />
                  </div>
                </Box>
                <Box className={classes.experianceBlock}>
                  <Typography>Front-End Developer</Typography>
                  <Typography>3 year of Experiance</Typography>
                </Box>

                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className={classes.Skills}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      React Redux
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Yii
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Cake PHP
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      ionic
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      css3
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      jQuery
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Typescript
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20%" }}
                      className={classes.SkillsAlignment}
                    >
                      Javascript
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Button className={classes.requestButton}>Request Specialists</Button>
        </Container>
      </Container>
    </>
  );
};

export default ReactHiring;
