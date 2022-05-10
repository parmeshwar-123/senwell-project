import { CmmiImage } from "../images/images";
import { Union } from "../images/images";
import { LogoImage } from "../images/images";
import GroupIcon from "@material-ui/icons/Group";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LanguageIcon from "@material-ui/icons/Language";
import { BusinesModelsBanner } from "../images/images";
import { BMGetinTouch } from "../images/images";
import consultationImage from "../images/Company/consultationImage.jpg";
const BusinessModelData = [
  {
    name: "outsourcing-pricing-models",
    HeroBanner: [
      {
        name: "outsourcing-pricing-models",
        Page: "Business Models",
        title: "How We Work",
        spanText: "We ",
        title2: "",
        button: "Let's talk",
        para: "Utilize the utmost efficiency of our flexible collaboration models and customer-preoccupied approach!  With well-established processes and deep expertise proven by years of experience in the full-cycle software development market, we will be a  faithful partner that delivers on your goals flawlessly from start to finish.",
        // button: 'Hire Now',
        img: BusinesModelsBanner,
        image1: CmmiImage,
        image2: Union,
        image3: LogoImage,
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Need help building a mighty engine to run your software solution?",
        Button: "Get In Touch",
      },
    ],
    GetInTouchSecondbanner: [
      {
        GetInTouchTitle: "Want a free consultation on your project?",
        Button: "Get In Touch",
        image: consultationImage,
        para: "We can help you choose the best-suited engagement model for your project so you’ve achieved your business goals the soonest and without overpaying for it.",
      },
    ],
    Testimonials: [
      {
        label:
          "“I was very happy with everyone and The team did excellent work we added to the project via Senwell. Together we built a custom video CMS in Django and native apps for Android and iOS powered by json feeds from this CMS.”",
        img: "",
        name: "Theo Burry",
        post: "Former CTO at NowThis Media, Inc.",
      },
      {
        label:
          "“Senwell has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns stand up over time (that’s expected) but you have always been very proactive in resolving them.”",
        img: "",
        name: "Peter Dunham,",
        post: "Co-founder, Mr. Baffo.",
      },
      {
        label:
          "“Senwell has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development endeavors with their team.”",
        img: "",
        name: "Jon Sugihara,",
        post: "President & Co-Founder at Perx.",
      },
      {
        label:
          "“Senwell has played a pivotal role in the development of HuffingtonPost.com. They have been able to become a part of the core team very rapidly and develop amazing features that perform under the highest performance and demand requirements possible.”",
        img: "",
        name: "Paul Berry,",
        post: "CTO at the HuffPost.",
      },
      {
        label:
          "“The team were extremely responsive, with a quick turnaround, magnificent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but Senwell were up to it and found the right solutions to meet our needs.”",
        img: "",
        name: " Julie Gilbert-Binns,",
        post: "3rd Wave Communications.",
      },
      {
        label:
          "“Senwell was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many points of the e-commerce site ourselves. Their team is professional and  responsive and we always felt like our new site was in good hands.”",
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
];
export { BusinessModelData };

const HeroBannerSubsection = [
  {
    icon: <GroupIcon style={{ fontSize: "2.5rem", color: "#3D8ED7" }} />,
    title: "Time and Material",
    subtitle:
      "Best suited for complex, long-term projects with unclear requirements.",
    para: "T&M’s superb flexibility enables you to react to market changes with immediate requirement  alterations at any point of development. You get a functioning version of your solution with each reprise and can stop the contract at any time you’re satisfied with the outcome.",
    list1: "convertible workflow and predictable budgeting",
    list2: "High flexibility and convert control at low risk",
    list3: "accessible at any stage of software development life cycle",
    list4: "High control over  scope and requirements.",
  },
  {
    icon: <WatchLaterIcon style={{ fontSize: "2.5rem", color: "#3D8ED7" }} />,
    title: "Dedicated Team",
    subtitle:
      "Best suited for mid-size or enterprise projects and business expansion.",
    para: "You get a full team of experts (including project managers, developers, designers, business analysts, QA engineers) that you can easily scale as your project develops. The size of your team, scope, development  procedure, and deadlines are under your full control.",
    list1: "Easy costs tracking and Predictable budgeting",
    list2: "Full team dedication and accountability",
    list3: "Flexible level of regulate over the project",
    list4: "Fast resource scaling and  substitution",
  },
  {
    icon: <LanguageIcon style={{ fontSize: "2.5rem", color: "#3D8ED7" }} />,
    title: "Staff Augmentation",
    subtitle:
      "Works miracles for development projects of any complexity and scale.",
    para: "Don’t waste months on searching, recruiting, and onboarding! It’s a perfect option for projects with in-house teams that require specific roles to be filled by experts with relevant experience and skills. You impart the requirements and get a right candidate for the position.",
    list1: "Instant access to talent with rapid onboarding",
    list2: "Full control over the team from from beginning to end",
    list3: "expected cost with no in-house labor overheads",
    list4: "No amenities or administrative investment",
  },
];
export { HeroBannerSubsection };

const time = [
  {
    id: 1,
    srNo: "01",
    duration: "<1 day",
    title: "Requirements analysis",
    list1: "-  Business, tech, and marketing analysis",
    list2: "- Documentation studying",
    list3: "- Project plan and scheduling",
  },
  {
    id: 2,
    srNo: "02",
    duration: "<1 day",
    title: " Pre-sale engineer introduction",
    list1: "- Fast first contact with the team",
    list2: "- High-quality company presentation",
    list3: "- Sprint demo",
  },
  {
    id: 1,
    srNo: "03",
    duration: "<1 day",
    title: "Proposal and estimation",
    list1: "- Project scope agreement",
    list2: "- Project scope estimate",
    list3: "- Contract terms agreement",
  },
  {
    id: 1,
    srNo: "04",
    duration: "1-7 days",
    title: "Project start",
    list1: "- High-quality company Projects",
    list2: "- Positive references from Clients",
    list3: "- Positive references from Clients",
  },
  {
    id: 1,
    srNo: "05",
    duration: "2-4 days",
    title: "Team selection",
    list1: "- Vacancy registration",
    list2: "- CV generation",
    list3: "- Interviews",
  },
  {
    id: 1,
    srNo: "06",
    duration: "1-3 days",
    title: "Vacancy registration of internal hiring",
    list1: "- Check for available candidates",
    list2: "- Schedule hiring processes",
  },
];
export { time };

const staff = [
  {
    id: 1,
    srNo: "01",
    duration: "<1 day",
    title: "Requirements analysis",
    list1: "- Project documentation studying",
    list2: "- Tech stack analysis",
    list3: "- Recruitment scheduling",
  },
  {
    id: 2,
    srNo: "02",
    duration: "<1 day",
    title: "Company presentation and meeting",
    list1: "- Fast first contact with potential candidates",
    list2: "- High-quality company presentation",
    list3: "- Positive references and testimonials",
  },
  {
    id: 1,
    srNo: "03",
    duration: "<1 day",
    title: "Vacancy registration of internal hiring",
    list1: "- Schedule hiring processes",
    list2: "- Check for available candidates",
  },
  {
    id: 1,
    srNo: "04",
    duration: "1-7 days",
    title: "CV generation",
    list1: "- Recruiting",
    list2: "- Preparing documentation",
  },
  {
    id: 1,
    srNo: "05",
    duration: "<1 day",
    title: "Interviews",
    list1: "- Interview setup",
    list2: "- Interview results",
  },
  {
    id: 1,
    srNo: "06",
    duration: "1-7 days",
    title: "Team Project",
    list1: "- High-quality Code.",
    list2: "- Positive references from Clients",
    list3: "- High-quality User Experiece On our Project.",
  },
];
export { staff };

const team = [
  {
    id: 1,
    srNo: "01",
    duration: "<1 day",
    title: "Requirements analysis",
    list1: "- Project documentation studying",
    list2: "- Tech stack analysis and suggestions",
    list3: "- Project plan and scheduling",
  },
  {
    id: 2,
    srNo: "02",
    duration: "<1 day",
    title: "Presentation and meeting",
    list1: "- Company introduction",
    list2: "- Acquaintance with processes and workflows",
    list3: "- Positive references and testimonials",
  },
  {
    id: 1,
    srNo: "03",
    duration: "<1 day",
    title: "Vacancy registration of internal hiring",
    list1: "- Schedule hiring processes",
    list2: "- Check for available candidates",
  },
  {
    id: 1,
    srNo: "04",
    duration: "1-7 days",
    title: "CV generation",
    list1: "- Recruiting",
    list2: "- Preparing documentation",
  },
  {
    id: 1,
    srNo: "05",
    duration: "<1 day",
    title: "Interviews",
    list1: "- Interview setup",
    list2: "- Interview results",
  },
  {
    id: 1,
    srNo: "06",
    duration: "1-7 days",
    title: "We master in",
    list1: "- Angular.js & React.js",
    list2: "- .NET Applications",
    list3: "- Node.js Applications.",
  },
];
export { team };

const flexibleApproch = [
  {
    title: "Time & Material",
    subtitle: "Kanban or Scrum",
    description:
      "Depending on your business consideration and current situation, Kanban and Scrum are a great fit for the Time & Material model which usually implies continuous incremental delivery.",
    list1: "2000+h projects",
    list2: "Quick start",
    list3: "Support or continuous development",
  },
  {
    title: "Fixed Cost",
    subtitle: "Waterfall, Spiral, or V-Model",
    description:
      "A fixed-cost project requires constant monitoring, control, and supervision of almost each and every variable on the project: its scope, risks, budget, and many other factors.",
    list1: "PoC, MVP projects",
    list2: "Solid requirements",
    list3: "Strict deadlines and budget",
  },
  {
    title: "Dedicated Team & Outstaffing",
    subtitle: "Scrum or any other Agile",
    description:
      "This type of collaboration is most suitable for projects with mature management, looking to extend their in-house team and delivery capacity with talented engineers.",
    list1: "Team extension",
    list2: "Agile and alternative methodologies",
    list3: "Team as a part of client company",
  },
];
export { flexibleApproch };
