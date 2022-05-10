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
    padding: '2rem 0rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '13.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: '#000',
    fontFamily: " 'Ubuntu', sans-serif",

    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.pxToRem(20),
  },
  },
  Accordion: {
    marginBottom: '2rem',
    padding: '0.5rem 0rem',
    boxShadow:'0 0 11px rgba(11,11,11,.2)',
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
    color: '#1c1c1c',
    padding: '1rem 0rem',
    fontSize: '17px',
    textAlign: 'justify',
    fontWeight: '400',
    fontFamily: " 'Lora', serif",
       fontSize:'14px',
  },
  
  title:{
    fontFamily: "'Poppins', sans-serif",
     padding :'2rem 0rem',
    textAlign:'center'
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
        <Typography variant='h4' className={classes.title}>MVP development sourcing models</Typography>
      <Container maxWidth='sm'>
      
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.Accordion} >
            <AccordionSummary
              expandIcon={expanded === 'panel1' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel1bh-content"
              id="panel1bh-header" >
                   
              <Typography variant='h4' className={classes.secondaryHeading}>Full process outsourcing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Container maxWidth='md'>
                <Typography className={classes.AccordionDetails}>
                Senwell assumes full responsibility for the sourcing, recruitment, and onboarding procedures, project team management, MVP development process establishment and coordination, product ownership, and risk management
                </Typography>
              </Container>
            </AccordionDetails>
          </Accordion>
          

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel2' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.secondaryHeading}>
              Partial outsourcing of technical resources  
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'>
              <Typography className={classes.AccordionDetails}>
                <ul>
                  <li> optimal resource usage at peak loads</li>
                  <li> instant access to niche tech experts</li>
                  <li> the client is responsible for team coordination, risk management, and product ownership</li>
                </ul>
              </Typography>
              </Container>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.Accordion}>
            <AccordionSummary
              expandIcon={expanded === 'panel3' ? <RemoveIcon className={classes.Icons} /> : <AddIcon className={classes.Icons}  />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              
              <Typography className={classes.secondaryHeading}>
              Outsourced team with in-house management
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Container maxWidth='md'> 
              <Typography className={classes.AccordionDetails}>
                <li> established communication and mature processes within the technical team </li>
                <li> fast MVP development project recruitment and onboarding</li>
                <li>the client is fully or partially responsible for team coordination, risk management, and product ownership </li>
              </Typography>
             </Container>
            </AccordionDetails>
          </Accordion>

          
      </Container>
    </Container>
  );
}
export default ImportantDetails