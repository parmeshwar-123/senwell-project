import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // display: "flex",
    maxWidth: "1080px",
    marginTop: "50px",
  },

  Text: {
    marginRight: "20px",
    marginBottom: "30px",
    width: "45%",
  },

  projectD: {
    display: "grid",
  },
  Btn: {
    width: "25px",
    width: "10rem",
    height: "42px",
    borderRadius: "40px",
    display:'inline-block',
    border:'1px solid #3D8ED7',
  },
  checkbox: {
    marginTop: "43px",
    marginBottom: "48px",
  },
  img: {
    marginLeft: "39%",
  },

  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  Image: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Number:{
    display:'inline-block',
    float: 'right',
    paddingRright: '10vh',
    marginTop:'-4px',
  },
  ENumber:{
    color: '#c6c6c6!important'
  },
  mainwrapper:{
    padding:'4rem 0rem',
  }
}));

const Form = () => {
  const classes = useStyles();
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("md"));

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth='full' style={{background:'#f6f6f6'}}>
      <Grid>
        <Container maxwidth="lg" className={classes.mainwrapper}>
          <Grid container>
            <Grid xs={12} sm={12} md={6} className={classes.Image}>
              <div className={classes.img}>
                {showText && <img src=''  />}
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <div>
                <h1 style={{ color: "#000" }}>Didn’t find a suitable position?</h1>
                <h1></h1>
                <div>
                  <TextField
                    className={classes.Text}
                    name
                    id="outlined-required"
                    label="Name*"
                    defaultValue=""
                  />
                  <TextField
                    className={classes.Text}
                    email
                    id="outlined-required"
                    label="Email*"
                    defaultValue=""
                  />
                </div>
                <div>
                  <TextField
                    className={classes.projectD}
                    id="standard-multiline-static"
                    label="Project Description*"
                    multiline
                    rows={2}
                    defaultValue=" "
                    variant="standard"
                  />
                </div>
                <div className={classes.checkbox}>
                  <Checkbox
                    checked={checked}
                    color="primary"
                    onChange={handleChange}
                    
                  />
                  <span>
                    I agree to the Senwells <Link to=""> Cookie Policy</Link> and{" "}
                    <Link to="">Privacy Policy</Link>*
                  </span>
                </div>
                <div className={classes.Button}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.Btn}
                  >
                    Submit
                  </Button>
                  <div className={classes.Number}>
                    <Link to=" " className={classes.ENumber}> business@senwellsys.com </Link>
                    <br />
                    <Link to="" className={classes.ENumber}>+1 310 388 93 34</Link>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
};

export default Form;
