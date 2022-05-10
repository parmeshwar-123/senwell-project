import { DesignHeroBanner } from "../images/images";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { huffpostImg } from "../images/images";
import { Dashlane } from "../images/images";
import { Code_Better } from "../images/images";
import { Distractify } from "../images/images";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { DiJavascript } from "react-icons/di";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
const DevelopmentData = [
  {
    name: "custom-software-development",
    HeroBanner: [
      {
        name: "custom-software-development",
        Page: " Custom software development",
        section: "Services",
        title: "Custom Software Development Services",
        Breadcrumbs: "services",
        Link: "/services",
        para: "Our custom software development team can help you create troublesome solutions, breathtaking web apps, and business software that will help your enterprise meet key objectives.",
        button: "Get in Touch",
        img: DesignHeroBanner,
      },
    ],
    GetInTouch: [
      {
        GetInTouchImage: "",
        GetInTouchTitle:
          "Ready to start on your development or testing project? We are!",
        Button: "Get In Touch",
      },
    ],
    Benefits: [
      {
        title: "Ideal Software",
        Benefitstitle: "Development Solutions",
        BenefitsofDevelopmentWithSenwell: [
          {
            Number: "01",
            title: "Tailored Processes",
            description:
              "We are Agile, but our developers can adapt to development methodologies that fit best with your business, industry, or preferences. Whatever the process, we are always concentrate on the result.",
          },
          {
            Number: "02",
            title: "Professionals Only",
            description:
              "Your project will be delivered by middle- or senior-level software developers only. You will advantage from years of experience and experts in the technologies used to create your software and applications.",
          },
          {
            Number: "03",
            title: "Transparent Code Monitoring",
            description:
              "In addition to comprehensive software testing and quality assurance, we will also provide detailed code analytics to help you ensure that your codebase is reliable, clean, and free of technical debt..",
          },
          {
            Number: "04",
            title: "Fast Start",
            description:
              "All of our internal processes are built around quality, the ability to begin work on a new project quickly. Our team begins drafting development plans instantly as you get in touch.",
          },
          {
            Number: "05",
            title: "Instant Resource Replacement",
            description:
              "We handpick the best developers for your project, but with a record of 280+ engineers, we’re always ready to change your development lineup.",
          },
          {
            Number: "06",
            title: "Pilot Projects",
            description:
              "Our team will gladly outright a pilot project to help you make sure that you’ve made the right choice in choosing Senwell as your software development service provider.",
          },
        ],
      },
    ],
    TechnologiesExpertiesTitle: "Our Technology Expertise",
    TechnologiesExpertiesPara:
      "When outsourcing software development to Senwell, be certain that you’ll work with only proven technologies, development practices. Our engineers combine niche expertise in a broad range of programming languages and tools with broad domain knowledge to help pick the right tech stack for your business needs.",

    TechnologiesExperties: [
      {
        icon: <DiJavascript className="icon" style={{ i: "#4eb7ff" }} />,
        title: "JavaScript",
      },
      {
        icon: <FaAngular className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Angular",
      },
      {
        icon: <FaReact className="icon" style={{ i: "#4eb7ff" }} />,
        title: "React",
      },
      {
        icon: <SiTypescript className="icon" style={{ i: "#4eb7ff" }} />,
        title: "TypeScript",
      },
      {
        icon: <FaVuejs className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Vue.Js",
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Run a pilot project to ensure Senwell Solutions’s React outsourcing expertise is exactly what your business needs.",
        Button: "Get In Touch",
      },
    ],

    ProjectPortfollio: [
      {
        title: "HuffPost",
        image: huffpostImg,
        para: "High traffic is both the main goal and challenges for the news websites.we helped HuffPost build a site and app that are increadibly convenient to use and capable of sustaining the heavy usage load.Having optimized the front-end and back-end of HuffPost,our client can be sure that their message delivery system can send 150,000 messages per second",
      },
      {
        title: "Dashlane",
        image: Dashlane,
        para: "  Security is important for individuals as well as businesses. Our QA engineers helped Dashlane ensure that their password manager and digital wallet will remain fully functional on new versions of OS, browsers, and devices. Now our client knows that their solution works perfectly under all circumstances.",
      },
      {
        title: "Code Better",
        image: Code_Better,
        para: " We developed an effective web application that helps developers to write semantically correct code and form useful coding habits with better practices, superior tools, and proven methodologies.The application provides thorough data analysis and real-time statistics as well as features such as sorting errors by priority. The app is compatible with all popular desktop and mobile devices.",
      },
      {
        title: "Distractify",
        image: Distractify,
        para: "  New businesses must strike while the iron is hot. Chasing after a fast time-to-market can make your business vulnerable to performance risks. We helped Distractify perform a fast but extremely thorough Quality Assurance process before they hit “publish” on their first viral story.",
      },
    ],
    whysenwell: [
      {
        icon: (
          <FlashOnIcon
            style={{
              color: "#3D8ED7",
              paddingBottom: "1rem",
              fontSize: "2.5rem",
            }}
          />
        ),
        title: "Start fast. Finish with confidence.",
        para: "Our goal is to help you launch quickly, make sure you’ll want to work with us again.",
      },
      {
        icon: (
          <SearchIcon
            style={{
              color: "#3D8ED7",
              paddingBottom: "1rem",
              fontSize: "2.5rem",
            }}
          />
        ),
        title: "100% Transparency",
        para: "explicit and consistent communication, flexible pricing, and full dedication to your success",
      },
      {
        icon: (
          <StarIcon
            style={{
              color: "#3D8ED7",
              paddingBottom: "1rem",
              fontSize: "2.5rem",
            }}
          />
        ),
        title: "Excellent Code Quality",
        para: "We check the quality of our code at all times of development to ensure best results.",
      },
      {
        icon: (
          <LocationOnIcon
            style={{
              color: "#3D8ED7",
              paddingBottom: "1rem",
              fontSize: "2.5rem",
            }}
          />
        ),
        title: "Cross-domain expertise",
        para: "Require services beyond Development services? We will have you covered.",
      },
    ],
    Forms: [
      {
        formTitle: "Write to us.",
        formSubtitle: "Tell us about your project.",
      },
    ],
  },
];
export { DevelopmentData };
