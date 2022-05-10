import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  heading: {
    marginBottom: "2rem",
    fontSize: "32px",
    lineHeight: "24px",
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Alatsi, sans-serif !important",
  },
  para: {
    fontSize: "18px",
    lineHeight: "21px",
    fontFamily: "Alatsi, sans-serif !important",
  },
  closeIcon: {
    position: "absolute",
    top: "0",
    right: "0",
    cursor: "pointer",
    color: "rgb(32,142, 255)",
  },
  imgBox: {
    "& img": {
      borderRadius: "10px",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const EstimateForm = ({ open, close, data }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container maxWidth="lg">
      <div className={classes.formContainer}>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className={classes.heading}>{data.exploretitle}</h1>
            <Grid container spacing={5} className={classes.infoWrapper}>
              <Grid item xs={6} sm={6} className={classes.imgBox}>
                <img src={data.img} alt="" />
              </Grid>
              <Grid item xs={6} sm={6} className={classes.textBox}>
                <p className={classes.para}>{data.exploresubtitle}</p>
                <p className={classes.para}>{data.explorepara}</p>
              </Grid>
              <CloseIcon
                className={classes.closeIcon}
                onClick={() => close(false)}
              />
            </Grid>
          </Box>
        </Modal>
      </div>
    </Container>
  );
};

export default EstimateForm;
