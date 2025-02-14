import {Suspense, lazy} from 'react'
import { Route, Routes, useLocation } from "react-router"
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyles';
import { colorTheme } from './components/Themes';

import {AnimatePresence} from "framer-motion"
import SoundBar from "./subComponents/SoundBar"
import BooksLibrary from './components/subPages/BooksLibrary';

// Lazy-loaded Components
const Main = lazy(() => import('./components/Main'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const MySkillsPage = lazy(() => import('./components/MySkillsPage'));
const Projects = lazy(() => import('./components/ProjectsPage'));
const Qualifications = lazy(() => import('./components/Qualifications'));

// Lazy-loaded Subcomponents
const TravelAgentTheme = lazy(() => import('./components/subPages/TravelAgentTheme'));
const PokemonGame = lazy(() => import('./components/subPages/PokemonGame'));
const CookingRecipe = lazy(() => import('./components/subPages/CookingRecipe'));
const ChineseCatalogue = lazy(() => import('./components/subPages/ChineseCatalogue'));
const StickyApp = lazy(() => import('./components/subPages/StickyApp'))

const Loader = () => (
  <div style={{textAlign: "center", padding:"2rem", fontSize:"1.5rem"}}>
    Loading
  </div>
)

function App() {
  const location = useLocation();
  return <>

  <GlobalStyle />

    <ThemeProvider theme={colorTheme}>
      <SoundBar />
      <AnimatePresence initial={ false } mode={ 'wait' }>
        <Suspense fallback={<Loader />}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/skills" element={<MySkillsPage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/qualifications" element={<Qualifications />} />

        <Route exact path="/projects/travel-agent-website" element={<TravelAgentTheme />} />
        <Route exact path="/projects/pokemon-game" element={<PokemonGame />} />
        <Route exact path="/projects/cooking-recipe-website" element={<CookingRecipe />} />
        <Route exact path="/projects/chinese-drama-catalogue" element={<ChineseCatalogue />} />
        <Route exact path="/projects/boundless-books-library" element={<BooksLibrary />} />
        <Route exact path="/projects/sticky-app" element={<StickyApp />} />
      </Routes>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
    
  </>
}

export default App;
