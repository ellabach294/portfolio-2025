import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

import media from './ResponsiveDevices'

const Text = styled.h3`
color: ${props => props.theme.textWhite};
font-size: 1rem !important;
margin: 0;

${media.md`
font-size: 2rem !important;
`}
`

const AnimatedJobPosition = () => {
    const jobTitles = [
        "Full Stack Web Developer",
        "Front-End Web Developer",
        "Web Designer"
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
        }, 2000);

        return () => clearInterval(interval)
    }, [jobTitles.length])
  return (
    <Text>
        <AnimatePresence mode="wait">
            <motion.div
                key={jobTitles[index]}
                initial={{ opacity: 0, y:20 }}
                animate={{ opacity: 1, y:0 }}
                exit={{opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
            >
                {jobTitles[index]}
            </motion.div>
        </AnimatePresence>
    </Text>
  )
}

export default AnimatedJobPosition