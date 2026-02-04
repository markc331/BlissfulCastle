import scuThumbnail from '../assets/scu.png';
import comingSoonThumbnail from '../assets/coming_soon.svg';

let galleryElements = [
    {
        id: 1,
        title: "BlissfulCastle",
        description: "Creators website that serves as a portfolio for various personal and academic coding projects as well as teaching resources used in science curriculum",
        thumbnail: "/blissful_castle.svg",
        url: "/",
        git: "https://github.com/markc331/BlissfulCastle"
    },    
    { 
        id: 2,
        title: "Automated Greenhouse System",
        description: "All-in-one automated system using LoRa Technology to moniter and display conditions of a Greenhouse. (Senior Design Project completed under Santa Clara University Engineering in conjunction with the Instituto Politecnico Loyola from the Dominican Republic",
        thumbnail: scuThumbnail,
        url: "https://scholarcommons.scu.edu/cseng_senior/253/",
        git: "https://github.com/ryanzle/drga"
    },
    {
        id: 3, 
        title: "Goal Tracking App",
        description: "Application to manage and track user-defined daily tasks and long term goals. ",
        thumbnail: scuThumbnail,
        git: "https://github.com/markc331/Software-Engineering"
    },
    {
        id: 4, 
        title: "CookNCulture",
        description: "Virtual CookBook",
        thumbnail: comingSoonThumbnail,
        git: "https://github.com/markc331"
    },
    {
        id: 5,
        title: "Applicant Tracking System",
        description: "System aimed to assist Human Resources in hiring process",
        thumbnail: comingSoonThumbnail,
        git: "https://github.com/markc331/ApplicantTrackingSystem-ATS"
    }
]

export default galleryElements