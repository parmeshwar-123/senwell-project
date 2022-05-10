import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import '../../css/bannarstylesheet.css'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    HireNowButton: {
        padding: '0.7rem 4rem',
        color: '#fff',
        marginBottom: '2rem',
        letterSpacing:'2.5px',
        fontSize: '1rem',
        fontWeight:'600',
        fontFamily: "'Manrope', sans-serif",
        border: '2px solid rgb(31 142 203)',
        borderRadius: '25rem',
        background: 'linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)',
        "&:hover": {
            background: 'transparent',
        borderRadius: '25rem',
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
      paragraph:{
        fontFamily: "'Poppins', sans-serif",

        [theme.breakpoints.up('md')]: {
           padding:'0.3rem 10rem',
          },
      }
}))
const Banner = ({HeroBanner}) => {
    const classes = useStyles();
    return (
        <>
        {HeroBanner.map((data)=><>
        {(data.name === 'testing-and-qa') ?<div className="testing-and-qajumbotron ecommparallax" id="testing-and-qaparallax-static">
            <div className="showcasebanner">
                <div className="overlaybanner">
                    <Container style={{ padding: '2rem 1rem', marginTop:'15rem'}}  maxWidth='md'>
                        <Grid container style={{ justifyContent: 'center',alignItems:'center' }}>
                            <Grid items xs={12} sm={12} md={12}  >
                                <h1 className={classes.HeroBannerTitle}>{data.title}</h1>
                               {data.button ? <Button className={classes.HireNowButton}>{data.button}</Button>:
                               <p className={classes.paragraph}>{data.para}</p>
                               }
                            </Grid>
                        </Grid>

                    </Container>
                </div>
            </div>
           </div>:''}
            </>)}
        </>
    )
}

export default Banner