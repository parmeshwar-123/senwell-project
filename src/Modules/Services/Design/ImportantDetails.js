import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SearchIcon from '@material-ui/icons/Search';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#fafafa',
  },
  mainWrapper: {
    background: '#fafafa',
    padding: '5rem 0rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '13.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    color: '#000',
    fontWeight: '500',
    fontFamily: " 'Ubuntu', sans-serif",

  },
  Accordion: {
    marginBottom: '2rem',
    padding: '0.5rem 0rem',
    boxShadow:'0 0 11px rgba(33,33,33,.2)',
    backgroundColor:'none',
    '&::before': {
     backgroundColor:'none',
     height:'0px',
    },
    '&:hover':{
     
    }
  },
  pricingText: {
    color: '#274e99',
    fontWeight: '600',
    textDecoration: 'underline',
  },
  Icons: {
    fontSize: theme.typography.pxToRem(30),
    padding:'0rem 1rem',
    color: '#274e99',
    [theme.breakpoints.up('lg')]: {

  },
  },
  AccordionDetails: {
    color: '#5a5a5a',
    padding: '1rem 0rem',
    textAlign: 'left',
    fontWeight: '400',
    fontFamily: " 'Lora', serif",
fontSize:'14px'


  },
  title:{
    fontFamily: " 'Ubuntu', sans-serif",
paddingBottom:'2rem',
textAlign:'center',
  }

}));

const ImportantDetails = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth='full' className={classes.mainWrapper}>
      <Container maxWidth='md'>
        <Typography variant='h4' className={classes.title}>How we do and do not work</Typography>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.Accordion} >
            <AccordionSummary
              expandIcon={expanded === 'panel1' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel1bh-content"
              id="panel1bh-header" >
              <Typography variant='h6' className={classes.secondaryHeading}>Do you do adaptive design?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Container maxWidth='md'>
                <p className={classes.AccordionDetails}>
                Yes, we do. Our UI/UX design expertise covers both adaptive and responsive design. Whether you need to retrofit your existing website to make it more mobile-friendly or looking to build a brand new one, we will make sure your website boasts great performance and exceptional user experience on any browser or device.
                </p>
              </Container>
            </AccordionDetails>
          </Accordion>
          

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel2' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant='h6' className={classes.secondaryHeading}>
              Will my website perform well on mobile devices?       
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'>
              <p className={classes.AccordionDetails}>
              We build future-proof solutions that work and scale well regardless of the platform. Depending on your project requirements and business goals, our UI/UX design services will help you choose the best suitable (responsive or adaptive) design approach to make sure your website loads fast, looks great on different screen sizes, and easily adapts content to any device.
              </p>
              </Container>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel3' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography  variant='h6'className={classes.secondaryHeading}>
              What data do you need from me to start working on my project?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'> 
              <p className={classes.AccordionDetails}>
              The first and most important step in beginning any project is knowing what you want to achieve. For a UI/UX design project, a good start would be outlining your business goals, sharing the platforms you’re going for (desktop/mobile), the styles you prefer (samples or references), and whether you’re looking for a custom or ready-made/modular solution.

              </p >
              <p className={classes.AccordionDetails}>
              By outlining your project objectives for us, you give us a head start in planning the best approach and estimating the actual work to be done. With a clear understanding of your vision, well-defined requirements, and a target audience to work with, we will be able to get back to you with a plan, estimates, and first drafts in mere 2-5 days from the moment we have received your request.
              </p>
             </Container>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel4' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography variant='h6' className={classes.secondaryHeading}>
              How long do you need to show me the first wireframes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'>
              <p className={classes.AccordionDetails}>
              Wireframes are an incredibly powerful deliverable that can serve many purposes from simply communicating your ideas to bringing simplicity and usability into complex functional structures. 
We start working on your project as soon as we’ve received your request. Depending on the complexity and scale of your project, it takes our designers about 8 hours to provide you with the first user flows, 2-5 days to create wireframes and mind maps, and approximately 2 weeks to turn all those into a design prototype.
If you are in a real hurry to market and ready to provide us with clearly defined requirements, however, we can always skip the wireframing phase and go straight to design which allows us to significantly speed up the process.

              </p>
              </Container>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel5' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography variant='h6' className={classes.secondaryHeading}>
              Who will be working on my project?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'>
              <p className={classes.AccordionDetails}>
              We are a UI/UX design services company with 20 years of experience and a diverse in-house design team that has a broad set of creative and technical skills. In addition to their experience in various domains, industries, and platforms, our designers are flexible with styles, excellent with tools, and always ready to innovate.

              </p>
              <p className={classes.AccordionDetails}>
              Over years of working in synergy with our developers and pairing with in-house troops of our clients on their projects, our UI/UX designers acquired a deep understanding of the technical aspects of software development and know exactly how to combine visual aesthetics and well-crafted user experience with utmost technical performance.

Depending on your requirements, we can always help you find a perfect fit for your project goals.
              </p>
              
              </Container>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel6' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography variant='h6' className={classes.secondaryHeading}>
              How many design revisions do your clients get?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'>
              <p className={classes.AccordionDetails}>
              It’s common for us to satisfy our client’s project requirements in full after one to three rounds of revisions. The number of revisions you get, however, primarily depends on the cooperation model you’ve chosen for the project.
Time & Material, Dedicated Team, and Staff Augmentation projects get infinite revisions and can fine-tune the design until they are perfectly happy with the outcome.
Fixed Cost projects usually get three revisions depending on the complexity and scale of the project.
              </p>
              </Container>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel7' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >

              <Typography variant='h6' className={classes.secondaryHeading}>
              How long does the design process usually take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'>
              <p className={classes.AccordionDetails}>
              While a simple landing page can be done within a few hours from the moment we’ve received your request, it usually takes our designers about 80 hours (two weeks) to complete an average website or web/mobile application. For complex, large-scale solutions, however, the design process can take up to 1000 hours (6 months). 
We always carefully analyze your project requirements to provide you with most accurate time and budget estimates. We also provide help to projects that require ongoing presence of a designer through our flexible staff augmentation model.
              </p>
              </Container>
            </AccordionDetails>
          </Accordion>
          
      </Container>
    </Container>
  );
}
export default ImportantDetails