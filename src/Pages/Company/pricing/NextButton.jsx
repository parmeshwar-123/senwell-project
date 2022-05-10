import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BoltIcon from "@mui/icons-material/Bolt";
import EstimateForm from "./EstimateForm";

const useStyles = makeStyles((theme) => ({
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "94%",
    margin: "3rem auto",
  },
  nextButton: {
    fontSize: "20px",
    backgroundColor: "rgb(43,162, 222)",
    color: "white",
    border: "3px solid rgb(43,162, 222)",
    borderRadius: "50px",
    padding: "8px 35px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: "rgb(43,162, 222)",
      transition: "0.5s",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5px 10px",
      fontSize: "16px",
    },
  },
  quickEstimate: {
    display: "flex",
    alignItems: "center",
  },
  estimateIcon: {
    fontSize: "30px !important",
    color: "rgb(43,162, 222)",
    width: "4rem",
    cursor: "pointer",
    transition: "1s",
  },
  estimateText: {
    fontSize: "16px",
    color: "black",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      color: "rgb(43,162, 222)",
    },
  },
}));

const NextButton = ({
  next,
  label,
  step,
  margin,
  getEstimate,
  businessEmail,
  activeStep,
  stepCount,
  setStepCount,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = (close) => {
    setOpen(close);
  };
  return (
    <>
      <div
        className={classes.bottomContainer}
        style={{ margin: margin ? `${margin}px 0px` : "" }}
      >
        <button onClick={next} className={classes.nextButton}>
          {step || getEstimate ? label : "Next Step"}
        </button>

        <div className={classes.quickEstimate}>
          {businessEmail ? (
            businessEmail
          ) : (
            <>
              <BoltIcon className={classes.estimateIcon} />
              <p className={classes.estimateText} onClick={openModal}>
                {" "}
                Get a quick Estimate!
              </p>
            </>
          )}
        </div>
      </div>
      {open && <EstimateForm openModal={open} closeModal={closeModal} />}
    </>
  );
};

export default NextButton;
