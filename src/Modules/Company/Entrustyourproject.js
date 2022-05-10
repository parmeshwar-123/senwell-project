import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Container, Typography, Grid } from '@material-ui/core'
import {firstSvgImg} from '../../images/images'
import {secondSvgImg} from '../../images/images'
import {thirdSvgImg} from '../../images/images'
import {fouthSvgImg} from '../../images/images'

const useStyles = makeStyles((theme) => ({
    QualityfirstsectionParaWrapper: {
        color: '#5a5a5a',
        lineHeight: '1.5rem',
        padding: '2rem 4rem',
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 2rem',
        },
    },
    QualityfirstsectionWrapper: {
        padding: '4rem 0rem',
    },
    TextWrapper: {
        fontFamily: " 'Ubuntu', sans-serif",
        color: '#1c1c1c',
        padding: '2rem 2rem',
    },
    para:{
        fontFamily: " 'Lora', serif",
        fontSize:'14px'

    },
    imgcolor: {
        fill: 'blue',
    },
    flexbox:{
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
    },
    mainWrapper:{
        paddingBottom:'5rem',
    }
}))

const Entrustyourproject = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.QualityfirstsectionWrapper} maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionTitleWrapper}>
                        <Typography variant='h4'className={classes.TextWrapper}>Reasons you should entrust your project to Senwells</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionParaWrapper}>
                        <p className={classes.para}> We are a reliable partner who always strives to give the client more than they ask for. We offer clear communication, transparency, and flexibility in cooperation with our clients.
                        </p>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.mainWrapper} maxWidth='lg' >
                <Grid container>
                    <Grid item xs={6} sm={6} md={3} lg={3} style={{padding:'1rem 3rem'}}>
                        <div className={classes.flexbox}>
                        <svg width="100" height="100">
                            <image href={firstSvgImg}/>
                        </svg>
                        </div>
                        <p style={{textAlign:'center',fontFamily: "'Poppins', sans-serif",fontWeight:"500"}} >Transparent collaboration</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} style={{padding:'1rem 3rem'}}>
                    <div className={classes.flexbox}>
                        <svg width="100" height="100">
                            <image href={secondSvgImg}/>
                        </svg>
                    </div>
                    <p style={{textAlign:'center',fontFamily: "'Poppins', sans-serif"}}>Easy scaling</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} style={{padding:'1rem 3rem'}}>
                    <div className={classes.flexbox}>
                        <svg width="100" height="100">
                            <image href={thirdSvgImg}/>
                        </svg>
                     </div>
                     <p style={{textAlign:'center',fontFamily: "'Poppins', sans-serif"}}>Proprietary code quality tools</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} style={{padding:'1rem 3rem'}}>
                    <div className={classes.flexbox}>
                        <svg width="100" height="100">
                            <image href={fouthSvgImg}/>
                        </svg>
                    </div>
                    <p style={{textAlign:'center',fontFamily: "'Poppins', sans-serif"}} > Protection of confidentiality</p>
                    </Grid>
                </Grid>
            </Container>
        </>)
}

export default Entrustyourproject