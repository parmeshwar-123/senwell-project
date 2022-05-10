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
        {(data.name === 'react') ?<div className="reactjumbotron reactparallax" id="reactparallax-static" style={classes.rectImage}>
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
           
           </div>
           :(data.name === 'angular')?<div className="angularjumbotron productparallax" id="angularparallax-static">
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
          </div>: (data.name === 'nodejs') ?<div className="nodejsjumbotron nodejsgparallax" id="nodejsparallax-static">
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
          </div>: (data.name === 'dot-net') ?<div className="dot-netjumbotron startupparallax" id="dot-netparallax-static">
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
          </div>: (data.name === 'react-native') ?<div className="react-nativejumbotron react-nativeparallax" id="react-nativeparallax-static">
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
           </div>: (data.name === 'qa') ?<div className="qajumbotron telecomparallax" id="qaparallax-static">
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
           </div>: (data.name === 'front-end') ?<div className="front-endjumbotron telecomparallax" id="front-endparallax-static">
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
           </div>: (data.name === 'back-end') ?<div className="back-endjumbotron telecomparallax" id="back-endparallax-static">
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
           </div>: (data.name === 'mobile') ?<div className="mobilejumbotron telecomparallax" id="mobileparallax-static">
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
           </div>: (data.name === 'cms-crm-erp') ?<div className="cms-crm-erpjumbotron telecomparallax" id="cms-crm-erpparallax-static">
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