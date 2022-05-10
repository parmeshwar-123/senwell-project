import React, { useState } from 'react'
import { Container, makeStyles, Typography, Tab, Tabs, Grid } from '@material-ui/core'
import { Services } from './WeHelpWithTabs'
import { Technologies } from './WeHelpWithTabs'
import { Industries } from './WeHelpWithTabs'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'


const useStyles = makeStyles((theme) => ({

  TabBox: {
    // borderBottom: '2px solid transparent',
  },
  OurServicesSectionWrappr: {
    background: '#f6f6f6',
    padding: '4rem 0rem',
  },
  OurServicesSectionTitle: {
    fontFamily: " 'Ubuntu', sans-serif",
    fontWeight: '700',
    paddingBottom: '3rem',
  },
  OurServicesSectionContainer: {

  },
  PrivateTabIndicatorColorSecondary15: {
    backgroundColor: '#000'
  },


}))
const WeHelpWith = () => {
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
        <Container maxWidth='lg' className={classes.OurServicesSectionContainer}>
          <Grid item xs={12}>
            <Typography variant='h4' className={classes.OurServicesSectionTitle} data-aos="fade-up"
        data-aos-duration="1000">We Help With</Typography>
            <div className={classes.OurServicesTabWrapper}>
              <div data-aos="fade-up"
        data-aos-duration="2000">
                  <Tabs value={value} onChange={handleTabs} indicatorColor="primary" style={{ borderBottom: '1px solid #c1baba' }}>
                    <Tab label='Services'> Services</Tab>
                    <Tab label='Technologies'> Technologies</Tab>
                    <Tab label='Industries'> Industries</Tab>
                  </Tabs>
                <Container maxWidth='lg'>
                  <TabPanel value={value} index={0} className={classes.TabPanel}><div><Services /></div></TabPanel>
                  <TabPanel value={value} index={1}><Technologies /></TabPanel>
                  <TabPanel value={value} index={2}><Industries /></TabPanel>
                </Container>
              </div>
            </div>
          </Grid>
        </Container>
      </Container>

    </>
  )
}
export default WeHelpWith
function TabPanel(props) {
  const { children, value, index } = props;
  return (<div>
    {value === index && (<h1>{children}</h1>)}</div>)
}