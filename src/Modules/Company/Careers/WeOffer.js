import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { AiFillStar } from 'react-icons/ai';
import {FaAward} from 'react-icons/fa';
import {RiPlantLine} from 'react-icons/ri'
import {FaUserGraduate} from 'react-icons/fa'
import React from "react";

const useStyles= makeStyles((theme) =>({

    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
     
       [theme.breakpoints.up('xs')]: {
        padding:'0rem 2rem 0rem 2rem',
    },
    },
    icons:{
        width:'2rem',
      height:'50%',
      marginBottom:'14px',
      color:'#3D8ED7',
    } ,
    header:{
     padding:'4rem 2rem',
     [theme.breakpoints.down('xs')]: {
        padding:'4rem 1rem',
     }
    },
    title:{
      fontWeight:'700',
      padding:'3rem 0 2rem 0',
      paddingBottom:'3rem',
      fontFamily: " 'Ubuntu', sans-serif",

    },
    subtitle:{
      fontWeight:'700',
      fontFamily: " 'Ubuntu', sans-serif",

    },
    para:{
      lineHeight:'1.3rem',
      textAlign:'left',
      fontFamily: " 'Lora', serif",
      fontSize:'14px'
      
    }
}))

const WeOffer = () => {
    const classes= useStyles();
    
  return (
    <Container maxWidth='xxl' style={{background:'#f6f6f6'}}>
        <Container maxWidth="lg" className={classes.header}>
          <Typography variant="h4" className={classes.title}>We Offer</Typography>
          <Grid container className={classes.container} >
            <Grid xs={12} sm={6} md={3} lg={3}>
              <div className={classes.main} >
              <AiFillStar className={classes.icons} />
              <Typography variant="h6" className={classes.subtitle}>Dynamic career</Typography>              
                <p className={classes.para}>
                  Utilize your skills and grab opportunities to build a
                  successful career doing what you love.
                </p>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3} >
              <div className={classes.main}>
                  <RiPlantLine className={classes.icons}/>
                  <Typography variant="h6" className={classes.subtitle}>Personal growth</Typography> 
                <p className={classes.para}>  
                  Pursue your individual goals with a team that supports your
                  desire for self-refinement.
                </p>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <div className={classes.main}>
                  < FaUserGraduate className={classes.icons}/>
                  <Typography variant="h6" className={classes.subtitle}>Learning & mentorship</Typography> 
                <p className={classes.para}>
                  Improve your skills by working closely with experienced
                  professionals on diverse projects.
                </p>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <div className={classes.main}>
                  <FaAward className={classes.icons}/>
                  <Typography variant="h6" className={classes.subtitle}>Latest technologies</Typography> 
                <p className={classes.para}>
                  Face new challenges and implement your ideas using innovative
                  practices and technologies.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
    </Container>
  );
};

export default WeOffer;
