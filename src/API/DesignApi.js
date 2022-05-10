import { DesignHeroBanner } from '../images/images'
import { SiAdobephotoshop } from "react-icons/si";
import {huffpostImg} from'../images/images'
import {Dashlane} from'../images/images'
import {Code_Better} from'../images/images'
import {Distractify} from'../images/images'

import {DiPhotoshop} from 'react-icons/di'
import {DiIllustrator} from 'react-icons/di'
import {AiOutlineSketch} from 'react-icons/ai'
import {FiFigma} from 'react-icons/fi'
import {SiAdobeindesign} from 'react-icons/si'

const DesignData = [
    {
        HeroBanner: [{
            Page: 'UI/UX Design',
            section: 'Services',
            Link:'/services',
            title: 'UI/UX Design ',
            Breadcrumbs: 'services',
            title2: 'Services',
            para: 'Stunning visuals and well-crafted user experience achieved through deep understanding of design and synergy with technical aspects of development. ',
            button: 'Hire Now',
            img: DesignHeroBanner,
        },
        ],
        skill: [
            {

                PerformanceTitle: 'Engaging Concepts. Lasting Impressions',
                PerformancePara: 'Over nearly 20 years of creating custom design solutions, our UI/UX designers, business analysts, and product managers have developed a ultra-modern palate for good design complemented by a profound set of analytical, creative, and technical skills. We are experts at expressing even the most complex ideas through simple, aesthetically pleasing forms and clear information architecture.',
                PerformanceList: [
                    {
                        Numbers: '20',
                        PerformanceListTitle: 'Years of experience',
                        PerformanceListPara: 'Extensive experience in equipping complex systems with intuitive, engaging UI/UX design solutions.'
                    },
                    {
                        Numbers: '250+',
                        PerformanceListTitle: 'Accomplished professionals',
                        PerformanceListPara: 'Our engineers are highly skilled, experienced in a wide range of technologies and domains.'
                    },
                    {
                        Numbers: '800+',
                        PerformanceListTitle: 'Success stories',
                        PerformanceListPara: 'With hundreds of projects completed, our UI/UX design team is prepare for jobs of any complexity and scale.'
                    }
                ],


            }
        ],
        GetInTouch: [{
            GetInTouchTitle: 'Outgrow your competition with a distinctive image, immersive experiences your customers desire.',
            Button: 'Get In Touch',
        }],
        Benefits: [{
            title: 'Expert UI/UX Design',
            Benefitstitle: 'Services',
            BenefitsofDevelopmentWithSenwell: [
                {
                    Number: '01',
                    title: 'UI/UX Audit',
                    description: 'Through in-depth user analysis, expert reviews, and heuristic evaluation, we will appraise your website, application, or product and suggest impactful changes to raise your business performance.',
                },
                {
                    Number: '02',
                    title: 'Brand/Logo Design',
                    description: 'We will help you start a dialogue with your customers, making sure the image and feel of your product is deeply fixed in their hearts and minds with a idiosyncratic identity and a clear message',
                },
                {
                    Number: '03',
                    title: 'Research & Prototyping',
                    description: 'First we get to the bottom of your customers’ needs through extensive user research, then we customize a perfect visual representation of your idea from a simple sketch to a full-fledged prototype',
                },
                {
                    Number: '04',
                    title: 'UX/UI Design',
                    description: 'We unite in-depth research with best design practices and tools to equip your product with the interaction experience, visual attractiveness, and emotional bonds your customers truly desire.',
                },
                {
                    Number: '05',
                    title: 'Product Design',
                    description: 'We will analyze your business goals, the market, and target audience to help you build an irresistible value proposition backed by appealing visual aesthetics, data-informed user experience.',
                },
                {
                    Number: '06',
                    title: 'App Design',
                    description: 'We combine user-centered design practices with extensive research of customer behavior to equip your web or mobile application with attracting visual implementation and memorable experiences.',
                },
            ],
           
        }],
        TechnologiesExpertiesTitle: 'UI/UX Design Tools We Use ',
        TechnologiesExpertiesPara: 'We will choose the tools for your UI/UX design project based on the number of stakeholders involved, its complexity,  and your personal preferences. Our design group is flexible ,can work in Figma , Sketch, and all apps in the Adobe CC. Whatever tools you go for, our internal processes are set up to ensure easy feedback collection, maintenance of all version histories, seamless transfer of design artefacts to developers.',

        TechnologiesExperties: [
            {
              
                icon: <FiFigma className="icon" style={{i: '#4eb7ff'}} />,
                title: 'Figma',
            },
            {
                icon: <DiPhotoshop className="icon" style={{i: '#4eb7ff'}}/>,
                title: 'Photoshop',
            },
            {
                icon: <AiOutlineSketch className="icon" style={{i: '#4eb7ff'}} />,
                title: 'Sketch',
            },
            {
                icon: <SiAdobeindesign className="icon" style={{i: '#4eb7ff'}}/>,
                title: 'Indesign',
            },
            {
                icon: <DiIllustrator className="icon" style={{i: '#4eb7ff'}}/>,
                title: 'illustrator',
            },
        
         
        ],
        ProjectPortfollio : [
            {
                title:'HuffPost',
                image:huffpostImg,
                para:'High traffic is both the main goal and challenges for the news websites.we helped HuffPost build a site and app that are increadibly convenient to use and capable of sustaining the heavy usage load.Having optimized the front-end and back-end of HuffPost,our client can be sure that their message delivery system can send 150,000 messages per second'
                  },
            {
                title:'Dashlane',
                image:Dashlane,
                para:'  Security is important for individuals as well as businesses. Our QA engineers helped Dashlane ensure that their password manager and digital wallet will remain fully functional on new versions of OS, browsers, and devices. Now our client knows that their solution works perfectly under all circumstances.'
            },
            {
                title:'Code Better',
                image:Code_Better,
                para:' We developed an effective web application that helps developers to write semantically correct code and form useful coding habits with better practices, superior tools, and proven methodologies.The application provides thorough data analysis and real-time statistics as well as features such as sorting errors by priority. The app is compatible with all popular desktop and mobile devices.'
            },
            {
                title:'Distractify',
                image:Distractify,
                para:'  New businesses must strike while the iron is hot. Chasing after a fast time-to-market can make your business vulnerable to performance risks. We helped Distractify perform a fast but extremely thorough Quality Assurance process before they hit “publish” on their first viral story.'
            },
        ],
        Forms:[
            {
            formTitle:"Write to us.",
            formSubtitle:'Tell us about your project.'
            }
        ]
        
    }
]
export { DesignData }