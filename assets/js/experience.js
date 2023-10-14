AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior GIS / Software Developer",
    cardImage: "assets/images/experience-page/strategizeit.jpeg",
    place: "StrtegizeIT Egypt (Full-Time)",
    time: "(Mar, 2023 - present)",
    desp: "<li>Spearheaded the development of GIS applications and cutting-edge geoprocessing tools to bolster operational efficiency.</li><li>Conceptualized and streamlined project workflows for optimal performance.</li><li>Designed and customized Odoo modules to enhance functionality.</li><li>Crafted web mapping applications and powerful geo-processing tools to align with organizational needs.</li><li>Orchestrated seamless integration between ArcGIS and Odoo systems.</li><li>Rigorously tested applications and executed precise bug fixes.</li>",
  },
  {
    title: "GIS Software Developer",
    cardImage: "assets/images/experience-page/united_ats.png",
    place: "United ATS (Full-Time)",
    time: "(Jun, 2021 - Mar, 2022)",
    desp: "<li>Engineered robust GIS applications and high-impact geoprocessing tools to bolster daily operations.</li> <li>Championed the development and deployment of both web-based and desktop GIS applications.</li> <li>Strategized, executed, and optimized workflows and geoprocessing models.</li> <li>Proficiently configured and managed GIS Servers (GeoServer, ArcGIS Server, QGIS Server).</li> <li>Published GIS web services to facilitate data access.</li><li>Expertly manipulated, extracted, located, and analyzed geographic data.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/freelancer.png",
    place: "Self-Employed (Freelancer)",
    time: "(Sept, 2019 - Present)",
    desp: "<li>Innovatively developed software solutions tailored to meet diverse customer requirements.</li> <li>Spearheaded the creation and implementation of source code for cutting-edge applications.</li> <li>Rigorously tested and meticulously debugged source code to ensure optimal performance.</li>",
  },
  {
    title: "GIS Specialist",
    cardImage: "assets/images/experience-page/pathfinders.jpg",
    place: "Pathfinders Geomatex (Full-Time)",
    time: "(Oct, 2018 - Mar, 2019)",
    desp: "<li>Led GIS database development, conducting comprehensive qualitative and quantitative analyses while creating compelling maps.</li> <li>Collaborated seamlessly with project team members and stakeholders to define data requirements, project specifications, and desired outcomes.</li> <li>Conducted precision digitization and meticulously compiled, manipulated, and refined geographic data from various sources, including CAD, field observations, satellite imagery, aerial photographs, and existing maps.</li>",
  },
  {
    title: "GIS Specialist",
    cardImage: "assets/images/experience-page/esri.png",
    place: "Esri North Africa (Internship)",
    time: "(Jul, 2018 - Aug, 2018)",
    desp: "<li>Skillfully created and modified geographic data from diverse sources such as text files, hard-copy maps, and GPS data.</li> <li>Demonstrated expertise in data conversion from external GIS file formats, including the seamless import of KML files into shapefile format.</li> <li>Conducted precise digitization tasks, contributing to data accuracy and completeness.</li>",
  },
  {
    title: "GIS Specialist",
    cardImage: "assets/images/experience-page/narss.jpg",
    place: "National Authority for Remote Sensing & Space Sciences - NARSS (Internship)",
    time: "(Jul, 2017 - Aug, 2017)",
    desp: "<li>Proficiently established Geodatabases and shapefiles to facilitate data management.</li> <li>Conducted accurate digitization tasks and contributed to spatial analysis, enhancing data insights.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// // Hackathon Section

// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   {
//     title: "The Uplift Project",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/uplift.png",
//     desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//     href: "https://uplift.girlscript.tech/",
//   },
//   {
//     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//     href: "https://ulhacks.com/",
//   },
//   {
//     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//     href: "https://wafflehacks.org/",
//   },
//   {
//     title: "Elevate Tech",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/elevate.png",
//     desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//     href: "https://elevatetech.codes/",
//   },
//   {
//     title: "PitchTeen",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/pitchteen.png",
//     desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//     href: "https://www.linkedin.com/company/pitchteen/about/",
//   },
//   {
//     title: "Hack-A-Solution",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hackasolution.png",
//     desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//     href: "https://hackasolution.devpost.com/",
//   },
//   {
//     title: "UniGlobe Hacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/uniglobe.png",
//     desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//     href: "https://uniglobe-hacks.devpost.com/",
//   },
//   {
//     title: "AtlasHacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/atlas.png",
//     desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//     href: "https://atlashacks2.devpost.com/",
//   },
//   {
//     title: "NeoHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/neo.png",
//     desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//     href: "https://neohacks.org/",
//   },
//   {
//     title: "Mission Inspired",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/mission.png",
//     desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//     href: "https://www.missioninspired.org/hackathon",
//   },
//   {
//     title: "Hack3",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hack3.png",
//     desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//     href: "https://hack3.co/",
//   },
//   {
//     title: "JITHack",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/jithack.png",
//     desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//     href: "https://jithack.netlify.app/",
//   },
//   {
//     title: "Recess Hacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/recess.png",
//     desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//     href: "https://recesshacks.com/",
//   },
//   {
//     title: "Citro Tech",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/citro.png",
//     desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//     href: "https://citro.tech/",
//   },
//   {
//     title: "NHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/nhacks.png",
//     desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//     href: "https://nhacks-vi.devpost.com/",
//   },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp, href }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="${href}" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
