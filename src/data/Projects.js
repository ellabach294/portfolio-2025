import chineseDramaCover from "../assets/images/chinese-catalogue-mockup.jpg"
import cookingRecipeCover from "../assets/images/anthony-chef-mockup.jpg"
import pokemonCover from "../assets/images/pokeflip-mockup.jpg"
import travelAgentCover from "../assets/images/travel-agency-mockup.jpg"
import booksLibrary from "../assets/images/book-library-mockup.jpg"
import stickyApp from "../assets/images/stikcy-app-mockup.jpg"
import dashboard from "../assets/images/dashboard-mockup.jpg"


export const Projects = [
    {
        id: 1,
        tag:"JavaScript Game Logic",
        name:"PokeFlip",
        skillsTags:["HTML", "CSS", "JavaScript", "API"],
        imgSrc:pokemonCover,
        link: "/projects/pokemon-game",
        brief: "PokeFlip is a Pokémon memory game with dynamic card flipping and API-powered data."
    },

    {
        id: 2,
        tag:"UI/UX Designer",
        name:"Cooking Recipe Website",
        skillsTags:["Figma", "UI/UX", "Web Usability"],
        imgSrc:cookingRecipeCover,
        link: "/projects/cooking-recipe-website",
        brief: "A cooking recipe website designed in Figma, focused on UI/UX improvements for better usability and aesthetics."
    },

    {
        id: 3,
        tag:"Full-Stack Web",
        name:"Chinese Drama Catalogue",
        skillsTags:["PHP", "MySQL","HTML", "Bootstrap"],
        imgSrc:chineseDramaCover,
        link: "/projects/chinese-drama-catalogue",
        brief: "A CRUD web app for a Chinese Drama Catalogue using PHP and MySQL, featuring search, sorting, ratings, and user reviews."
    },

    {
        id: 4,
        tag:"WordPress Development",
        name:"Travel Agent Custom Theme",
        skillsTags:["WordPress", "PHP", "SCSS", "JavaScript", "jQuery"],
        imgSrc:travelAgentCover,
        link: "/projects/travel-agent-website",
        brief: "A custom WordPress theme for a U.S.-based travel agent, featuring a quote form, special deals, blog, testimonials, and contact form."
    },

    {
        id: 5,
        tag: "React App",
        name: "Boundless Books Library",
        skillsTags: ["React", "SCSS", "API", "JavaScript", "Vercel"],
        imgSrc: booksLibrary,
        link: "/projects/boundless-books-library",
        brief: "A React-based book library app styled with SCSS, fetching data from the OpenLibrary API to display trending books."
    },

    {
        id: 6,
        tag: "Electron React App",
        name: "Sticky App",
        skillsTags: ["Electron", "React", "Vite", "JavaScript", "TailwindCSS"],
        imgSrc: stickyApp,
        link: "/projects/sticky-app",
        brief: "Sticky App is a lightweight, cross-platform note-taking application, featuring draggable, resizable sticky notes with a sleek UI."
    },

    {
        id: 7,
        tag: "UI/UX Design",
        name: "Dashboard TailwindCSS",
        skillsTags: ["HTML", "TailwindCSS"],
        imgSrc: dashboard,
        link:"/projects/dashboard-tailwindcss",
        brief: "This project focuses on a responsive web application dashboard prototype using Tailwind CSS"
    }
]