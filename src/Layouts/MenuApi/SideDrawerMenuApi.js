import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PaymentIcon from "@material-ui/icons/Payment";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ComputerIcon from "@material-ui/icons/Computer";
import FlipToBackIcon from "@material-ui/icons/FlipToBack";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import InputIcon from "@material-ui/icons/Input";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import TimelineIcon from "@material-ui/icons/Timeline";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import NoteIcon from "@material-ui/icons/Note";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { Link } from "react-router-dom";
import React from "react";
export const menu = [
  {
    icon: <PaymentIcon />,
    title: "Pricing",
    Link: "/pricing",
    items: [],
  },
  {
    icon: <BusinessCenterIcon />,
    title: "Business Models",
    Link: "/outsourcing-pricing-models",
    items: [],
  },
  {
    icon: <ImportContactsIcon />,
    title: "Career",
    Link: "/careers",
    items: [
      {
        title: "Culture & Opportunities",
        Link: "/careers/opportunity",
      },
    ],
  },

  {
    icon: <InfoIcon />,
    title: "About Us",
    Link: "/company",
  },
];
export const ServiceMenu = [
  {
    title: "ServiceMenu",
    items: [
      {
        icon: <BorderColorIcon />,
        title: "Design",
        Link: "/services/ui-ux-design",
      },
      {
        icon: <DeveloperModeIcon />,
        title: "Development",
        Link: "/services/custom-software-development",
        items: [
          {
            title: "Web Development",
            to: "/thedowtheory",
            Link: "/services/web-development",
          },
          {
            title: "Mobile App Development",
            to: "/thedowtheory",
            Link: "/services/application-development",
          },
          {
            title: "Product Development",
            to: "/thedowtheory",
            Link: "/services/product-development",
          },
          {
            title: "MVP Development",
            to: "/thedowtheory",
            Link: "/services/mvp-development",
          },
          {
            title: "DevOps",
            to: "/thedowtheory",
            Link: "/services/devops",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Testing & QA",
            Link: "/services/testing-and-qa",
          },
          {
            icon: <WorkOutlineIcon />,
            title: "IT Consultiong",
            Link: "/services/it-consulting",
          },
          {
            icon: <PublicIcon />,
            title: "Dedicated Development Teams",
            Link: "/services/dedicated-development-teams",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        icon: <BorderColorIcon />,
        title: "Design",
        Link: "/services/ui-ux-design",
      },
      {
        icon: <DeveloperModeIcon />,
        title: "Development",
        Link: "/services/custom-software-development",
        items: [
          {
            title: "Web Development",
            to: "/thedowtheory",
            Link: "/services/web-development",
          },
          {
            title: "Mobile App Development",
            to: "/thedowtheory",
            Link: "/services/application-development",
          },
          {
            title: "Product Development",
            to: "/thedowtheory",
            Link: "/services/product-development",
          },
          {
            title: "MVP Development",
            to: "/thedowtheory",
            Link: "/services/mvp-development",
          },
          {
            title: "DevOps",
            to: "/thedowtheory",
            Link: "/services/devops",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Testing & QA",
            Link: "/services/testing-and-qa",
          },
          {
            icon: <WorkOutlineIcon />,
            title: "IT Consultiong",
            Link: "/services/it-consulting",
          },
          {
            icon: <PublicIcon />,
            title: "Dedicated Development Teams",
            Link: "/services/dedicated-development-teams",
          },
        ],
      },
    ],
  },
  {
    title: "Technologies",
    items: [
      {
        icon: <ComputerIcon />,
        title: "Front-End",
        Link: "/hire-developers/front-end",
        items: [
          {
            title: "React",
            to: "/thedowtheory",
            Link: "/hire-developers/react",
          },
          {
            title: "Angular",
            to: "/thedowtheory",
            Link: "/hire-developers/angular",
          },
        ],
      },
      {
        icon: <FlipToBackIcon />,
        title: "Back-end",
        Link: "/hire-developers/back-end",
        items: [
          {
            title: "Node.js",
            to: "/thedowtheory",
            Link: "/hire-developers/nodejs",
          },
          {
            title: ".Net",
            to: "/thedowtheory",
            Link: "/hire-developers/dot-net",
          },
        ],
      },
      {
        icon: <CheckCircleOutlineIcon />,
        title: "Testing & QA",
      },
      {
        icon: <PhoneAndroidIcon />,
        title: "Mobile",
        Link: "/hire-developers/mobile",
        items: [
          {
            title: "React Native",
            to: "/thedowtheory",
            Link: "/hire-developers/react-native",
          },
        ],
      },
      {
        icon: <InputIcon />,
        title: "Quality Assurance",
        Link: "/hire-developers/qa",
      },
      {
        icon: <TrendingUpOutlinedIcon />,
        title: "Business & Management",
        Link: "/hire-developers/cms-crm-erp",
      },
    ],
  },
  {
    title: "Industries",
    items: [
      {
        icon: <ShoppingCartIcon />,
        title: "eCommerce",
        Link: "/industries/ecommerce",
      },
      {
        icon: <DonutLargeIcon />,
        title: "Healthcare",
        Link: "/industries/healthcare",
      },
      {
        icon: <PlayCircleFilledIcon />,
        title: "Entertainment",
        Link: "/industries/media-and-entertainment",
      },
      {
        icon: <LocalAtmIcon />,
        title: "Finance & Banking",
        Link: "/industries/banking-and-finance",
      },
      {
        icon: <DoneAllIcon />,
        title: "StartUps",
        Link: "/industries/startups",
      },
      {
        icon: <TimelineIcon />,
        title: "Blockchain",
        Link: "/industries/blockchain",
      },
      {
        icon: <PhoneIcon />,
        title: "Telecom",
        Link: "/industries/telecom",
      },
    ],
  },
  {
    title: "Portfolio",
    Link: "/portfolio",
  },
  {
    title: "Contact",
    Link: "/contact",
  },
];
