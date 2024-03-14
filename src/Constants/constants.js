import {avatar} from "../assets"

import{
    acheivementsIn20241,
    acheivementsIn20242,
    acheivementsIn20243,
    acheivementsIn20244,
    acheivementsIn20245,
} from "../assets"

import {
    keywordResearch1,
    keywordResearch2,
    keywordResearch3,
    keywordResearch4,
    keywordResearch5,
} from "../assets"
import {
    experincewithothers1,
    experincewithothers2,
    experincewithothers3,
} from "../assets"

import {
    report1,
    report2,
    report3
} from "../assets"

import {
    vc,
    compaignManagement,
    ppcAd,
    AmazonVendorCenteral,
    ppcmanage,
    amazonCentral,
    amazonList,
    research,
} from "../assets"

import {introVideo} from "../assets"

import {
    faDiscord,
    faInstagram,
    faUpwork,
    faGithub,
    faFacebook,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const memoji = {
  image: [avatar],
};

const icons = {
    faDiscord,
    faFacebook,
    faInstagram,
    faUpwork,
    faGithub,
    faLinkedin,
};

const skills = [
    {
        name: "Virtual Assistance",
        image : vc,
        description: "Offering reliable virtual assistance services to streamline your daily tasks and operations, ensuring efficiency and productivity."
    },
{
        name: "Campaign Management",
        image : compaignManagement,
        description: "Expertly managing campaigns to achieve targeted goals and optimize performance across various platforms, driving impactful results for your business."
    },
{
        name: "Amazon PPC (Pay Per Click) Advertising",
        image : ppcAd,
        description: "Leveraging Amazon's powerful advertising platform to strategically promote products, increase visibility, and maximize sales revenue."
    },
{
        name: "Amazon Vendor Central",
        image : AmazonVendorCenteral,
        description: "Navigating and optimizing the Amazon Vendor Central platform to effectively manage vendor relationships, inventory, and sales operations."
    },
{
        name: "PPC Campaign Setup & Management",
        image : ppcmanage,
        description: "Proficiently setting up and managing Pay Per Click (PPC) campaigns across multiple channels, utilizing targeted strategies to maximize return on investment (ROI)."
    },
{
        name: "Amazon Seller Central",
        image : amazonCentral,
        description: "Managing and optimizing your Amazon Seller Central account to enhance product listings, increase traffic, and boost sales on the world's largest online marketplace."
    },
{
        name: "Amazon Listing Optimization",
        image : amazonList,
        description: "Implementing strategic optimization techniques to improve the visibility, ranking, and conversion rates of your product listings on Amazon, driving higher sales and revenue."
    },
]

const projects = [
  {
    name: "Reports",
    description: "I offer comprehensive reporting services for Amazon PPC campaigns. From real-time Daily Status Updates (DSU) to weekly account summaries and monthly sales analysis, clients receive actionable insights to optimize performance and drive growth.",
    image: [report1,report3,report2],
  },{
    name: "Campaign Optimization: Reduce ACOS, Maximize Sales Growth with PPC",
    description: "I bring a wealth of experience in the realm of Amazon PPC advertising, having successfully collaborated with notable companies and agencies, where I played a pivotal role in optimizing Amazon PPC campaigns. , I refined my skills in strategic campaign planning, keyword optimization, and data-driven decision-making within the Amazon ecosystem. My track record reflects a commitment to delivering tangible results, enhancing brand visibility, and driving conversions. I am well-versed in the intricacies of Amazon PPC, and my proficiency is geared towards ensuring clients achieve their digital marketing objectives efficiently and effectively",
    image: [acheivementsIn20241,acheivementsIn20242,acheivementsIn20243,acheivementsIn20244,acheivementsIn20245,],
  },{
    name: "Experince With Companies",
    description: "I bring a wealth of experience in the realm of Amazon PPC advertising, having successfully collaborated with notable companies and agencies, where I played a pivotal role in optimizing Amazon PPC campaigns. , I refined my skills in strategic campaign planning, keyword optimization, and data-driven decision-making within the Amazon ecosystem. My track record reflects a commitment to delivering tangible results, enhancing brand visibility, and driving conversions. I am well-versed in the intricacies of Amazon PPC, and my proficiency is geared towards ensuring clients achieve their digital marketing objectives efficiently and effectively",
    image: [experincewithothers1,experincewithothers2,experincewithothers3],
  },{
    name: "Keyword Research",
    description: "Proficient in the intricacies of Helium 10 and Jungle Scout, I specialize in extracting actionable insights for unparalleled Amazon PPC success. My track record speaks for itself, showcasing a talent for turning strategic analysis into high-impact campaigns that consistently outperform expectations",
    image: [keywordResearch4,keywordResearch3,keywordResearch2,keywordResearch1,keywordResearch5],
  },
    ]

const introduction = {
  text: [
    "Hello there! I'm Khubaib Razzaq, an experienced Amazon PPC specialist with four years of focused expertise. I've worked on various projects, helping numerous businesses succeed by improving visibility and boosting sales on the platform.",

    "I'm passionate about smart strategies that minimize ACoS. Using Helium 10 and Jungle Scout, I research keywords and competitors. I create ranking campaigns for high-performing keywords, targeting ASINs to enhance visibility and rankings on Amazon.",

    "Certified and dedicated to excellence, I love pushing the boundaries in the ever-changing world of Amazon advertising. If you're looking to unlock your brand's Amazon PPC potential and achieve success, let's collaborate! Reach out today, and together, we can transform your brand's presence on the platform.",
  ],
};
export {introduction, memoji , icons , projects , skills , introVideo}
