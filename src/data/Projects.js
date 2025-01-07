import chineseDramaCover from "../assets/images/chinese-drama-cover.webp"
import cookingRecipeCover from "../assets/images/cooking-recipe-cover.webp"
import pokemonCover from "../assets/images/pokemon-game-cover.webp"
import travelAgentCover from "../assets/images/travel-agent-cover.webp"


export const Projects = [
    {
        id: 1,
        tag:"JavaScript Game Logic",
        name:"Pokemon Memory Game",
        skillsTags:["HTML", "CSS", "JavaScript", "API"],
        imgSrc:pokemonCover,
        link: "/projects/pokemon-game",
    },

    {
        id: 2,
        tag:"UI/UX Designer",
        name:"Cooking Recipe Website",
        skillsTags:["Figma", "UI/UX", "Web Usability"],
        imgSrc:cookingRecipeCover,
        link: "/projects/cooking-recipe-website",
    },

    {
        id: 3,
        tag:"Full-Stack Web",
        name:"Chinese Drama Catalogue",
        skillsTags:["PHP", "MySQL","HTML", "Bootstrap"],
        imgSrc:chineseDramaCover,
        link: "/projects/chinese-drama-catalogue",
    },

    {
        id: 4,
        tag:"WordPress Development",
        name:"Travel Agent Custom Theme",
        skillsTags:["WordPress", "PHP", "SCSS", "JavaScript", "jQuery"],
        imgSrc:travelAgentCover,
        link: "/projects/travel-agent-website",
    },
]