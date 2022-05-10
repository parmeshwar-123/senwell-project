import React, { useState } from 'react'
import { Container, makeStyles, Typography, Tab, Tabs, Grid } from '@material-ui/core'
import { OurApproachData } from './DevprocessTabs'

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'


const useStyles = makeStyles((theme) => ({

    TabBox: {
        // borderBottom: '2px solid transparent',
    },
    OurServicesSectionWrappr: {
        background: '#f6f6f6',
        padding: '2rem 0rem',
    },
    OurServicesSectionTitle: {
        fontWeight: '700',
        paddingBottom: '3rem',
    },
    PrivateTabIndicatorColorSecondary15: {
        backgroundColor: '#000'
    },
    QualityfirstsectionParaWrapper: {
        color: '#000',
        lineHeight: '1.5rem',
        padding: '2rem 4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 2rem',
        },

    },
    QualityfirstsectionWrapper: {
        padding: '2rem 0rem',
        // fontFamily: " 'Lora', serif",
        fontFamily: "'Poppins', sans-serif"

            },
    QualityfirstsectionTitleWrapper:{
        padding: '2rem 0rem',

    },
    TextWrapper: {
        color: '#000',
        padding:'0rem 2rem',
        fontFamily: " 'Ubuntu', sans-serif",

      
    },
}))
const CustomWorkflow = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    }
    return (
        <>
            <Container maxWidth='xxl' className={classes.OurServicesSectionWrappr} >
                <Container className={classes.QualityfirstsectionWrapper} maxWidth='lg'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionTitleWrapper}>
                            <Typography  variant ='h4' className={classes.TextWrapper}>Our MVP software development process
</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.QualityfirstsectionParaWrapper}>
                            <p style={{fontSize:"14px"}}>Throughout more than 20 years in full-cycle software development, we’ve matured our MVP development process to ensure a fast start and quality finish. Here is a step-by-step of how we build Minimum Viable Products.


                            </p>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='lg' className={classes.OurServicesSectionContainer}>
                    <Grid item xs={12}>
                      
                        <div className={classes.OurServicesTabWrapper}>
                            <div data-aos="fade-up"
                                data-aos-duration="2000">
                                <Tabs value={value} onChange={handleTabs} indicatorColor="primary" style={{ borderBottom: '1px solid #c1baba' }}>
                                    <Tab label='Our Approach'> Time and material</Tab>
                                    
                                </Tabs>
                                <Container maxWidth='lg'>
                                    <TabPanel value={value} index={0} className={classes.TabPanel}>{<OurApproachData/>}</TabPanel>
                                                                           
                                </Container>
                            </div>
                        </div>
                    </Grid>
                </Container>
            </Container>

        </>
    )
}
export default CustomWorkflow
function TabPanel(props) {
    const { children, value, index } = props;
    return (<div>
        {value === index && (<h1>{children}</h1>)}</div>)
}