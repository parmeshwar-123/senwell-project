import { CmmiImage } from "../images/images";
import { Union } from "../images/images";
import { LogoImage } from "../images/images";
import { WebDevelopmentBanner } from "../images/images";
import { impresNewClientFlowImg } from "../images/images";
import { SiAdobephotoshop } from "react-icons/si";
import mobileAppImage from "../images/Services/mobileAppImage.jpg";
import { huffpostImg } from "../images/images";
import { Dashlane } from "../images/images";
import { Code_Better } from "../images/images";
import { Distractify } from "../images/images";
import { Ecommerce } from "../images/images";
import { TestingBanner } from "../images/images";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiSelenium } from "react-icons/si";

import { FaAndroid } from "react-icons/fa";
import { DiSwift } from "react-icons/di";
import { DiIonic } from "react-icons/di";
import { SiKotlin } from "react-icons/si";
import { FaFirefoxBrowser } from "react-icons/fa";
import { SiJunit5 } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";
import "../App.css";
import { DesignHeroBanner } from "../images/images";
import { FaJenkins } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiAnsible } from "react-icons/si";
import { Android } from "@material-ui/icons";
import ITconsulting from "../images/Services/ITconsulting.png";
import improvementImage from "../images/Services/improvementImage.jpg";
import AngularImg from "../images/Services/AngularImg.png";
import MVPimg from "../images/Services/MVPimg.png";
import DevOps from "../images/Services/DevOps.jpg";
const Services = [
  {
    name: "web-development",
    HeroBanner: [
      {
        name: "web-development",
        Page: "Web Development",
        title: "Expert Web Development Services",
        breadcrums: "services",
        Link: "/services",
        para: "Help your business to reach new digital heights with a powerful web solution reinforced and optimized by your friendly neighborhood web development outsourcing company.",
        button: "Hire Now",
        img: WebDevelopmentBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],
    GetInTouchTitle:
      "Ready to start on your development or testing project? We are!",
    Button: "GetInTouch",
    formTitle: "Get a quote today!",
    formSubtitle: "Enter your project details.",
    ImpressYourClientTitle: "Impress new Clients",
    ImpressYourClientPara:
      "Bring your business online with trustworthy web development services. protract your reach with engaging web portals, serve your customers with custom-tailored applications, and close deals with robust marketplaces, Show customers your best side with the appearance and experiences they will enjoy from landing to checkout.",
    ImpressYourClientImage: impresNewClientFlowImg,
    ImpressYourClientPoints: [
      {
        li: "corporate websites",
      },
      {
        li: "eCommerse Platforms",
      },
      {
        li: "Sass & cloud Solutions",
      },
      {
        li: "media Portals",
      },
    ],
    DevelopmentSolutionsTitle: "Ideal Web Development Solutions",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "Websites & Web Apps",
        AccordianDetails:
          "Build your online image with engaging looks, natural layouts, and compelling user experience.",
        List1: "corporate websites",
        List2: "Landing Pages",
        List3: " Progressive Web Apps",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "API & Backend Development",
        AccordianDetails:
          "Complete your website or web application with seamless performance and efficient data processing.",
        List1: "Web services API (REST/SOAP)",
        List2: "Library based API",
        List3: "Socket/Web Socket API",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "CRM/CMS/ERP customization",
        AccordianDetails:
          "Custom-tailored management tools to fulfil your unique business needs and optimize processes.",
        List1: "Custom CMS for Your Website",
        List2: "ERP and CRM Systems Using Odoo",
        List3: "Third-party Integrations to Existing System",
      },
      {
        ariaControls: "panel4a-content",
        id: "panel4a-header",
        Number: "04",
        AccordianSummary: "SaaS & Cloud Services",
        AccordianDetails:
          " Our experts can help you build, set up, or effectively move your services and operations to the cloud. ",
        List1: "ATS",
        List2: "Betting service",
        List3: " Progressive Web Apps",
        List4: "Financial services",
      },
      {
        ariaControls: "panel5a-content",
        id: "panel5a-header",
        Number: "05",
        AccordianSummary: "eCommerce",
        AccordianDetails:
          "Start an online store quickly and easily or upgrade an existing one to your customers’ expectations. ",
        List1: "Marketplace",
        List2: "Shopify, Magento, WooCommerce, nopCommerce",
        List3: "Payment Gateways",
      },
      {
        ariaControls: "panel6a-content",
        id: "panel6a-header",
        Number: "05",
        AccordianSummary: "API Integratione",
        AccordianDetails:
          "We can help you quickly and seamlessly integrate third-party APIs and optimize their performance.",
        List1: "Social Network API Integration",
        List2: "Payment Gateways",
        List3: "Authentication APIs",
      },
    ],
    TechnologiesExpertiesTitle: "Our Technology Expertise",
    TechnologiesExpertiesPara:
      "Our expertise does not end with Angular development outsourcing. Our skills and experience cover almost every programming language, framework, and library, both substantiated  by years and recently introduced by industry leaders like Google or Microsoft.",
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
        icon: <FaNode className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Node.js",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: "Make your business accessible globally.",
        Button: "Get a Quote",
        image: improvementImage,
        para: "Present users and visitors with a positive, memorable experience of interacting with your business online. How? Hire a web development outsourcing company with two decades of experience in the field!",
      },
    ],

    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
      },
    ],
    Forms: [
      {
        formTitle: "Let's talk",
        formSubtitle: "Tell us about your project. Let’s get to work!",
      },
    ],
  },

  {
    name: "application-development",
    HeroBanner: [
      {
        name: "application-development",
        Page: "Application Development",
        title: "Mobile Application Development Experts",
        breadcrums: "services",
        Link: "/services",
        para: "Solid tech skilled, nearly two decades of experience, and cross-domain background make Senwell the best choice for custom mobile app development services.",
        button: "Hire Now",
        img: WebDevelopmentBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],
    ImpressYourClientTitle: "Dazzle Your Users",
    ImpressYourClientPara:
      "Client-facing software can either save or drown your business: a good mobile app will generate leads and drive sales, while a low-quality solution can scare people away. Our mobile application development services deliver top-notch apps that help companies prosper",
    ImpressYourClientImage: impresNewClientFlowImg,
    ImpressYourClientPoints: [
      {
        li: "Native & Cross-Platform Apps",
      },
      {
        li: "Mobile UI/UX Design",
      },
      {
        li: "AR Applications",
      },
      {
        li: "APIs and Cloud solutions",
      },
      {
        li: "mCommerce apps",
      },
    ],
    DevelopmentSolutionsTitle: "Superb Mobile App Development Services",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "Native Application Development",
        AccordianDetails:
          "No app performs as properly as a native mobile application built specifically for iOS or Android.",
        List1: "iOS Applications",
        List2: "Android Applications",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "Cross-Platform & Hybrid Applications",
        AccordianDetails:
          "Hybrid mobile development allows using one app on disparate platforms, from smartphones to PCs.",
        List1: "React Native development",
        List2: "Xamarin development",
        List3: "Flutter development",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "Application Porting",
        AccordianDetails:
          "Already enjoying the achievement of your app on a platform? Port it to other platforms to expand your audience!",
        List1: "Web App to Mobile App porting",
        List2: "iOS to Android porting",
        List3: "Android to iOS porting",
      },
      {
        ariaControls: "panel4a-content",
        id: "panel4a-header",
        Number: "04",
        AccordianSummary: "Mobile SDK Development",
        AccordianDetails:
          "SDK contain things like libraries, documents, and integration tools for custom app development.",
        List1: "IoT integrations",
        List2: "Integration of Geo, Accelerometer, and other sensors",
        List3: " Bluetooth API",
        List4: "Use of custom sensors",
        List5: "AR/VR implementation",
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Need a mobile application development partner to turn your idea into a noticeable mobile solution?",
        Button: "GetInTouch",
      },
    ],
    TechnologiesExpertiesTitle: "Technology We Mastered",
    TechnologiesExpertiesPara:
      "When deciding on programming languages,  tools for another mobile app development project, we always focus on future code quality, product value for the market, and budget frames to stay in. That’s why mobile solutions we release always conform to industry standards as well as reflect every penny invested in development.",
    TechnologiesExperties: [
      {
        icon: <DiSwift className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Swift",
      },
      {
        icon: <DiIonic className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Ionic",
      },
      {
        icon: <FaReact className="icon" style={{ i: "#4eb7ff" }} />,
        title: "React Native",
      },
      {
        icon: <FaVuejs className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Vue js",
      },
      {
        icon: <SiKotlin className="icon" style={{ i: "#4eb7ff" }} />,
        title: "SiKotlin",
      },
      {
        icon: <FaAndroid className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Anodroid",
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
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: "We’re ready to start. Are you?",
        Button: "Start a project",
        image: mobileAppImage,
        para: "Tell us what type of mobile application you’ve got in mind. From researching the app’s market niche to designing, coding, and then testing it — the remaining is the job of our mobile application development services.",
      },
    ],
    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
      },
    ],
    Forms: [
      {
        formTitle: "Get a quote today!",
        formSubtitle: "Enter your project details.",
      },
    ],
  },
  {
    name: "it-consulting",
    HeroBanner: [
      {
        name: "it-consulting",
        Page: "IT Consulting",
        title: "IT Consulting Services",
        breadcrums: "Services",
        Link: "/services",
        para: "Whether you want to learn how to efficiently launch a software project or find ways to improve your internal processes, request a free IT consultation from our experts.",
        button: "Request free call",
      },
    ],

    ImpressYourClientTitle: "Start Development Quickly",
    ImpressYourClientPara:
      "Don’t let the absence of technical background stop you from starting a troublesome business. Our IT consulting services can help you determine your idea’s viability, create a development roadmap, and assist you in creating a prototype or MVP that will help you validate your ideas.",
    ImpressYourClientImage: impresNewClientFlowImg,
    ImpressYourClientPoints: [
      {
        li: "CTO as a Service",
      },
      {
        li: "Market research",
      },
      {
        li: "Creating development roadmaps",
      },
      {
        li: "Guided MVP creation",
      },
    ],
    DevelopmentSolutionsTitle: "IT Consulting Services  ",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "SDLC Workflow Optimization",
        AccordianDetails:
          " Make sure every step of your development lifecycle is aimed to minimizing costs and increasing output. We can help your team run like a fine-tuned Swiss watch.",
        List1: "Development & QA process audit",
        List2: "Creating thorough documentation",
        List3: "Improving onboarding practices",
        List4: "Agile & Lean methodology coaching",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "Project Planning",
        AccordianDetails:
          " Create a roadmap for transforming your idea into a working product used by millions. Our product development consultants can help you create a development roadmap, choose key features for your MVP, and find a team to write your first lines of code.",
        List1: "Market & Competitor research",
        List2: "Prototype and MVP planning",
        List3: "Creating development roadmaps",
        List4: "Assistance with forming a team and hiring",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "Adherence to Industry Best Practices",
        AccordianDetails:
          "Make sure your team is standing to industry best practices in regards to processes, information security, and quality standards.",

        List1: "Assistance with CMMI-DEV maturity",
        List2: "Information security audit ISO:27001",
        List3: "Assistance with achieving industry-specific standards ",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "04",
        AccordianSummary: "CTO as a Service",
        AccordianDetails:
          "Completely outsource the technical supervision of your project to a qualified CTO with years of experience. This professional will help you choose the best languages, frameworks, and architecture for your project.",
        List2: "ut development plans into action",
        List3: " Ensure thorough technical supervision of your project",
        List4: "Leverage decades of hands-on experience",
        List5: "Make well-informed technical decisions",
      },
    ],
    TechnologiesExpertiesTitle: "Tech Stack",
    TechnologiesExpertiesPara:
      "IT consulting outsourcing is just one of the qualified services we impart. Senwell has a  inventory of more than 280 dedicated engineers with immense knowledge of niche technologies, programming languages, frameworks, and libraries. We go beyond writing efficient code, focusing on an end result that will help your business achieve its objectives.",
    TechnologiesExperties: [
      {
        icon: <DiJava className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Java",
      },
      {
        icon: <FaReact className="icon" style={{ i: "#4eb7ff" }} />,
        title: "React",
      },
      {
        icon: <FaPhp className="icon" style={{ i: "#4eb7ff" }} />,
        title: "PHP",
      },
      {
        icon: <FaAngular className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Angular",
      },
      {
        icon: <FaNode className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Nodejs",
      },
      {
        icon: <SiTypescript className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Tyescript",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle:
          "Set your project on the course to continuous improvement",
        Button: "Lets's talk",
        image: ITconsulting,
        para: "Hire an experienced DevOps services company to help ensure utmost functional and non-functional quality of your software solutions.",
      },
    ],

    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
      },
    ],
    Forms: [
      {
        formTitle: "Let's talk",
        formSubtitle: "Tell us about your project. Let’s get to work!",
      },
    ],
  },
  {
    name: "dedicated-development-teams",
    HeroBanner: [
      {
        name: "dedicated-development-teams",
        Page: "IT Consulting",
        title: "Dedicated Development Teams",
        breadcrums: "Services",
        Link: "/services",
        button: "Hire us",
      },
    ],

    ImpressYourClientTitle:
      "Why should you hire a dedicated software development team?",
    ImpressYourClientPara:
      "Don’t let the absence of technical background stop you from starting a troublesome business. Our IT consulting services can help you determine your idea’s viability, create a development roadmap, and assist you in creating a prototype or MVP that will help you validate your ideas.",
    ImpressYourClientImage: impresNewClientFlowImg,
    ImpressYourClientPoints: [
      {
        li: "CTO as a Service",
      },
      {
        li: "Market research",
      },

      {
        li: "Creating development roadmaps",
      },
      {
        li: "Guided MVP creation",
      },
    ],
    DevelopmentSolutionsTitle:
      "Who are our dedicated team development services for?",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "Companies looking for outside expertise",
        AccordianDetails:
          "Strengthen your in-house team with our developers who are proficient in every technology imaginable.",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "Businesses with tight project deadlines",
        AccordianDetails:
          " Assemble your dedicated team in no time and launch your development project without any delays.",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "Owners of large and complex projects",
        AccordianDetails:
          "Don’t waste time on scouting and hiring an entire team of developers, QA engineers, designers, and PMs — we’ve got them all.",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "04",
        AccordianSummary: "Startups that need to scale fast",
        AccordianDetails:
          "Your dedicated development team for hire can be scaled up and down easily and as often as you need..",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "05",
        AccordianSummary: "Gathering the requirements",
        AccordianDetails:
          "At the first stage, we want to know as much as possible about the project you have in mind and where you want to see it in the near future. We will also want to know your deadlines and how you envision the work on your project overall",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "06",
        AccordianSummary: "Negotiating the details",
        AccordianDetails:
          "After getting a clear idea about your project specifications and goals, we will present you with our vision of your team, its composition, and the projected milestones. Moreover, we will reach an agreement with you on the project cost and deadline.",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "07",
        AccordianSummary: "Selecting the candidates",
        AccordianDetails:
          "Once we know what kind of expertise your project needs and how many engineers are required, we will start preparing the pool of candidates. We will use both our own resources and search for candidates with relevant experience outside of the company.",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "08",
        AccordianSummary: "Final interviews",
        AccordianDetails:
          "With a shortlist of candidates at hand, we begin the last round of the selection process. You will get to interview the candidates and ask them the questions you consider important. You will always have the final say when it comes to your dedicated team composition. ",
      },
    ],
    TechnologiesExpertiesTitle: "Tech Stack",
    TechnologiesExpertiesPara:
      "IT consulting outsourcing is just one of the qualified services we impart. Senwell has a  inventory of more than 280 dedicated engineers with immense knowledge of niche technologies, programming languages, frameworks, and libraries. We go beyond writing efficient code, focusing on an end result that will help your business achieve its objectives.",
    TechnologiesExperties: [
      {
        icon: <DiJava className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Java",
      },
      {
        icon: <FaReact className="icon" style={{ i: "#4eb7ff" }} />,
        title: "React",
      },
      {
        icon: <FaPhp className="icon" style={{ i: "#4eb7ff" }} />,
        title: "PHP",
      },
      {
        icon: <FaAngular className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Angular",
      },
      {
        icon: <FaNode className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Nodejs",
      },
      {
        icon: <SiTypescript className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Tyescript",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: " Dedicated Development Teams",
        Button: "Lets's talk",
        image: AngularImg,
        para: "Our dedicated development team services can help you achieve your project goals without the time and money it takes to assemble an in-house team. Share the details of your project and we will find a solution that works for you.",
      },
    ],

    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
      },
    ],
    Forms: [
      {
        formTitle: "Let's talk",
        formSubtitle: "Tell us about your project. Let’s get to work!",
      },
    ],
  },
  {
    name: "mvp-development",
    HeroBanner: [
      {
        name: "mvp-development",
        Page: "mvp-development",
        title: "MVP Development Services",
        breadcrums: "Services",
        Link: "/services",
        spanText: "Consulting ",
        title2: "Services",
        para: "Build the foundation for the successful growth of your digital solution by hiring an experienced MVP development company.",
        button: "Hire Us",
        img: WebDevelopmentBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],
    industriesBanner: [
      {
        image: MVPimg,
        title: "The concept of MVP development",
        para1:
          "Minimum Viable Product is not something you can rush without due research. While keeping functionality to the minimum is crucial to accelerating your time to market and minimizing the costs of development, you must also remember to keep your digital solution viable.  ",
        para2:
          "Take MVP development of a banking application, for example, where security is one of your top priorities. Here you don’t need features such as Cashback or Scheduled Payments right away. Those can be added further in the development, after your early customers are satisfied with the performance of your core functionality. What you do need to focus on are things like data encryption and multi-factor authentication, so that your early customers would entrust you with keeping their data and assets safe.",
      },
    ],
    Benefits: [
      {
        title: "MVP software ",
        Benefitstitle: "development benefits",
        BenefitsofDevelopmentWithSenwell: [
          {
            Number: "01",
            title: "Idea validation",
            description:
              "MVP development gives you an opportunity to validate your idea before you spend your entire budget on a digital solution that may not work.",
          },
          {
            Number: "02",
            title: "Market validation",
            description:
              "Assess the demand for your digital solution to avoid wasting resources on the development of something your target audience doesn’t need.",
          },
          {
            Number: "03",
            title: "Risk mitigation",
            description:
              "MVP development enables you to gather user feedback and analyze the metrics to make informed decisions on further product development.",
          },
          {
            Number: "04",
            title: "A faster launch",
            description:
              "Get to market faster. Grow your userbase, gather feedback, and start improving your digital solution before your competitors have even launched.",
          },
          {
            Number: "05",
            title: "Cost efficiency",
            description:
              "MVP development allows companies to test their digital products before committing to a full-scale software development project.",
          },
          {
            Number: "06",
            title: "Valuable insights",
            description:
              "MVP development provides you with a fast and cost-efficient way to iterate based on the feedback gathered from real prospects.",
          },
        ],
      },
    ],
    WhyChooseUs: [
      {
        WhyChooseUsTitle: "Why Choose Us",
        WhyChooseUs: [
          {
            icons: "",
            title: "Fast project start",
            para: "Skip the bothersome sourcing and recruitment process, go straight into MVP development.",
          },
          {
            icons: "",
            title: "100% Transparency",
            para: "Ensure clear and efficient communication with our mature project management approaches.",
          },
          {
            icons: "",
            title: "Excellent Code Quality",
            para: "MVP development expertise to help establish industry-best coding standards on your project.",
          },
          {
            icons: "",
            title: "Cross-domain expertise",
            para: "Hire a team with niche tech skills and MVP development experience in your particular sector. ",
          },
        ],
      },
    ],

    DevelopmentSolutionsTitle: "IT Consulting Services  ",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "SDLC Workflow Optimization",
        AccordianDetails:
          " Make sure every step of your development lifecycle is geared to minimizing costs and increasing output. We can help your team run like a fine-tuned Swiss watch.",
        List1: "Development & QA process audit",
        List2: "Creating thorough documentation",
        List3: "Improving onboarding practices",
        List4: "Agile & Lean methodology coaching",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "Project Planning",
        AccordianDetails:
          " Create a roadmap for turning your idea into a working product used by millions. Our product development consultants can help you create a development roadmap, choose key features for your MVP, and find a team to write your first lines of code.",
        List1: "Market & Competitor research",
        List2: "Prototype and MVP planning",
        List3: "Creating development roadmaps",
        List4: "Assistance with forming a team and hiring",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "Adherence to Industry Best Practices",
        AccordianDetails:
          " Make sure your team is adhering to industry best practices in regards to processes, information security, and quality standards.",

        List1: "Assistance with CMMI-DEV maturity",
        List2: "Information security audit ISO:27001",
        List3: "Assistance with achieving industry-specific standards ",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "CTO as a Service",
        AccordianDetails:
          " Completely outsource the technical supervision of your project to a qualified CTO with years of experience. This professional will help you choose the best frameworks, languages, and architecture for your project.",
        List2: "ut development plans into action",
        List3: " Ensure thorough technical supervision of your project",
        List4: "Leverage decades of hands-on experience",
        List5: "Make well-informed technical decisions",
      },
    ],
    TechnologiesExpertiesTitle: "Tech Stack",
    TechnologiesExpertiesPara:
      "Our expertise does not end with Angular development outsourcing. Our skills and experience cover almost every programming language, framework, and library, both proven by years and recently introduced by industry leaders like Google or Microsoft.",
    TechnologiesExperties: [
      {
        icon: <DiSwift className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Swift",
      },
      {
        icon: <DiIonic className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Ionic",
      },
      {
        icon: <FaReact className="icon" style={{ i: "#4eb7ff" }} />,
        title: "React Native",
      },
      {
        icon: <FaVuejs className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Vue js",
      },
      {
        icon: <SiKotlin className="icon" style={{ i: "#4eb7ff" }} />,
        title: "SiKotlin",
      },
      {
        icon: <FaAndroid className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Anodroid",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle:
          "Set your project on the course to continuous improvement",
        Button: "Lets's talk",
        image: "",
        para: "Hire an experienced DevOps services company to help ensure utmost functional and non-functional quality of your software solutions.",
      },
    ],

    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
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
    Forms: [
      {
        formTitle: "Let's talk",
        formSubtitle: "Tell us about your project. Let’s get to work!",
      },
    ],
  },
];
export { Services };

const DevopsData = [
  {
    name: "devops",
    HeroBanner: [
      {
        name: "devops",
        Page: "DevOps",
        title: "DevOps Services For SMEs and  ",
        breadcrums: "services",
        Link: "/services",
        title2: "Enterprises",
        para: "Plan your projects thoroughly and improve your ability to deliver applications, scale them, and build your solutions on reliable infrastructure.",
        button: "Get In Touch",
        img: WebDevelopmentBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],

    ImpressYourClientTitle: "Serve Your Users",
    ImpressYourClientPara:
      "Good DevOps allow teams to release more frequently and maintain a balance between quality and innovation. Give your end-users the pleasure of regular updates and your stakeholders the satisfaction of a faster time-to-market. Work with us to improve your:",
    ImpressYourClientImage: impresNewClientFlowImg,
    ImpressYourClientPoints: [
      {
        li: "Deployment & Delivery process",
      },
      {
        li: "Scalability using cloud services",
      },
      {
        li: "Global availability of your product",
      },
      {
        li: "Release frequency",
      },
    ],
    DevelopmentSolutionsTitle: "Ideal Web Development Solutions",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "Cloud Adoption",
        AccordianDetails:
          " Reduce your IT costs, improve the performance of your software, and ensure the scalability and reliability of your project.",
        List1: "Cloud Migration",
        List2: "DDos Detection and Prevention",
        List3: "AWS Infrastructure",
        List4: "Regular Backups",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "Team Improvements",
        AccordianDetails:
          "Go beyond improvements to your product and increase the efficiency of your in-house development and testing teams.",
        List1: "Streamline deployment and delivery",
        List2: "Improve employee engagement",
        List3: " Create thorough technical documentation",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "Delivery Pipeline (CI/CD)",
        AccordianDetails:
          " Help your team implement CI/CD best practices to reduce post-release debugging, improve issue resolution time, and achieve a faster TTM.",
        List1: "End-to-End CI/CD Automation with Azure",
        List2: "Streamlined Deployment",
        List3: " Thorough quality control",
        List4: "Reduced lead time",
      },

      {
        ariaControls: "panel4a-content",
        id: "panel4a-header",
        Number: "04",
        AccordianSummary: "Websites & Web Apps",
        AccordianDetails:
          " Build your online image with engaging looks, intuitive layouts, and compelling user experience.",
        List1: "corporate websites",
        List2: "Landing Pages",
        List3: " Progressive Web Apps",
        List4: "Single-page Applications",
        List5: "Microservices",
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Prepare your next project for continuous success with our DevOps outsourcing!",
        Button: "Schedule a Call",
      },
    ],

    TechnologiesExpertiesTitle: "Our Technology Expertise",
    TechnologiesExpertiesPara:
      "DevOps services is just one of the numerous domains we’re experienced in. Senwell Solutions has a roster of more than 280 dedicated engineers with extensive knowledge of niche technologies, programming languages, frameworks, and libraries. We go beyond writing good code, focusing on an end result that will help your business achieve its objectives.",
    TechnologiesExperties: [
      {
        icon: <FaJenkins className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Jenkins",
      },
      {
        icon: <FaDocker className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Dockers",
      },
      {
        icon: <SiAnsible className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Ansible",
      },
      {
        icon: <FaGitlab className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Gitlab CI",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: "Want a free consultation on your project?",
        Button: "Get In Touch",
        image: DevOps,
        para: "We can help you choose the best-suited engagement model for your project so you’ve reached your business goals the soonest and without overpaying for it.",
      },
    ],
    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
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
    Forms: [
      {
        formTitle: "Let's talk",
        formSubtitle: "Tell us about your project. Let’s get to work!",
      },
    ],
  },
];
export { DevopsData };

const TestingData = [
  {
    name: "testing-and-qa",
    HeroBanner: [
      {
        name: "testing-and-qa",
        Page: "Testing & QA",
        title: "Software QA Services",
        Breadcrumbs: "Testing & QA",
        Link: "/services",
        section: "Services",
        spanText: "Software QA",
        title2: " Services",
        para: "Improve your SDLC by implementing entirely planned and polished quality reassure workflows on your project. Get the most out of your QA and testing",
        button: "Let's talk",
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle: "Download a sample of our thorough testing reports.",
        Button: "Download",
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
    TechnologiesExpertiesTitle: "Quality Assurance Technologies",
    TechnologiesExpertiesPara:
      "Our software QA services involve a wide range of robust tools and latest technologies to effectively report bugs and maintain your software product at an extraordinary level of quality. The automated and manual testing we perform ensures speedy delivery and broad test coverage on your project.",
    TechnologiesExperties: [
      {
        icon: <SiPostman className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Postman",
      },
      {
        icon: <SiSelenium className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Selenium",
      },
      {
        icon: <FaFirefoxBrowser className="icon" style={{ i: "#4eb7ff" }} />,
        title: "BrowserStack",
      },
      {
        icon: <SiJunit5 className="icon" style={{ i: "#4eb7ff" }} />,
        title: "JUnit",
      },
      {
        icon: <SiApachejmeter className="icon" style={{ i: "#4eb7ff" }} />,
        title: "JMeter",
      },
    ],
    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
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
export { TestingData };
const ProductDevelopmentData = [
  {
    name: "product-development",
    HeroBanner: [
      {
        name: "product-development",
        Page: "product",
        title: "Product Development Solutions We Deliver",
        breadcrums: "services",
        Link: "/services",
        para: "increment the value delivered to the market with a software product built and refined by our internal product development team.",
        button: "Get In Touch",
        img: WebDevelopmentBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],
    Benefits: [
      {
        title: "What you get",

        BenefitsofDevelopmentWithSenwell: [
          {
            Number: "01",
            title: "Agile product development",
            description:
              "We combine mature business processes, industry best development practices, and innovative thinking to ensure quick delivery and increased customer value.",
          },
          {
            Number: "02",
            title: "Technical product ownership",
            description:
              "While we take care of the architecture, design, and technical flow on the project, your product team can focus on strategizing around the big picture.",
          },
          {
            Number: "03",
            title: "Broad business expertise",
            description:
              "Our team has the extensive experience and business knowledge necessary to ensure a successful discovery phase and tailor a strong product/market fit.",
          },
          {
            Number: "04",
            title: "Data-informed decisions",
            description:
              "Build a strong product vision with well-defined requirements and goals supported with comprehensive data from business analysts and software architects.",
          },
          {
            Number: "05",
            title: "Efficient communication",
            description:
              "Through transparent communication and efficient project management, we will minimize the amount of blockers hindering your product delivery process.",
          },
          {
            Number: "06",
            title: "DevOps",
            description:
              "Ensure light and efficient release cycles with a seamless CI/CD pipeline supported by a flexible, cross-functional team of experienced ",
          },
        ],
      },
    ],

    DevelopmentSolutionsTitle: "Ideal Web Development Solutions",
    DevelopmentSolutionsList: [
      {
        ariaControls: "panel1a-content",
        id: "panel1a-header",
        Number: "01",
        AccordianSummary: "New Product Development",
        AccordianDetails:
          "From confirming your ideas to building full-fledged solutions, we will help drive your project to success..",
        List1: "Proof of concept",
        List2: "Prototype development",
        List3: "MVP development",
        List4: "SaaS development",
      },
      {
        ariaControls: "panel2a-content",
        id: "panel2a-header",
        Number: "02",
        AccordianSummary: "Perfect Product/Market Fit",
        AccordianDetails:
          "From solid product vision to best-fitting business model, we refine ideas into profitable and scalable products.",
        List1: "Data-driven analytics",
        List2: "Code quality assessment",
        List3: "Market research",
        List4: "Considered UI/UX",
      },
      {
        ariaControls: "panel3a-content",
        id: "panel3a-header",
        Number: "03",
        AccordianSummary: "Integrations & Microservices",
        AccordianDetails:
          " Upgrade your existing software with self-sustaining microservices, seamlessly integrated modules.",
        List1: "New feature implementation",
        List2: "Microservices-based architecture",
        List3: "Third-party API integration",
        List4: "Continuous maintenance and support",
      },
      {
        ariaControls: "panel4a-content",
        id: "panel4a-header",
        Number: "04",
        AccordianSummary: "B2B & B2C Software",
        AccordianDetails:
          "Extensive experience and industry knowledge in building strong-suited mobile, web, and desktop solutions.",
        List1: "Social networks & dating platforms",
        List2: "Project management & business tools",
        List3: "Code quality & source code security tools",
        List4: "PDF generators",
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Looking for a product development team to filter your ideas into strong-suited software?",
        Button: "Schedule a Call",
      },
    ],

    TechnologiesExpertiesTitle: "Our Technology Expertise",
    TechnologiesExpertiesPara:
      "Our custom product development team has extensive knowledge of various programming languages, tools we use to build anything from a simple mobile application to a complex ERP system. With our broad domain expertise, we will help you pick the tech stack that corresponds to industry standards and envelope your business needs best.",
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
        icon: <FaNode className="icon" style={{ i: "#4eb7ff" }} />,
        title: "Node.js",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: "Want a free consultation on your project?",
        Button: "Get In Touch",
        image: DevOps,
        para: "We can help you choose the best-suited engagement model for your project so you’ve reached your business goals the soonest and without overpaying for it.",
      },
    ],
    Testimonials: [
      {
        label:
          "“The team did excellent work and I was very happy with everyone we added to the project via Senwell Solutions. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell Solutions has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them. ”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell Solutions has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team. ”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell Solutions has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell Solutions were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell Solutions was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”",
        img: "",
        name: "Katherine VanHenley,",
        post: "Third & Wall.",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: "Follow best Angular development standards",
        Button: "Estimate a project",
        image: AngularImg,
        para: "The client-facing side of an app determines its success. After all, if it doesn’t look and work well, who’s going to use it? Our Angular development services pair developers with designers to create the most inviting, intuitive, and memorable user interfaces for your users to enjoy.",
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
    Forms: [
      {
        formTitle: "Let's talk",
        formSubtitle: "Tell us about your project. Let’s get to work!",
      },
    ],
  },
];
export { ProductDevelopmentData };
