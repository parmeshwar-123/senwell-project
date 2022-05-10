import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { time, team, staff } from "../../API/BusinessModelsApi";

const useStyles = makeStyles((theme) => ({
  TabContainer: {
    background: "#fff",
    padding: "1rem 1rem 2rem 1rem",
    boxShadow: "2px 2px 3px 1px rgb(0 0 0 / 5%)",
    marginTop: "3rem",
    margin: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 1rem 2rem 1rem",
    },
  },
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  srNo: {
    border: "1px solid #5a5a5a",
    borderRadius: "",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "35rem",
  },
  duration: {
    padding: "1rem",
    color: "#25539c",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontFamily: " 'Ubuntu', sans-serif",
    padding: "0.6rem 0rem",
  },
}));

const Time = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {time.map((data) => (
            <>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box className={classes.TabContainer}>
                  <div className={classes.flexBox}>
                    <p className={classes.srNo}>{data.srNo}</p>
                    <Typography className={classes.duration}>
                      {" "}
                      {data.duration}
                    </Typography>
                  </div>
                  <Typography variant="h6" className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list1}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list2}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list3}
                  </Typography>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export { Time };
const Team = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {team.map((data) => (
            <>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box className={classes.TabContainer}>
                  <div className={classes.flexBox}>
                    <p className={classes.srNo}>{data.srNo}</p>
                    <Typography className={classes.duration}>
                      {" "}
                      {data.duration}
                    </Typography>
                  </div>
                  <Typography variant="h6" className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list1}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list2}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list3}
                  </Typography>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export { Team };
const Staff = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {staff.map((data) => (
            <>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box className={classes.TabContainer}>
                  <div className={classes.flexBox}>
                    <p className={classes.srNo}>{data.srNo}</p>
                    <Typography className={classes.duration}>
                      {" "}
                      {data.duration}
                    </Typography>
                  </div>
                  <Typography variant="h6" className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list1}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list2}
                  </Typography>
                  <Typography
                    style={{ fontFamily: " 'Lora', serif", fontSize: "14px" }}
                  >
                    {data.list3}
                  </Typography>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export { Staff };
