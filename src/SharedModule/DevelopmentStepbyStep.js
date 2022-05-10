import { Typography, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        paddingTop: '4rem',
        paddingBottom: '4rem',

    },
    WhysenwellsTitle: {
        fontWeight: '700',
        fontFamily: " 'Ubuntu', sans-serif",   
    },
    whysenwellswrapper: {
      padding:'3rem 1.5rem 3rem 1.5rem',
      
    },
    Whysenwellsicon: {
        color: '#3D8ED7',
        paddingBottom: '1rem',
        fontSize:'3.2rem',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '0rem',
            fontSize:'2rem',
        },
    },
    Whysenwellstitle:{
        fontWeight:'700',
        paddingBottom:'1rem',
        fontFamily: " 'Ubuntu', sans-serif",

      
},
    Whysenwellspara:{
        fontWeight:'500',
        lineHeight:'1.5rem',
        color:'#5a5a5a',
        textAlign:'justify',
    }
}))

const Whysenwells = ({DevelopmentSteps}) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='xxl'>
            {DevelopmentSteps.map((val)=><>

                <Container maxWidth='lg' className={classes.mainContainer}>
                    <Typography variant='h4' className={classes.WhysenwellsTitle}>{val.DevelopmentSteptitle}</Typography>
                    <Grid container>
                        {val.Developmentstep.map((value)=><>
                        <Grid xs={12} sm={6} md={3} lg={3}>
                            <div className={classes.whysenwellswrapper}>
                                <div className={classes.Whysenwellsflexbox}>
                                    <Typography>{value.icon} </Typography>
                                    <div>
                                        <Typography variant="h6" className={classes.Whysenwellstitle}>{value.title}</Typography>
                                        <Typography variant="p" className={classes.Whysenwellspara}>{value.description}</Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        </> )}
                    </Grid>
                </Container>
                </> )}

            </Container>
        </>)
}

export default Whysenwells