import React, { useState } from 'react'
import { Container, makeStyles, Tab, Tabs, Grid } from '@material-ui/core'
import {Certification} from '../API/HomeApi'
import {TopAwards} from '../API/HomeApi'
import {OtherRating} from '../API/HomeApi'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({

  TabBox: {
    // borderBottom: '2px solid transparent',
  },
  AchievementWrappr: {
    background: '#000',
    padding: '4rem 0rem',
  },
  TabTitle: {
    fontWeight: '700',
    color:'#fff',
    fontSize:'17px',
  },
  ImageWrapper:{
      display:'flex',
      
      [theme.breakpoints.up('lg')]: {
        justifyContent:'space-between',
    },
  }
}))
const OurServicesSection = () => {
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
      <Container maxWidth='xxl' className={classes.AchievementWrappr} >
        <Container maxWidth='lg' className={classes.OurServicesSectionContainer}>
          <Grid item xs={12}>
            <div className={classes.OurServicesTabWrapper}>
              <div data-aos="fade-up"
              data-aos-duration="2000">
                  <Tabs value={value} onChange={handleTabs} indicatorColor="primary" Mui-selected='primary' style={{ borderBottom: '1px solid #c1baba' }}>
                    <Tab label='Certification' className={classes.TabTitle}>Certification</Tab>
                    <Tab label='TOP Awards'className={classes.TabTitle}> TOP Awards</Tab>
                    <Tab label='Other ratings'className={classes.TabTitle}> Other ratings</Tab>
                  </Tabs>

                <Container maxWidth='lg'>
                  <TabPanel value={value} index={0} className={classes.TabPanel}>
                  <Grid container spacing={3} className={classes.ImageWrapper}>
                    {Certification.map((data)=>(
                        <>
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img src={data.img} alt="Certification"/>
                            </Grid>
                        </>
                    ))
                    }
                   </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <Grid container spacing={3} className={classes.ImageWrapper}>
                    {TopAwards.map((data)=>(
                        <>
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img src={data.img} alt="TopAwards"/>
                            </Grid>
                        </>
                    ))
                    }
                   </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  <Grid container spacing={3} className={classes.ImageWrapper}>
                    {OtherRating.map((data)=>(
                        <>
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img src={data.img} alt="otherRating"/>
                            </Grid>
                        </>
                    ))
                    }
                   </Grid>
                  </TabPanel>
                </Container>
              </div>
            </div>
          </Grid>
        </Container>
      </Container>

    </>
  )
}
export default OurServicesSection
function TabPanel(props) {
  const { children, value, index } = props;
  return (<div>
    {value === index && (<h1>{children}</h1>)}</div>)
}