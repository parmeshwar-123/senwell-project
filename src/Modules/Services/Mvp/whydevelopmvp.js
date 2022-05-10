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
        // margin: '2rem',
        // [theme.breakpoints.down('sm')]: {
        //     margin: '0.4rem',

        // },
    },
    servicesContainer: {
        padding: '7rem 2rem 1rem 2rem',
    },
    servicetitle: {
        color: '#fff',
        margin: '3rem 1rem',
        fontFamily: " 'Ubuntu', sans-serif",

    },
    Name:{
        fontFamily: " 'Ubuntu', sans-serif",
    },
    para:{
        fontFamily: " 'Ubuntu', sans-serif",
    }
}))
const WeCanHelpYou = () => {
    const classes =useStyles()
  return (
<>

<Container className={classes.ServicesWrapper} maxWidth='xxl'>
                <Container maxWidth='lg'>
                    <Typography variant='h4' className={classes.Name}>Why develop an MVP?</Typography>
                    <p>Outstanding UI/UX design services fueled by a shared passion, refined skill, and years of experience..</p>
                    <Grid container>
                        <Grid xs={12} sm={6} md={4} lg={4} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.para}>Deliver complex features in simple forms</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>UX/UI Design</Typography>
                                        <p>Build apps that will perform on any device with a browser and an internet connection.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6'  className={classes.Name}>Web Development Services</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>Brand/Logo Design</Typography>
                                        <p>We tailor unique brand identities with engaging, memorable looks and distinctive qualities that drive conversion rates and take over markets.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.Name}>Design a solution your customers need</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>App Design</Typography>
                                        <p>We turn ideas into usable, enjoyable applications with visual implementation and experiences your customers are sure to recommend to others.</p>
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