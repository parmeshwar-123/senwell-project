import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Box } from "@material-ui/core";
import Slider from "@mui/material/Slider";
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
  slider: {
    margin: "2rem 0",
    textAlign: "center",
  },
});

const ProjectDuration = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <Container maxWidth="lg">
      <h1 className={classes.heading}>05. Project Duration</h1>
      <p className={classes.subHeading}>
        How long do you expect to be working with your team?
      </p>
      <Box className={classes.slider}>
        <Typography id="non-linear-slider" gutterBottom>
          Month: {value}
        </Typography>
        <Slider
          value={value}
          min={1}
          step={1}
          max={12}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>
    </Container>
  );
};

export default ProjectDuration;
