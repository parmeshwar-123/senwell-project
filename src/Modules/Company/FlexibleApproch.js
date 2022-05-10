import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Container, Typography, Grid } from '@material-ui/core'
import {flexibleApproch} from '../../API/BusinessModelsApi'

const useStyles = makeStyles((theme) => ({
    QualityfirstsectionParaWrapper: {
        color: '#5a5a5a',
        lineHeight: '1.5rem',
        padding: '2rem 4rem',
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem 1rem',
        },

    },
    QualityfirstsectionTitleWrapper:{
        [theme.breakpoints.up('sm')]: {
            padding: '3rem 2rem',
        },
    },
    QualityfirstsectionWrapper: {
        padding: '4rem 0rem',
    },
    TextWrapper: {
    
        color: '#1c1c1c',
        padding: '0rem 2rem',
        fontFamily: " 'Ubuntu', sans-serif",
    },
    subtitle:{
        fontFamily: " 'Lora', serif",
        fontSize:'14px'    },
    QualitysecondsectionWrapper: {
        color: '#',
        paddingRight: '2rem',
      },
     
      titleText: {
        fontFamily: " 'Ubuntu', sans-serif",
      },
      QualitysecondsectionParaWrapper: {
        padding: '0rem 2rem',
        fontFamily: " 'Lora', serif",
        fontSize:'14px',

       margin:'1rem', 
       [theme.breakpoints.down('xs')]: {
        padding: '0rem 0.2rem',
        margin:'0.5rem', 
    },
    
      },
      paraText: { 
        color: '#000',
        fontWeight: '700',
        
      },
      Paracontainer: {
        color: '#000',
    
      },
      Paracontainertext: {
        textAlign: 'left',
        fontFamily: " 'Lora', serif",
        fontSize:'14px'
      },
      listwrapper:{
        margin:0,
        padding:'1rem',
      },
      list:{
       color:'#1c1c1c',
       fontWeight:'500',
       fontFamily: " 'Lora', serif",
       fontSize:'14px', 
       padding:'0.4rem 0rem',
        },
     
}))

const FlexibleApproch = () => {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth='xxl' style={{background:'#f6f6f6'}}>
            <Container className={classes.QualityfirstsectionWrapper} maxWidth='lg'>
                <Grid container style={{borderBottom:'1px solid #7a7a7a'}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionTitleWrapper}>
                        <Typography variant='h4' className={classes.TextWrapper}>Flexible approaches to project development</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionParaWrapper}>
                        <p style={{fontFamily: " 'Lora', serif",fontSize:'14px'}} >We are experts in numerous traditional and Agile software development methodologies. We will carefully analyze your project requirements and help you choose the most cost-efficient and result-focused approach.
                        </p>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.mainWrapper} maxWidth='lg'>
                <Grid container>
                    <Grid item xs={6} sm={6} md={3} lg={3} >
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.QualitysecondsectionWrapper} maxWidth='lg'>
                <Grid container>
                  {flexibleApproch.map((data) => (<>
                        <Grid xs={12} sm={12} md={4} lg={4} >
                            <div className={classes.QualitysecondsectionParaWrapper}>
                                <div>
                                    <Typography>{data.icon}</Typography>
                                    <Typography variant='h6' className={classes.titleText}>{data.title}</Typography>
                                    <p className={classes.subtitle}>{data.subtitle}</p>
                                </div>
                                <div className={classes.Paracontainer}>
                                    <Typography className={classes.Paracontainertext}>{data.description}</Typography>
                                </div>
                                <div>
                                    <ul className={classes.listwrapper}>
                                        <li className={classes.list}>{data.list1}</li>
                                        <li className={classes.list}>{data.list2}</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                    </>
                    ))
                    } 
                </Grid>
            </Container>
            </Container>
        </>)
}

export default FlexibleApproch