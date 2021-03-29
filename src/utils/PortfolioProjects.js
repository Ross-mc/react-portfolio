import workoutWeeklyImg from "../assets/portfolioImages/workout-weekly.png";
import pubImg from "../assets/portfolioImages/pub-quiz-builder.jpg";
import weatherImg from "../assets/portfolioImages/optimal-day.jpg";
import recipeImg from "../assets/portfolioImages/recipe.jpg";
import barbershopImg from "../assets/portfolioImages/barbershop.jpg";

const PortfolioProjects = [
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
    projectTitle: "Weather Dashboard",
    description: `This project is a weather application built with jQuery, using the Open Weather API. The application provides a 5 day weather forecast for the chosen city.
    A big focus of this project was designing a beautiful UI/UX and this project showcases how much I have improved in this area as a developer`,
    github: "https://github.com/Ross-mc/weather-dashboard",
    live: "https://ross-mc.github.io/weather-dashboard/",
    img: weatherImg
  },
  {
    projectTitle: "New Dish, Who Dis!",
    description: `A web application to inspire people to try new dishes from around the world. Built with jQuery and the Spoonacular/GIPHY APIs.
    From this project I developed my knowledge and understanding of branching, pull requests and merging with Git as part of a project team.`,
    github: "https://github.com/Ross-mc/recipe-finder-app",
    live: "https://ross-mc.github.io/recipe-finder-app/",
    img: recipeImg
  },
  {
    projectTitle: "Barbershop",
    description: `This is a website built for an imitation barbershop. The website is constructed with HTML/CSS with Bootstrap and JavaScript/jQuery. 
    I completed this project to put in to practice knowledge I had learned about jQuery and it can make websites dynamic.`,
    github: "https://github.com/Ross-mc/barbershop-website",
    live: "https://rossmcintyre.tech/barbershop-website/barbershop.html",
    img: barbershopImg
  }
];

export default PortfolioProjects