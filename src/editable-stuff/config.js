// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mohammad",
  middleName: "",
  lastName: "Alirezaee",
  message: " Unraveling Insights, Empowering Decisions: Where Data Speaks, Analysts Listen. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mo-alrz",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mohammad-alirezaee-d/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/moalrz.jpg"),
  imageSize: 375,
  message:
    "I am Mohamad and I am interested in everything about data analytics and machine learning systems. I am currently enrolled in a Master's program in IT for Business Data Analytics at IBS University in Budapest, Hungary",
  resume: "https://drive.google.com/file/d/1K3X_lbpMUbwuxPnOc0egJeg98-krtAoP/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mo-alrz",
  reposLength: 0,
  specificRepos: ["Classification-Project","Neural-Network-Project","FullDataAnalysisProjectAndDashboardingWithExcel","Data-preparation","Scraping","API"]

};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/moalrz.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/moalrz.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 70 },
    { name: "ML/DL", value: 55 },
    { name: "HTML/CSS", value: 50 },
    { name: "MS Excel", value: 90 },
    { name: "Power Point", value: 70 },
    { name: "Access", value: 70 },
    { name: "MS Word", value: 90 },
  ],
  softSkills: [
    { name: "Analytical Skills", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Teamwork", value: 80 },
    { name: "Critical Thinking", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Attention to Details", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data Analyst or Machine Learning trainee opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "m.alirezaaee.1986@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'IT Operator/Assistant Manager Tiroj Corporation',// Here Add Company Name
      companylogo: require('../assets/img/tiroj.jpg'),
      date: 'May 2014 – July 2021',
    },
    {
      role: 'Founder/Manager/Accountant Seven Boutiques',
      companylogo: require('../assets/img/seven.jpg'),
      date: 'January 2012 – January 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
