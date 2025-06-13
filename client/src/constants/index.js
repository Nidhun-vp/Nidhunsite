const Kicks = "https://res.cloudinary.com/duyhgge54/image/upload/v1700000000/pulsefit_g9kojm";
const tour = "https://res.cloudinary.com/duyhgge54/image/upload/v1700000000/tourism_wl0zsv";
const olxClone = "https://res.cloudinary.com/duyhgge54/image/upload/v1700000000/spotifyClone_aed8xa";
const food = "https://res.cloudinary.com/duyhgge54/image/upload/v1700000000/food_nmrt0x";
const TodoList = "https://res.cloudinary.com/duyhgge54/image/upload/v1700000000/todoapp_hikg39";
const airport = "https://res.cloudinary.com/duyhgge54/image/upload/v1700000000/airport_u47oxb";


export const DISCRIPTION_CONTENT = `As a B.Tech Graduate in Computer Science & Engineering ,I am eager to put my education and technical
skills to use in a dynamic and inventive setting.I am delighted to embark on a path to apply my skills to real
world situations, having a good foundation in programming algorithms, and problem solving. My academic
achievements, paired with my curiosity and determination, make me an invaluable member of any team.
.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = {
    degree:"B.Tech",
    department:'Computer Science and Engineering',
    institution:'NSS College Of Engineering,Palakkad',
    year:'2021-2024'
}

export const PROJECTS = [
  {
    title: "Pulse Fit",
    image: Kicks,  // Now using Cloudinary URL
    description:
      "Fitness project to assist users in tracking and enhancing their fitness journey. Implemented four levels of workout plans: Beginner, Intermediate, Advanced, and Lose Fat.",
    technologies: ["Mongodb", "Express.js", "React", "Node.js", "Bootstrap"],
    github: "https://github.com/nidhun-vp",
  },
  {
    title: "aero-site",
    image: airport, 
    description:
      "This project involves the creation of a fully responsive and interactive airport website using front-end web technologies: HTML, CSS, Bootstrap, and JavaScript.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Nidhun-vp/airport_website",
  },
  {
    title: "Tourism-website",
    image: tour,  
    description:
      "This project involves the creation of a fully responsive and interactive Tourism website using front-end web technologies: React, Mongodb, Express.js, CSS, and Bootstrap",
    technologies: ["HTML", "CSS", "Bootstrap", "Mongodb", "React", "Express.js", "Node.js"],
    github: "https://github.com/Nidhun-vp/tourism",
  },
     {
    title: "Job-board",
    image: JobBoard,
    description:
      "Built a full-stack Job Board application using the MERN stack, designed to connect job seekers with opportunities across various industries",
    technologies: ["Font-awesome","react","Bootstrap5","mdb","mongodb atlas",'Javascript',],
    github:'https://github.com/Nidhun-vp/personal-job-site'
  },
  {
    title: "spotify-clone",
    image: olxClone,  
    description:
      "This project is a clone of the Spotify platform, built to provide similar functionality for users to listen and view music using an awesome interface.",
    technologies: ["Font-awesome", "HTML", "CSS", "Javascript"],
    github: "https://github.com/Nidhun-vp/Spotify_clone",
  },
  {
    title: "food-app",
    image: food,  
    description: "A platform for ordering and delivering food items.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nidhun-vp/Food_order",
  },
  {
    title: "To-Do App",
    image: TodoList,  
    description:
      "Built a To-Do List application with interactive features for managing tasks. This project aimed at gaining a practical understanding of JavaScript and enhancing skills in front-end development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nidhun-vp/TODO_APP",
  },
];


export const CONTACT = {
  address: "Malappuram, Kerala",
  phoneNo: "+91 9207284780 ",
  email: "nidhunnidhu714@gmail.com",
};
