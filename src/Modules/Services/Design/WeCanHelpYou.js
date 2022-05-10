import React from 'react'
import { Container, Grid, Typography, Box, Button, Breadcrumbs } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    ServicesWrapper: {
        padding: '6rem 0rem 5rem 0rem',
            color: '#000',
    },
    gridContainer: {
        // border: '1px solid #5a5a5a',
         marginTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: '0.4rem',

        },
    },
    servicesContainer: {
        padding: '7rem 2rem 1rem 2rem',
    },
    servicetitle: {
        color: '#fff',
        margin: '3rem 1rem',
        fontFamily: " 'Ubuntu', sans-serif",

    },
    wrapper:{
        fontFamily: "'Ubuntu', sans-serif",

    },
    para:{
        fontFamily: " 'Lora', serif",
fontSize:'14px'

    }
}))
const WeCanHelpYou = () => {
    const classes =useStyles()
  return (
<>

<Container className={classes.ServicesWrapper} maxWidth='xxl'>
                <Container maxWidth='lg'>
                    <Typography variant='h4' className={classes.wrapper}>We Can Help You</Typography>
                    <p className={classes.para}>Outstanding UI/UX design services fueled by a shared passion, refined skill, and years of experience..</p>
                    <Grid container style={{justifyContent:'center'}}>
                        <Grid xs={12} sm={4} md={4} lg={4} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.wrapper}>Deliver complex features in simple forms</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>UX/UI Design</Typography>
                                        <p className={classes.para}>Build apps that will perform on any device with a browser and an internet connection.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={4} md={4} lg={4} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.wrapper}>Web Development Services</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>Brand/Logo Design</Typography>
                                        <p className={classes.para}>We tailor unique brand identities with engaging, memorable looks and distinctive qualities that drive conversion rates and take over markets.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={4} md={4} lg={4} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.wrapper}>Design a solution your customers need</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>App Design</Typography>
                                        <p className={classes.para}>We turn ideas into usable, enjoyable applications with visual implementation and experiences your customers are sure to recommend to others.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
</>  )
}

export default WeCanHelpYou