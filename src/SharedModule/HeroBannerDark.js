import React from 'react'
import { Container, Grid, Typography, Box, Button,Breadcrumbs} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import { ControlPointSharp } from '@material-ui/icons';
// import LogoImage from '../../../images/logo.svg';
// import CmmiImage from '../../../images/cmmi.svg';
// import Union from '../../../images/Union.png';


const useStyles = makeStyles((theme) =>({

  HeroBannerWrapper: {
    background: '#000',
    margin:'5rem 0 0 0',
    paddingTop: '6rem',
    color: '#fff',
    paddingBottom:'4rem',
   
  },
  HeroBannerTitle: {
    fontSize: '3.5rem',
    color: '#3D8ED7',
    marginBottom: '2rem',
    // fontFamily: "'Ubuntu', sans-serif",
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  HeroBannerTitleCompanyText: {
    color: '#fff',
    // fontFamily: "'Ubuntu', sans-serif",
  },
  HireNowButton: {
    padding: '0.7rem 3rem',
    // fontFamily: "'Ubuntu', sans-serif",
    color: '#fff',
    border:'2px solid #3D8ED7',
    background: 'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
    borderRadius: '25rem',
    marginTop: '2rem',
    "&:hover": {
     background:'transparent',
     border:'2px solid #3D8ED7',
    },
  },
  HomeSubContainerWrapper:{
    background:'#000',
    height:'5rem',
    margin:'-2px',
    paddingBottom:'3rem',
    // [theme.breakpoints.down('sm')]: {
    //   paddingLeft: '3rem',

    // },

  },
  ImageWrapper:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'0rem 0rem 0rem 5rem' ,
    [theme.breakpoints.down('sm')]: {
display:'none',    },

},
Image:{
    width:'100%',
    height:'auto',
    objectFit:'contain',
},
  HomeSubContainer:{
   display:'flex',

  },
  HomeSubContainerImage:{
    marginRight:'2rem',
  },
  Breadcrumbs: {
    paddingBottom: '4rem',

  },
  BreadcrumbsText: {
    textDecoration:'none',
    color:'#000',
    fontSize: '1rem',
    fontWeight: '800',
    color:'inherit',
  },

}));
const HeroBanner = ({HeroBanner}) => {
     
  const classes = useStyles();
  return (
    <>
    {HeroBanner.map((value)=>(
      <Container className={classes.HeroBannerWrapper} maxWidth='xxl'>
        <Container maxWidth='lg'>
          {value.Breadcrumbs?
             <Breadcrumbs aria-label="Business Models" className={classes.Breadcrumbs} color='#fff'>
             <Link to='/'color="inherit" className={classes.BreadcrumbsText} style={{textDecoration:'underline'}}>
               Home
             </Link>
             <Link color="inherit" to={value.Link} className={classes.BreadcrumbsText} style={{textDecoration:'underline'}}>
                {value.section} </Link>
             <Typography color="textPrimary" className={classes.BreadcrumbsText}>{value.Page}</Typography>
           </Breadcrumbs>:''
          }
          <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <Typography variant='h1' className={classes.HeroBannerTitle}>
              {value.title} <span className={classes.HeroBannerTitleCompanyText}>{value.spanText}</span>{value.title2} 
              </Typography>
              <Typography variant='h5' className={classes.para}>
              {value.para}
              </Typography>
             {value.button? <Button className={classes.HireNowButton}> {value.button} </Button>:<Button className={classes.HireNowButton} style={{display:'none'}}> {value.button} </Button>}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className={classes.ImageWrapper}>
                    <img src={value.img} className={classes.Image}/>
                </div>
          </Grid>
          </Grid>
        </Container>
      </Container>
     
    ))}
    </>
  )
}

export default HeroBanner