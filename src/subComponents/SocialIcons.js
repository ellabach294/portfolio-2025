import React from 'react'
import styled, { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import {motion} from "framer-motion"

import { GitHubIcon, LinkedInIcon } from '../components/AllSvgs'
import media from '../components/ResponsiveDevices'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 1rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }

    ${(props) => 
        props.$hiddenOnMobile && `
        
        @media (max-width: 950px) {
            display: none;
        }
        `}
    
    ${media.md`
        left: 2rem;
    `}
`

const Line = styled(motion.span)`
width: 3px;
height: 8rem;
background-color: ${(props) => (props.theme === 'light' ? '#9b2b20'  : '#e9b44b')};
`

const SocialIcons = (props) => {
    const theme = useTheme();
    
    const location = useLocation();

    const isSpecificPage = !!location?.pathname;
    
  return (
    <Icons $hiddenOnMobile={isSpecificPage}>
        <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale:[0, 1, 1.5, 1], opacity: 1}}
            transition={{type:'spring', duration:1, delay: 1.2}}
        >
            <a style={{color:'inherit'}} target="_blank" rel="noopener noreferrer" href="https://github.com/ellabach294" aria-label='Link GitHub profile'>
                <GitHubIcon width={30} height={30} fill={props.theme === 'light' ? theme.textRed : theme.textYellow} />
            </a>
        </motion.div>

        <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale:[0, 1, 1.5, 1], opacity: 1}}
            transition={{type:'spring', duration:1, delay: 1.4}}
        >
            <a style={{color:'inherit'}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ella-bach-b453a8230/" aria-label="Link LinkedIn Profile">
                <LinkedInIcon width={30} height={30} fill={props.theme === 'light' ? theme.textRed : theme.textYellow} />
            </a>
        </motion.div>

        <Line theme={props.theme}
            initial={
                {
                    height: 0
                }
            }
            animate ={{
                height: '8rem'
            }}
            transition={{
                type:"spring", duration:1, delay: 0.8
            }}
        />
    </Icons>
  )
}

export default SocialIcons