import React from "react";
import { Container, Grid,Typography } from "@material-ui/core";
import {Enjoy }from "../../../images/images";
import {barbeq}from "../../../images/images";
import {halloween} from "../../../images/images";
import {Neture} from "../../../images/images";
import { makeStyles } from "@material-ui/core";
import './styles.css'
const useStyles = makeStyles((theme) => ({
  mainContainer:{
    padding:'6rem 0rem',
    background:'#f6f6f6',
  },
  ImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },

  container: {
    border: "1px solid #3D8ED7",
  },

  subtitle: {
    padding: '1rem',
    fontFamily: " 'Lora', serif",
    fontSize:'14px'
    
  },
  overlaytitle: {
    padding: '1rem',
    color: '#fff',
    fontFamily: " 'Lora', serif",
    fontSize:'14px'
    
  },
  Details:{
    color:'white',
    padding:'1rem',
},
 MainRoot:{
     backgroundColor:'black',
     padding:'2rem 0rem',   
 },
 StatusInformation:{
   paddingTop:'1rem',
 },
 
 title:{
  fontFamily: " 'Ubuntu', sans-serif",

 },
 para:{
  fontFamily: " 'Lora', serif",
  fontSize:'14px'
  
 }
}));

const Growth = () => {
  const classes = useStyles();
  return (
      <>
    <div className={classes.mainContainer}>
      <Grid>
        <Container maxWidth="lg">
          <div className={classes.mainWrapper}>
            <Typography variant='h4' className={classes.title}>We ensure your growth</Typography>
            <div >
              <p className={classes.para}>
                Immerse yourself in an environment of exciting challenges and
                long-term career opportunities.
              </p>
            </div>
          </div>
          <Grid container style={{justifyContent:'center'}}>
            <Grid xs={12} sm={4} md={4} lg={4} >
              <div className='growthcontainer'>
                <h4 className={classes.subtitle}>People-first culture</h4>

                <div className="growthoverlay">
                  <h4 className={classes.overlaytitle}>People-first culture</h4>
                  <p className={classes.para}>We care about our employees and commit ourselves to providing transparent communication and real feedback opportunities.</p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={3} md={3} lg={3} className={classes.container}>
              <div className={classes.ImageWrapper}>
                <img src={Enjoy} alt="images" className={classes.Image}></img>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} className={classes.container}>
              <div className='growthcontainer'>
                <h4 className={classes.subtitle}>Challenging projects</h4>
                <div className="growthoverlay">
                  <h4 className={classes.overlaytitle}>Challenging projects</h4>
                  <p className={classes.para}>
                    We make sure that every new project presents you with an
                    opportunity to develop your skills and get value out of
                    experiences.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} className={classes.container}>
              <div className={classes.ImageWrapper}>
                <img src={barbeq} alt="images" className={classes.Image}></img>
              </div>
            </Grid>
            <Grid xs={12} sm={3} md={3} lg={3} className={classes.container}>
              <div className="growthcontainer">
                <h4 className={classes.subtitle}>Mentorship & education</h4>
                <div className="growthoverlay">
                  <h4 className={classes.overlaytitle}>Mentorship & education</h4>
                  <p className={classes.para}>
                    Our Senior-level experts will proactively help you learn and
                    stay up to date with the latest technologies and approaches.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} className={classes.container}>
              <div className={classes.ImageWrapper}>
                <img
                  src={halloween}
                  alt="images"
                  className={classes.Image}
                ></img>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} className={classes.container}>
              <div className="growthcontainer">
                <h4 className={classes.subtitle}>Personal development</h4>
                <div className="growthoverlay">
                  <h4 className={classes.overlaytitle}>Personal development</h4>
                  <p className={classes.para}>
                    We support your personal growth by covering the expenses of
                    language courses, professional certifications, conferences, and more.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={3} md={3} lg={3} className={classes.container}>
              <div className={classes.ImageWrapper}>
                <img src={Neture} className={classes.Image}></img>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} className={classes.container}>
              <div className="growthcontainer">
                <h4 className={classes.subtitle}>Focus on long-term careers</h4>
                <div className="growthoverlay">
                  <h4 className={classes.overlaytitle}>Focus on long-term careers</h4>
                  <p className={classes.para}>
                    We care about your career aspirations and do our best to provide you
                    with the experience and opportunities you expect.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
    <Grid className={classes.MainRoot}>
        <Container maxWidth="lg" >
          <Grid container className={classes.StatusInformatio}>
            <Grid xl={12} sm={4} md={4} lg={4} className={classes.StatusInformation}>
             <div className={classes.Details}>
              <h2 className={classes.heading}>800+</h2>
              <Typography variant="h6" className={classes.para}>Completed projects</Typography>
              <p className={classes.para}>
                19+ years of working on exciting projects to ensure the
                engagement and development of our engineers.
              </p>
              </div>
            </Grid>
            <Grid xl={12} sm={4} md={4} lg={4} className={classes.StatusInformation}>
            <div className={classes.Details}>
              <h2 className={classes.heading}>280+</h2>
              <Typography variant="h6" className={classes.para}>Dedicated experts</Typography>
              <p className={classes.para}>
                Join a diverse team of experienced professionals with broad
                skills and knowledge in various domains.
              </p>
              </div>
            </Grid>
            <Grid xl={12} sm={4} md={4} lg={4} className={classes.StatusInformation}>
            <div className={classes.Details}>
              <h2 className={classes.heading}>87%</h2>
              <Typography variant="h6" className={classes.para}>Employee satisfaction</Typography>
              <p className={classes.para}>
                We help our employees build thriving, long-term careers. 40% of
                our team has been with us for 5+ years!
              </p>
            </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
</>
    
  );
};

export default Growth;
