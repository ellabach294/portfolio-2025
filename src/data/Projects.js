import chineseDramaCover from "../assets/images/chinese-drama-cover.webp"
import cookingRecipeCover from "../assets/images/cooking-recipe-cover.webp"
import pokemonCover from "../assets/images/pokemon-game-cover.webp"
import travelAgentCover from "../assets/images/travel-agent-cover.webp"
import booksLibrary from "../assets/images/books-library/cover-img.webp"


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
        brief: "A custom WordPress theme for a U.S.-based travel agent specializing in Disney vacations and Norwegian cruises, featuring a quote form, special deals, blog, testimonials, and contact form."
    },

    {
        id: 5,
        tag: "React App",
        name: "Boundless Books Library",
        skillsTags: ["React", "SCSS", "API", "JavaScript", "Vercel"],
        imgSrc: booksLibrary,
        link: "/projects/boundless-books-library",
        brief: "A React-based book library app styled with SCSS, fetching data from the OpenLibrary API to display trending books, with features like title search and detailed book information."
    }
]