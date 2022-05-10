import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { services, technologies, industries } from '../../API/HomeApi'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    TabContainer: {
        background: '#fff',
        padding: '2rem 1rem 3rem 1rem',
        boxShadow: '3px 8px 15px 0px #cec5c5',
        transition: 'all 0.3s ease-in-out',
        marginTop: '3rem',
        margin: '0.5rem',
        borderRadius: '1rem',
        
        '&:hover': {
            cursor:'pointer',
            boxShadow: '3px 8px 15px 0px #cec5c5',
            opacity: '1',
            background: 'linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)',
            color: '#fff',
            "& $TabContainerIcons": {
                color: '#fff',
                padding: '0rem 0rem 1rem 0.7rem',
            }
        },

    },
    TabContainerTitle:{
        fontFamily: " 'Ubuntu', sans-serif",
        fontWeight:'bold',
    },
    TabContainerPara: {
        fontSize: '1rem',
        // fontFamily: "'Manrope', sans-serif",
        fontFamily: " 'Lora', serif",
        fontSize:'14px'


    },
  
    TabContainerIcons: {
        color: '#3D8ED7',
        padding: '0rem 0rem 1rem 0.7rem',
    }
}))

const Services = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <Grid container>
                    {services.map((data) => <><Grid item xs={12} sm={6} md={4} lg={4}>
                      
                        <Link to={data.Link} style={{textDecoration:'none', color:'#000'}}>
                        <Box className={classes.TabContainer}>
                            <Typography className={classes.TabContainerIcons}>{data.icon}</Typography>
                            <Typography variant='h6' className={classes.TabContainerTitle}>{data.title}</Typography>
                            <Typography className={classes.TabContainerPara}>{data.description}</Typography>
                        </Box>
                        </Link>
                    </Grid></>)}
                </Grid>
            </Container>

        </>
    )
}

export { Services }

const Technologies = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth='lg'>
                <Grid container>
                    {technologies.map((data) => <><Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to={data.Link} style={{textDecoration:'none', color:'#000'}}>
                        <Box className={classes.TabContainer}>
                            <Typography className={classes.TabContainerIcons}>{data.icon}</Typography>
                            <Typography variant='h6' className={classes.TabContainerTitle}>{data.title}</Typography>
                            <Typography className={classes.TabContainerPara}>{data.description}</Typography>
                        </Box>
                        </Link>
                    </Grid></>)}
                </Grid>
            </Container>
        </>)
}
export { Technologies }

const Industries = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='lg'>
                <Grid container>
                    {industries.map((data) => <><Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to={data.Link} style={{textDecoration:'none', color:'#000'}}>
                        <Box className={classes.TabContainer}>
                            <Typography className={classes.TabContainerIcons}>{data.icon}</Typography>
                            <Typography variant='h6' className={classes.TabContainerTitle}>{data.title}</Typography>
                            <Typography className={classes.TabContainerPara}>{data.description}</Typography>
                        </Box>
                        </Link>
                    </Grid></>)}
                </Grid>
            </Container>

        </>
    )
}

export { Industries }