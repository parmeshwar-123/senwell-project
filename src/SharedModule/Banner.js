import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import healthcare from '../images/Services/Testing/healthcare.jpg'
import auto from '../images/Services/Testing/auto.jpg'

import './styles.css'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    HireNowButton: {
        padding: '0.7rem 4rem',
        color: '#fff',
        marginBottom: '2rem',
        // background: 'transparent',
        // background:'#0e2e5e',
        // textTransform: 'capitalize',
        letterSpacing:'2.5px',
        borderRadius: '25rem',
        fontSize: '1rem',
        fontWeight:'600',
        fontFamily: "'Manrope', sans-serif",
        border: '2px solid rgb(31 142 203)',

        borderRadius: '25rem',
        background: 'linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)',
        "&:hover": {
            background: 'transparent',
            border: '2px solid #fff',

        },
    },
    HeroBannerTitle: {
        fontSize: '3rem',
        color: '#fff',
        fontWeight:'700',
        fontFamily: "'Ubuntu', sans-serif",
        [theme.breakpoints.down('sm')]: {
          fontSize: '3rem',
        },
      },
}))
const Banner = () => {
    const classes = useStyles();
    return (
        <>
            <div className="showcasebanner">
                <img src={healthcare} style={{ width: '100vw' }} />
                <div className="overlaybanner">
                    <Container style={{ padding: '2rem 1rem', marginTop:'12rem'}}>
                        <Grid container style={{ justifyContent: 'center', }}>
                            <Grid items xs={12} sm={12} md={12}  >
                                <h1 className={classes.HeroBannerTitle}>Healthcare Software Development Services</h1>
                                <Button className={classes.HireNowButton}>Let’s talk</Button>
                            </Grid>
                        </Grid>

                    </Container>
                </div>
            </div>
        </>
    )
}

export default Banner