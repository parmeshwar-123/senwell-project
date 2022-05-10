import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import Consulting from "../../images/Industries/aroplane.jpg";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import InfoModal from "./Modal";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "2rem 2rem",
  },
  media: {
    height: 200,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  maintitle: {
    padding: "2rem 2rem",
    fontFamily: "'Ubuntu', sans-serif",
  },
  mainWrapper: {
    padding: "2rem 1rem",
  },
  title: {
    fontFamily: "'Alatsi', sans-serif !important",
  },
  para: {
    fontFamily: "'Alatsi', sans-serif !important",
  },
  modaltitle: {
    color: "#000",
  },
}));

export default function MediaCard({ WhatWeDo }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [sendData, setSendData] = React.useState({});

  const handleOpen = (value) => {
    setOpen(true);
    setSendData(value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container maxWidth="xxl" className={classes.mainWrapper}>
        <Container maxWidth="lg">
          {WhatWeDo.map((data) => (
            <>
              <Typography variant="h4" className={classes.maintitle}>
                {" "}
                What We Do
              </Typography>
              <Grid container>
                {data.services.map((value, index) => (
                  <>
                    <Grid items xs={12} sm={6} md={4} lg={4}>
                      <Card
                        className={classes.root}
                        onClick={() => handleOpen(data.services[index])}
                      >
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={value.img}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h2"
                              className={classes.title}
                            >
                              {value.title}
                            </Typography>
                            <p className={classes.para}>{value.para}</p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <InfoModal
                        open={open}
                        close={handleClose}
                        data={sendData}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </Container>
    </>
  );
}
