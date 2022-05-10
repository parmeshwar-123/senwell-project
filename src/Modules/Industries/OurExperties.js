import React from 'react'
import { makeStyles,Grid,Container, Typography} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    mainWrapper:{
        padding:'2rem 1rem',
    },
    title:{
       fontFamily: "'Ubuntu', sans-serif",
    },
    subtitle:{
        fontFamily: "'Ubuntu', sans-serif",
        padding:'1rem 0rem',
    },
    para:{
        fontFamily: "'Lora', serif",
        fontSize:'17px',
        // lineHeight:'1.2rem',

    }
}))
const OurExperties = ({OurExperties}) => {
    const classes =useStyles();
  return (
    <>
    <Container maxWidth='lg' className={classes.mainWrapper}> 
        {OurExperties.map((data)=><>
        <Grid container style={{justifyContent:'center'}}>
            <Grid items xs={12} sm={12} md={8} lg={8}>
                <Typography variant='h4' className={classes.title}>
                     Our Expertise
                </Typography>
                <Typography variant='h6' className={classes.subtitle}>{data.title} </Typography>
                <Typography className={classes.para}>{data.para}</Typography>
            </Grid>
        </Grid>
        </>)}
    </Container>
    </>
  )
}

export default OurExperties