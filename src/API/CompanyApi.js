import { ComapnayBanner } from "../images/images";
import { CmmiImage } from "../images/images";
import { Union } from "../images/images";
import { LogoImage } from "../images/images";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GroupIcon from "@material-ui/icons/Group";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LanguageIcon from "@material-ui/icons/Language";
const CompanyData = [
  {
    name: "company",
    HeroBanner: [
      {
        name: "company",
        Page: "Company",
        title: "20 Years of Development, Testing, and Quality",
        para: "Quality is what truly matters. From who we hire to how we work — our company is built around quality code, good communication, and customer obsession.",
        img: ComapnayBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],

    skill: [
      {
        PerformanceTitle: "Quality Centred. Customer Obsessed.",

        PerformancePara:
          "As a software outsourcing company with 20 years of experience in delivering complex, custom solutions, we have built strong expertise in reliable architecture, transparent communication with clients and efficient development practices. Our software engineers have a proven track record of creating successful digital products and services from simple websites to feature-rich mobile apps to powerful  ERP and CMS tools.",
        PerformanceList: [
          {
            Numbers: "78%",
            PerformanceListTitle: "Returning Clients",
            PerformanceListPara:
              "Most of our clients prefer to improve current software and launch new projects with Senwell",
          },
          {
            Numbers: "84%",
            PerformanceListTitle: "Employee Retention",
            PerformanceListPara:
              "Our developers and QA engineers have been working with Senwell for an average of 6+ years.",
          },
          {
            Numbers: "93%",
            PerformanceListTitle: "Experienced Staff",
            PerformanceListPara:
              "We only recruit Junior engineers when a senior-level mentor is available for 1-on-1 mentorship.",
          },
        ],
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Do you care about the quality? Run a test project with Senwell to see if we’re the right fit!",
        Button: "GetInTouch",
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
        para: "We want you to find a team rapidly and get straight to turning your vision into a reality.",
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
        para: "explicit and consistent communication, flexible pricing, and full dedication to your success.",
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
        para: "Beyond QA, we ensure your code is immaculate  and free of technical debt.",
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
        para: "There’s no challenge we can’t handle with confidence and great courage.",
      },
    ],
    Forms: [
      {
        formTitle: "Get a quote today!",
        formSubtitle: "Enter your project details.",
      },
    ],
  },
];
export { CompanyData };

const HeroBannerSubsection = [
  {
    icon: <GroupIcon style={{ fontSize: "2.5rem", color: "#3D8ED7" }} />,
    title: "Time and Material",
    subtitle:
      "Best suited for complex, long-term projects with unclear requirements.",
    para: "T&M’s superb flexibility enables you to react to market changes with immediate requirement modifications at any point of development. You get a functioning version of your solution with each iteration and can stop the contract at any time you’re satisfied with the outcome.",
    list1: "Changeable workflow and predictable budgeting",
    list2: "High flexibility and change control at low risk",
    list3: "Available at any stage of software development life cycle",
    list4: "High control over requirements and scope",
  },
  {
    icon: <WatchLaterIcon style={{ fontSize: "2.5rem", color: "#3D8ED7" }} />,
    title: "Dedicated Team",
    subtitle:
      "Best suited for mid-size or enterprise projects and business expansion.",
    para: "You get a full team of professionals (including project managers, designers, developers, business analysts, QA engineers) that you can easily scale as your project develops. The size of your team, development methodology, scope, and deadlines are under your full control.",
    list1: "Predictable budgeting and easy costs tracking",
    list2: "Full team commitment and accountability",
    list3: "Flexible level of control over the project",
    list4: "Fast resource scaling and replacement",
  },
  {
    icon: <LanguageIcon style={{ fontSize: "2.5rem", color: "#3D8ED7" }} />,
    title: "Staff Augmentation",
    subtitle:
      "Works miracles for development projects of any complexity and scale.",
    para: "Don’t waste months on scouting, recruiting, and onboarding! It’s a perfect option for projects with in-house teams that need specific roles to be filled by experts with relevant experience and skills. You provide the requirements and get a perfect candidate for the position.",
    list1: "Instant access to talent with fast onboarding",
    list2: "Full control over the team from start to finish",
    list3: "Predictable cost with no in-house labor overheads",
    list4: "No infrastructure or administrative investment",
  },
];
export { HeroBannerSubsection };
