import React from 'react'
import { Container, Grid, Typography, Box, Button, Breadcrumbs } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    ServicesWrapper: {
        padding: '6rem 0rem 5rem 0rem',
            color: '#000',
    },
    gridContainer: {
        border: '1px solid #5a5a5a',
        margin: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: '0.4rem',

        },
    },
    servicesContainer: {
        padding: '7rem 2rem 1rem 2rem',
        width:'8rem',
        height:'8rem',
    },
    servicetitle: {
        color: '#fff',
        margin: '3rem 1rem',
    },
}))
const TypeOfTesting = () => {
    const classes =useStyles()
  return (
<>

<Container className={classes.ServicesWrapper} maxWidth='xxl'>
                <Container maxWidth='lg'>
                    <Typography variant='h4'>Types of testing</Typography>
                    <p>Over 20 years of delivering software QA services, we’ve matured our processes and built a strong expertise in various types of manual and automated testing.</p>
                    <Grid container>
                        <Grid xs={12} sm={3} md={3} lg={3} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h5'>Functionality testing</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>Functionality testing</Typography>
                                        <p>We will make sure every feature of your software works as intended. Moreover, we’ll help you find unconventional usage cases to make sure that your software still functions when users get creative.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={3} md={3} lg={3} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h5'>Compatibility testing</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>Compatibility testing</Typography>
                                        <p>Avoid alienating users because your software flies on one platform but underperforms on another. We can test on over 250 physical devices to ensure smooth operation on any platform.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={3} md={3} lg={3} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h5'>UI/UX</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>UI/UX</Typography>
                                        <p>We help you avoid the risk of creating highly functional software nobody likes using by checking every screen, clicking every button, and making sure it’s a positive user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={3} md={3} lg={3} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h5'>Performance testing</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>Performance testing</Typography>
                                        <p>Be confident that your project will perform well under pressure. We put your software through load, stress, spike, and endurance tests to ensure it will support the growth of your business.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={3} md={3} lg={3} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h5'>Security testing</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>Security testing</Typography>
                                        <p>Ensure the GDPR compliance of your website and the thorough security of your software. Our ISO 27001 certified team can help you establish confidence in the security of your software project.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={3} md={3} lg={3} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h5'>Localization testing</Typography>
                                    <div className="overlay">
                                        <Typography variant='h5' className={classes.servicetitle}>Localization testing</Typography>
                                        <p>You can’t automate a human perspective. Localization testing helps you ensure that your users will have an equally pleasant user experience regardless of what language they prefer their UI in.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
</>  )
}

export default TypeOfTesting