import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PaymentIcon from "@material-ui/icons/Payment";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ComputerIcon from "@material-ui/icons/Computer";
import FlipToBackIcon from "@material-ui/icons/FlipToBack";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import InputIcon from "@material-ui/icons/Input";

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
  // {
  //   title: "Awards & Testimonials",
  //   Link: '/company',
  // }
];

export const Techmenu = [
  {
    icon: <ComputerIcon />,
    title: "Front-End",
    Link: "/hire-developers/front-end",

    items: [
      {
        title: "React",
        Link: "/hire-developers/react",
      },
      {
        title: "Angular",
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
        title: "Node js",
        Link: "/hire-developers/nodejs",
      },
      {
        title: ".Net",
        Link: "/hire-developers/dot-net",
      },
    ],
  },
  {
    icon: <PhoneAndroidIcon />,
    title: "Mobile",
    Link: "/hire-developers/mobile",

    items: [
      {
        title: "React Native",
        Link: "/hire-developers/react-native",
      },
    ],
  },

  {
    title: "Quality Assurance",
    icon: <TrendingUpOutlinedIcon />,
    Link: "/hire-developers/qa",
  },
  {
    title: "Business And Content Management",
    Link: "/hire-developers/cms-crm-erp",
  },
];

export const ServiceMenu = [
  {
    title: "Design",
    Link: "/services/ui-ux-design",
  },
  {
    title: "Development",
    Link: "/services/custom-software-development",
    items: [
      {
        title: "Web Development",
        Link: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        Link: "/services/application-development",
      },
      {
        title: "Product Development",
        Link: "/services/product-development",
      },
      {
        title: "MVP Development",
        Link: "/services/mvp-development",
      },
      {
        title: "DevOps",
        Link: "/services/devops",
      },
    ],
  },
  {
    title: "Testing & QA",
    Link: "/services/testing-and-qa",
  },
  {
    title: "IT Consulting",
    Link: "/services/it-consulting",
  },
  {
    title: "Dedicated Development Teams",
    Link: "/services/dedicated-development-teams",
  },
];
export const IndustriesMenu = [
  {
    title: "eCommerce",
    Link: "/industries/ecommerce",
  },
  {
    title: "Healthcare",
    Link: "/industries/healthcare",
  },
  {
    title: "Entertainment",
    Link: "/industries/media-and-entertainment",
  },
  {
    title: "Finance & Banking",
    Link: "/industries/banking-and-finance",
  },
  {
    title: "StartUps",
    Link: "/industries/startups",
  },
  {
    title: "Blockchain",
    Link: "/industries/blockchain",
  },
  {
    title: "Telecom",
    Link: "/industries/telecom",
  },
];

export const IndustriesMegamenu = [
  {
    title: "Aerospace & Defense",
    Link: "/aerospace-and-defense",
  },
  {
    title: "Automotive",
    Link: "/automotive",
  },
  {
    title: "Communications",
    Link: "/communications",
  },
  {
    title: "education",
    Link: "/education",
  },
  {
    title: "Platforms & Software Products",
    Link: "/platforms-and-software-products",
  },
  {
    title: "Industrial & Process Manufacturing",
    Link: "/industrial-and-process-manufacturing",
  },
  {
    title: "Travel & Transportation",
    Link: "/travel-and-transportation",
  },
];

export const contact = [
  {
    title: "Contact US",
    Link: "/contact",
  },
];
