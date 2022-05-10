import React from 'react'
import { Container, Grid, Typography, Box, Button,Breadcrumbs} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import CompanyBackground from '../images/comapnyBackgound.jpeg'
// import LogoImage from '../../../images/logo.svg';
// import CmmiImage from '../../../images/cmmi.svg';
// import Union from '../../../images/Union.png';


const useStyles = makeStyles((theme) =>({

  HeroBannerWrapper: {
    margin:'5rem 0 0 0',
   
    paddingTop: '6rem',
    paddingBottom:'4rem',
    color: '#000',
  },
  HeroBannerTitle: {
    fontSize: '3.5rem',
    color: '#000',
    fontWeight:'700',
    marginBottom: '2rem',
    fontFamily: "'Ubuntu', sans-serif",
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  HeroBannerTitleCompanyText: {
    color: '#3D8ED7',
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
     color: '#000',

    },
  },
  HomeSubContainerWrapper:{
    // background:'#000',
    height:'5rem',
    margin:'-2px',
    paddingBottom:'3rem',
  },
  ImageWrapper:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'0rem 0rem 0rem 5rem' ,
   
},
Image:{
    width:'100%',
    height:'auto',
    objectFit:'contain',
},
  HomeSubContainer:{
   display:'flex',
   float:'right',

  },
  HomeSubContainerImage:{
    marginRight:'2rem',
    marginBottom:'4rem',

  },
  para:{
   
  },
  mainsubContainer: {
    padding: '4rem 4rem 4rem 0rem',
    marginBottom:'4rem',
  },
  Breadcrumbs: {
    paddingBottom: '4rem',

},
BreadcrumbsText: {
  color:'#000',  
    fontSize: '1rem',
    fontWeight: '800',
},
imageGrid:{

  [theme.breakpoints.down('sm')]: {
    display:'none',},
}

}));
const HeroBanner = ({HeroBanner}) => {
  const classes = useStyles();
  return (
    <>
    <Container maxWidth='full' style={{background:'#f1f1f1'}}>
    {HeroBanner.map((value)=>(
      <Container className={classes.HeroBannerWrapper} maxWidth='xxl'>
        <Container maxWidth='lg'>
        <Breadcrumbs aria-label="Company" className={classes.Breadcrumbs}>
                        <Link to="/" className={classes.BreadcrumbsText} style={{textDecoration:'underline'}}>
                            Home
                        </Link>
                        {value.breadcrums ? <Link color="inherit" to={value.Link}  style={{textDecoration:'underline'}} className={classes.BreadcrumbsText}>
                          {value.breadcrums} </Link> : ''
                        }
                        <Typography color="textPrimary" className={classes.BreadcrumbsText}>{value.Page}</Typography>
                    </Breadcrumbs>
          <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Typography variant='h1' className={classes.HeroBannerTitle}>
              {value.title} <span className={classes.HeroBannerTitleCompanyText}>{value.spanText} </span>
              {value.title2}
              </Typography>
              <Typography variant='h6' className={classes.para}>
              {value.para}
              </Typography>
             {value.button? <Button className={classes.HireNowButton}> {value.button} </Button>:<Button className={classes.HireNowButton} style={{display:'none'}}> {value.button} </Button>}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} className={classes.imageGrid}>
          <div className={classes.ImageWrapper}>
                    <img src={value.img} className={classes.Image}/>
                </div>
          </Grid>
          </Grid>
        </Container>
        <Container maxWidth='lg' className={classes.mainsubContainer}>
                    <Grid item xs={12} className={classes.HomeSubContainer}>
                        <Typography className={classes.HomeSubContainerImage}><img src={value.image1} alt='' /></Typography>
                        <Typography className={classes.HomeSubContainerImage}><img src={value.image2} alt='' /></Typography>
                        <Typography className={classes.HomeSubContainerImage}><img src={value.image3} alt='' /></Typography>
                    </Grid>
                </Container>
      </Container>
      
     
    ))}
    </Container>
    </>
  )
}

export default HeroBanner