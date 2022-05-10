import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { setTeam } from "../../../redux";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: "1rem 0px",
    fontSize: "32px",
    lineHeight: "44px",
  },
  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
  },
  gridContainer: {
    margin: "3rem 0px 5rem !important",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  gridItem: {
    width: "45%",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0.5rem 0px",
    },
  },
  card: {
    border: "2px solid rgb(43,162, 222)",
  },
  cardBorder: {
    border: "2px solid transparent",
    "&:hover": {
      border: "2px solid rgb(43,162, 222)",
    },
  },
  gridHeading: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0px",
  },
  cardContent: {
    padding: "0px 1rem",
  },
  cardHeading: {
    fontSize: "18px !important",
    fontWeight: "bold",
    color: "black",
  },
  icon: {
    color: "rgb(43,162, 222)",
    marginRight: "1rem",
    fontSize: "30px !important",
  },
}));

const teamData = {
  title: "Team Calculator",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident asperiores velit laborum alias repudiandae ullam? Reiciendis quia possimus blanditiis ratione provident non, ullam error voluptas ducimus, voluptatum aut officiis?",
};

const projectData = {
  title: "Project Calculator",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident asperiores velit laborum alias repudiandae ullam? Reiciendis quia possimus blanditiis ratione provident non, ullam error voluptas ducimus, voluptatum aut officiis?",
};

const ChooseModal = (props) => {
  const classes = useStyles();
  // const [teamData, projectData] = chooseModalData;

  const [paramData, setParamData] = useState();

  useEffect(() => {
    setParamData(teamData);
  }, []);

  return (
    <Container maxWidth="lg">
      <h1 className={classes.heading}>01. Choose your Collaboration Modal</h1>
      <p className={classes.subHeading}>
        Choose between a project-based pricing model or hiring a dedicated team
        for your project.
      </p>

      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <Card
            className={
              props.activeComp === "team" ? classes.card : classes.cardBorder
            }
            onClick={() => {
              props.setActiveComp("team");
              // getTeamsData(teamData);
              setParamData(teamData);
              props.setTeam(paramData);
            }}
          >
            <CardContent className={classes.cardContent}>
              <div className={classes.gridHeading}>
                <GroupsIcon className={classes.icon} />
                <Typography className={classes.cardHeading}>
                  {teamData && teamData.title}
                </Typography>
              </div>
              <Typography variant="body2" color="black">
                {teamData && teamData.text}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={classes.gridItem}>
          <Card
            className={
              props.activeComp === "project" ? classes.card : classes.cardBorder
            }
            onClick={() => {
              props.setActiveComp("project");
              // getProjectsData(projectData);
              setParamData(projectData);
              props.setTeam(projectData);
            }}
          >
            <CardContent className={classes.cardContent}>
              <div className={classes.gridHeading}>
                <BusinessCenterIcon className={classes.icon} />
                <Typography className={classes.cardHeading}>
                  {projectData && projectData.title}
                </Typography>
              </div>
              <Typography variant="body2" color="black">
                {projectData && projectData.text}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    paramData: state.paramData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTeam: function (paramData) {
      dispatch(setTeam(paramData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseModal);
