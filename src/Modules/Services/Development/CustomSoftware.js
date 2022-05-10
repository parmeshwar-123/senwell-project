import React from 'react'
import { Container, Grid, Typography, Box, Button, Breadcrumbs } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../../../images/Services/DevelopmentHeroBanner.png'
import CodeIcon from '@material-ui/icons/Code';
import CompImage from '../../../images/Homepage/GetInTouch/Comp.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './styles.css';


const useStyles = makeStyles((theme) => ({
    HeroBannerWrapper: {
        background: '#111',
        margin: '5rem 0 0 0',
        paddingTop: '6rem',
        height: '43rem',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            height: '53rem',
        },
    },
    HeroBannerTitle: {
        fontSize: '3rem',
        color: '#3D8ED7',
        marginBottom: '2rem',
        padding: '2rem 0rem 0rem 0rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.4rem',
        },
    },
    HeroBannerTitleCompanyText: {
        color: '#fff',
    },
    HireNowButton: {
        padding: '0.7rem 3rem',
        color: '#fff',
        backgroundColor: '#3D8ED7',
        borderRadius: '25rem',
        marginTop: '2rem',
        "&:hover": {
            backgroundColor: 'transparent',
            border: '2px solid #3D8ED7',
        },
    },
    HomeSubContainerWrapper: {
        background: '#5a5a5a',
        height: '5rem',
        margin: '-2px',
        paddingTop: '3rem',
    },
    ImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '-3rem',
        padding: '2rem 0rem 6rem 8rem',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    Image: {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
    },
    HomeSubContainer: {
        display: 'flex',
    },
    HomeSubContainerImage: {
        marginRight: '2rem',
    },
    Breadcrumbs: {
        paddingBottom: '4rem',

    },
    BreadcrumbsText: {
        fontSize: '1rem',
        fontWeight: '800',

    },
    HireNowButton: {
        padding: '0.7rem 3rem',
        // fontFamily: "'Ubuntu', sans-serif",
        color: '#fff',
        // border: '2px solid #3D8ED7',
        background: 'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
        borderRadius: '25rem',
        marginTop: '2rem',
        "&:hover": {
            background: 'transparent',
            border: '2px solid #3D8ED7',
        },
    },

    ServicesWrapper: {
        padding: '6rem 0rem 5rem 0rem',
            color: '#000',
    },
    gridContainer: {
        // border: '1px solid #5a5a5a',
        // marginTop: '2rem',
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
    QualitymainContainer: {
        background: '#f6f6f6',
        padding: '4rem 0rem',
    },
    QualityfirstsectionTitleWrapper: {
        color: '#000',
        padding: '0rem 2rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0rem 2rem',
        },

    },
    QualityfirstsectionParaWrapper: {
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 2rem',
        },

    },
    QualityfirstsectionWrapper: {
        padding: '3rem 0rem',
        borderBottom: '1px solid #000',
    },
    TextWrapper: {
       
        fontFamily: " 'Ubuntu', sans-serif",

    },
    QualitysecondsectionWrapper: {
        color: '#000',
        paddingTop: '3rem',
        padding: '0rem 2rem',
    },
    percentText: {
        fontWeight: 700,
        fontFamily: " 'Ubuntu', sans-serif",

    },
    titleText: {
        fontFamily: " 'Ubuntu', sans-serif",

    },
    QualitysecondsectionParaWrapper: {

        paddingTop: '3rem',
        padding: '0rem 2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0rem 1rem',
        },
    },
    mainContainerWrapper:{
        padding:'3rem 0rem 3rem 0rem',
        background:'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
    },
    GetInTouch: {
        padding: '0.7rem 3rem',
        color: '#3D8ED7',
        backgroundColor: '#fff',
        borderRadius: '25rem',
        border:'2px solid #fff',
        marginTop: '2rem',
        "&:hover": {
         backgroundColor:'transparent',
         border:'2px solid #fff',
         color:'#fff', 
        },
        
      },
    GetInTouchButtonwrapper:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'5rem', 
        [theme.breakpoints.down('sm')]: {
            paddingTop:'0.5rem', 

          },
  },
  MobileViewContainer:{ 
   
    [theme.breakpoints.down('sm')]: {
        display:'flex',
        justifyContent:'space-around',
      },
  },
  contentWraper:{
      color:'White',
      padding:'3rem',
      [theme.breakpoints.down('sm')]: {
       fontSize:'1.2rem',
       padding:'1rem 0rem',
       textAlign:'center',
      },
  },
  wrapper:{
    fontFamily: " 'Ubuntu', sans-serif",

  },
  parawrapper:{
    fontFamily: " 'Lora', serif",
    fontSize:'14px',
    
    
  }
}));
const Development = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
    const classes = useStyles();

    return (
        <>

            <Container className={classes.ServicesWrapper} maxWidth='xxl'>
                <Container maxWidth='lg'>
                    <Typography variant='h4' className={classes.wrapper}>Custom software development services</Typography>
                    <p className={classes.parawrapper}>Over the years of delivering robust solutions from simple web applications to complex business management systems, our software development experts have built strong expertise in reliable architecture and efficient development practices.</p>
                    <Grid container style={{justifyContent:'center',marginTop:'2rem'}} >
                        <Grid xs={12} sm={5} md={5} lg={5} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <Link to='/services/web-development' style={{textDecoration:'none',color:'#000'}}>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6'className={classes.wrapper}>Web application development</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>Web application development</Typography>
                                        <p className={classes.parawrapper}>Build apps that will perform on any device with a browser and an internet connection.</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={5} md={5} lg={5} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <Link to ='/services/it-consulting' style={{textDecoration:'none',color:'#000'}}>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6'className={classes.wrapper}>Consulting</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>Consulting</Typography>
                                        <p  className={classes.parawrapper}>Develop a thorough plan for your software’s development, marketing, and growth strategy.</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={5} md={5} lg={5} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                                <Link to='/services/application-development' style={{textDecoration:'none',color:'#000'}}>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.wrapper}>Mobile App Development</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>Mobile App Development</Typography>
                                        <p  className={classes.parawrapper}>Empower your users wherever they are with native and cross-platform mobile apps.</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={5} md={5} lg={5} className={classes.gridContainer}>
                            <div className='containerWrapper'>
                            <Link to='/services/devops' style={{textDecoration:'none',color:'#000'}}>
                                <div className={classes.servicesContainer}>
                                    <CodeIcon />
                                    <Typography variant='h6' className={classes.wrapper}>DevOps</Typography>
                                    <div className="overlay">
                                        <Typography variant='h6' className={classes.servicetitle}>DevOps services.</Typography>
                                        <p className={classes.parawrapper}>Ensure the security, scalability, and reliability of your applications with exceptional </p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container className={classes.QualitymainContainer} maxWidth='full'>
                <Container className={classes.QualityfirstsectionWrapper} maxWidth='lg'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionTitleWrapper}>
                            <Typography variant='h4' className={classes.TextWrapper}>Efficient Processes.
                                Outstanding Results.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionParaWrapper}>
                            <p className={classes.parawrapper}> With 20 years of experience in providing exceptional custom software development services, no project is too challenging for our software engineers, designers, and analysts. From planning your software architecture to the last load test we run — the success of your business and realisation of your vision is all we care about.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.QualitysecondsectionWrapper} maxWidth='lg'>
                    <Grid container>
                        <Grid xs={12} sm={4} md={4} lg={4} >
                            <div className={classes.QualitysecondsectionParaWrapper}>
                                <Typography variant='h6' className={classes.percentText}>20</Typography>
                                <Typography variant='h6' className={classes.titleText}>Years of development</Typography>
                                <p className={classes.parawrapper}>We have built single-page web apps and cross-platform ERP systems for the agricultural sector.</p>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={4} md={4} lg={4}>
                            <div className={classes.QualitysecondsectionParaWrapper}>
                                <Typography variant='h6' className={classes.percentText}>250+</Typography>
                                <Typography variant='h6' className={classes.titleText}>Accomplished professionals</Typography>
                                <p className={classes.parawrapper}>Our engineers are highly skilled and experienced in a wide range of technologies and domains.</p>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={4} md={4} lg={4}>
                            <div className={classes.QualitysecondsectionParaWrapper}>
                                <Typography variant='h6' className={classes.percentText}>67%</Typography>
                                <Typography variant='h6' className={classes.titleText}>Success stories</Typography>
                                <p className={classes.parawrapper}>From engaging websites ready for an audience of millions to mobile apps that save lives.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            
                           
        
           
          
        </>
    )
}

export default Development