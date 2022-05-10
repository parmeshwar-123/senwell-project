import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Button ,Modal,Backdrop,Fade} from '@material-ui/core';
import Popup from '../Modules/Popupform'
import Aos from 'aos';
import "aos/dist/aos.css";
// import getintouch from '../images/Services/Testing/getintouch.jpg'
import test from '../images/Services/Testing/test2.jpg'

import { useEffect } from 'react'
const useStyles = makeStyles((theme) => ({
    mainContainerWrapper: {
             padding: '3rem 0rem 3rem 0rem',
        background: 'linear-gradient(90deg, hsla(200, 73%, 52%, 1) 44%, hsla(220, 60%, 37%, 1) 100%)',
        //   backgroundImage:`url(${test})`,
        //   backgroundSize:'cover',
        //   backgroundRepeat:'no-repeat'
        
          
},
    ImageWrapper: {
        display: 'flex',
        padding: '3rem',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    Image: {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
    },
    GetInTouch: {
        padding: '0.7rem 3rem',
        color: '#3D8ED7',
        backgroundColor: '#fff',
        borderRadius: '25rem',
        border: '2px solid #fff',
        marginTop: '2rem',
        "&:hover": {
            backgroundColor: 'transparent',
            border: '2px solid #fff',
            color: '#fff',
        },

    },
    GetInTouchButtonwrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '0.5rem',

        },
    },
    MobileViewContainer: {

        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-around',
        },
    },
    contentWraper: {
        color: 'White',
        padding: '3rem',
        fontFamily: " 'Ubuntu', sans-serif",

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            padding: '1rem 0rem',
            textAlign: 'center',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}))
const GetInTouch = ({GetInTouch}) => {
     
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const classes = useStyles();
    return (
        <>
        
        {GetInTouch.map((val)=>
            <div className={classes.mainContainerWrapper} data-aos="fade-up"
                data-aos-duration="2000">
                <Container maxWidth='lg' >
                    <Grid container className={classes.MobileViewContainer} spacing={3}>
                    {val.GetInTouchImage ? <Grid xs={8} md={4} lg={4}>
                            <div className={classes.ImageWrapper}>
                                <img src={val.GetInTouchImage} className={classes.Image} />
                            </div>
                        </Grid>:<Grid xs={8} md={4} lg={4} style={{display:'none'}}>
                            <div className={classes.ImageWrapper}>
                                <img src={val.GetInTouchImage} className={classes.Image} />
                            </div>
                        </Grid>
                    } 
                    {val.GetInTouchImage ?    <Grid xs={10} md={4} lg={4}>
                            <Typography variant='h4' className={classes.contentWraper}>{val.GetInTouchTitle}</Typography>
                        </Grid>:<Grid xs={10} md={8} lg={8}>
                            <Typography variant='h4' className={classes.contentWraper}>{val.GetInTouchTitle}</Typography>
                        </Grid>
}
                        <Grid xs={8} md={4} lg={4} >
                            <div className={classes.GetInTouchButtonwrapper}>
                                <Button className={classes.GetInTouch}  onClick={handleOpen}>{val.Button}
                                </Button>
                                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* <div className={classes.paper}> */}
      <Popup Close={handleClose}/>
         
          {/* </div> */}
          {/* <Mail/> */}
        </Fade>
      </Modal>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
               )}
        </>
    )
}

export default GetInTouch