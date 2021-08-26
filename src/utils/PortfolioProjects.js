import workoutWeeklyImg from "../assets/portfolioImages/workout-weekly.png";
import pubImg from "../assets/portfolioImages/pub-quiz-builder.jpg";
import recipeImg from "../assets/portfolioImages/recipe.jpg";
import jcEducationImg from "../assets/portfolioImages/jc-education.jpg"
import reduceWasteImg from "../assets/portfolioImages/reduce-waste.jpg"


const PortfolioProjects = [
  {
    projectTitle: "JC Education",
    description: `A freelance project for a beauty educator. The website was developed using the Next.js framework for React, and takes advantage of Next.js features
      such as server side rendering of pages, dynamic page routing and serverless functions. User (admin only) login and authentication is handled using JSON Webtokens.
      Confirmation emails are sent to the customer and the business using Nodemailer.`,
    github: "https://github.com/Ross-mc/jc-education",
    live: "https://www.jackiclarke.com",
    img: jcEducationImg
  },
  {
    projectTitle: "Reduce Waste",
    description: `Reduce Waste is a MERN stack application to help manage food produce. It provides AI Solutions to stock management,
    provides an easy to understand summary of your produce and recommends recipes based on products that are about to expire. Incorporates Cloudinary image
    hosting, Microsoft Azure OCR for intelligently reading receipts/shopping lists uploaded by the user and secure User registration and authentication`,
    github: "https://github.com/Ross-mc/reduceWaste",
    live: "https://reduce-waste.herokuapp.com/",
    img: reduceWasteImg
  },
  {
    projectTitle: "Workout Weekly",
    description: `Workout Weekly is a full stack Node.js application with a MySQL database. The application is a workout and daily planner which gives the user a calendar
      so they can fill out their weekly work schedule and fit it workout videos. The web app utilises the Google API and a database of over 200 curated videos from 
      some of the most popular fitness channels. The application includes a user registration and log in system.`,
    github: "https://github.com/Ross-mc/Workout-weekly",
    live: "https://workout-weekly.herokuapp.com/",
    img: workoutWeeklyImg
  },
  {
    projectTitle: "Pub Quiz Builder",
    description: `This is a full stack web application using Node.js/Express.js for the Back End and jQuery/HTML/CSS for the Front End. Users can submit or find completed quizzes using a MongoDB.
    The application renders new pages using the Pug HTML templating engine (formerly known as Jade). This was a great project to work on and I developed my knowledge of back end development significantly.`,
    github: "https://github.com/Ross-mc/pub-quiz-app",
    live: "http://pub-quiz-builder.herokuapp.com/",
    img: pubImg
  },
  {
    projectTitle: "New Dish, Who Dis!",
    description: `A web application to inspire people to try new dishes from around the world. Built with jQuery and the Spoonacular/GIPHY APIs.
    From this project I developed my knowledge and understanding of branching, pull requests and merging with Git as part of a project team.`,
    github: "https://github.com/Ross-mc/recipe-finder-app",
    live: "https://ross-mc.github.io/recipe-finder-app/",
    img: recipeImg
  },
];

export default PortfolioProjects