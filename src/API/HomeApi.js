import { HomepageHeroBanner } from "../images/images";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ComputerIcon from "@material-ui/icons/Computer";
import FlipToBackIcon from "@material-ui/icons/FlipToBack";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import InputIcon from "@material-ui/icons/Input";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { HomePageGetinTouch } from "../images/images";
import { firstClient } from "../images/images";
import { secondClient } from "../images/images";
import { thirdClient } from "../images/images";
import { fourthClient } from "../images/images";
import { fifthClient } from "../images/images";
import { huffpostImg } from "../images/images";
import { Dashlane } from "../images/images";
import { Code_Better } from "../images/images";
import { Distractify } from "../images/images";
import { CertificationFirstImage } from "../images/images";
import { CertificationSecondImage } from "../images/images";
import { CertificationThirdImage } from "../images/images";
import { CertificationFourthImage } from "../images/images";
import { CertificationFifthImage } from "../images/images";
import { TopAwardFirstImage } from "../images/images";
import { TopAwardSecondImage } from "../images/images";
import { TopAwardThirdImage } from "../images/images";
import { TopAwardFourthImage } from "../images/images";
import { TopAwardFifthImage } from "../images/images";
import { TopAwardSixImage } from "../images/images";
import { OtherRatingFirstImage } from "../images/images";
import { OtherRatingSecondImage } from "../images/images";
import { OtherRatingthirdImage } from "../images/images";
import { OtherRatingFourthImage } from "../images/images";
import { OtherRatingFifthImage } from "../images/images";

const HomePageData = [
  {
    HeroBanner: [
      {
        Page: "Home",
        title: "Software Development",
        spanText: "Company",
        para: "If you care about speed and quality — you’ve come to the right place.",
        button: "Hire Now",
        img: HomepageHeroBanner,
      },
    ],
    GetInTouch: [
      {
        GetInTouchTitle:
          "Ready to start on your development or testing project? We are!",
        Button: "Get In Touch",
      },
    ],
    OurClients: [
      {
        Image: firstClient,
      },
      {
        Image: secondClient,
      },
      {
        Image: thirdClient,
      },

      {
        Image: fourthClient,
      },

      {
        Image: fifthClient,
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
];
export { HomePageData };

const services = [
  {
    id: 1,
    title: "Design",
    icon: <BorderColorIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Improving conversions and turning complex interactions into simple flows.",
    Link: "/services/ui-ux-design",
  },
  {
    id: 2,
    title: "Development",
    icon: <DeveloperModeIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Creating new software and integrating new features into existing suites.",
    Link: "/services/custom-software-development",
  },
  {
    id: 2,
    title: "Testing & QA",
    icon: <CheckCircleOutlineIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Ensuring the quality of your projects and the reliability of your code.",
    Link: "/services/testing-and-qa",
  },
];
export { services };

const technologies = [
  {
    id: 1,
    title: "Front-end",
    icon: <ComputerIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Building flexible, cross-platform interfaces for your business.",
    Link: "/hire-developers/front-end",
  },
  {
    id: 2,
    title: "Back-end",
    icon: <FlipToBackIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Ensuring the scalability and reliability of your websites and software.",
    Link: "/hire-developers/back-end",
  },
  {
    id: 3,
    title: "Mobile",
    icon: <PhoneAndroidIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Creating memorable mobile experiences and reliable applications.",
    Link: "/hire-developers/mobile",
  },
  {
    id: 4,
    title: "Quality Assurance",
    icon: <InputIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Eliminating technical debt and supporting the stability of your products.",
    Link: "/hire-developers/qa",
  },
  {
    id: 5,
    title: "Business & Management",
    icon: <TrendingUpIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Providing your business and employees with reliable tools and suites.",
    Link: "/cms-crm-erp",
  },
];
export { technologies };

const industries = [
  {
    id: 1,
    title: "eCommerce",
    icon: <ShoppingCartIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Launching new eCommerce platforms and implementing web shops.",
    Link: "/industries/ecommerce",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <DonutLargeIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Building robust software for healthcare businesses and organisations.",
    Link: "/industries/healthcare",
  },
  {
    id: 3,
    title: "Entertainment",
    icon: <PlayCircleFilledIcon style={{ transform: "scale(1.5)" }} />,
    description:
      "Creating software and websites for media creation and distribution.",
    Link: "/industries/media-and-entertainment",
  },
  {
    id: 4,
    title: "Finance & Banking",
    icon: <LocalAtmIcon style={{ transform: "scale(1.5)" }} />,
    description: "Developing CRM and ERP tools for businesses in the ",
    Link: "/industries/banking-and-finance",
  },
];
export { industries };

const Certification = [
  {
    img: CertificationFirstImage,
  },
  {
    img: CertificationSecondImage,
  },
  {
    img: CertificationFourthImage,
  },
  {
    img: CertificationThirdImage,
  },
  {
    img: CertificationFifthImage,
  },
];
export { Certification };
const TopAwards = [
  {
    img: TopAwardFirstImage,
  },
  {
    img: TopAwardSecondImage,
  },
  {
    img: TopAwardThirdImage,
  },
  {
    img: TopAwardFourthImage,
  },
  {
    img: TopAwardFifthImage,
  },
  {
    img: TopAwardSixImage,
  },
];
export { TopAwards };
const OtherRating = [
  {
    img: OtherRatingFirstImage,
  },
  {
    img: OtherRatingSecondImage,
  },
  {
    img: OtherRatingthirdImage,
  },
  {
    img: OtherRatingFourthImage,
  },
  {
    img: OtherRatingFifthImage,
  },
];
export { OtherRating };
