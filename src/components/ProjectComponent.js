import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import media from './ResponsiveDevices'
import { ArrowRightUpIcon } from './AllSvgs'
import { NavLink } from 'react-router'

const Box = styled(motion.div)`
width: calc(13rem + 15vw);
text-decoration: none;
height: 32rem;
padding: 1rem;
border: 2px solid ${props => props.theme.textRed};
border-radius: 10px;
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

display: flex;
flex-direction: column;
z-index: 5;

${media.md`
  width: calc(10rem + 15vw);
`}
`

const Image = styled.div`
background-image: ${props => `url(${props.src})`};
width: 100%;
min-height: 30%;
background-size: contain;
background-repeat: no-repeat;
background-position: center center;

${media.lg`
  min-height: 40%;
`}

`

const Title = styled.h3`
color: ${props => props.theme.textRed};
padding: 0.5rem 1rem;
margin: 0;
font-family: "Ubuntu", serif;
font-weight: bold;
font-size: 1.5rem;
`

const Tag = styled.p`
padding: 0 1rem;
color: ${props => props.theme.textBlack};
font-weight: 600;
`

const SkillTags = styled.div`
margin: 0.5rem 1rem;;
font-size: 0.8rem;
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
`

const Skill = styled.span`
padding: 0.5rem 0.75rem;
background-color: ${props => props.theme.textCharcoal};
color: ${props => props.theme.textWhite};
border-radius: 10px;
`

const Brief = styled.div`
padding: 0.5rem 1rem;
`

const Link = styled(NavLink)`
margin-top: 1rem;
padding: 0 1rem;
color: ${props => props.theme.textRed};
font-weight: 600;

&:hover {
  color: ${props => props.theme.textYellow};
}
`
const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const ProjectComponent = (props) => {

    const {name, tag, skillsTags, brief, imgSrc, link} = props.project;
    
  return (
    <Box variants={Item} initial="hidden" animate="show">
        <Image src={imgSrc} />
        <Tag>{tag}</Tag>
        <Title>{name}</Title>
        <SkillTags>
          {
            skillsTags.map((t, id) => {
              return <Skill key={id}>{t}</Skill>
            })
          }
        </SkillTags>
        <Brief>{brief}</Brief>
        <Link target="_blank" to={{pathname: link}}>Visit Project <ArrowRightUpIcon width={10} height={10} fill="currentColor"/></Link>
    </Box>
  )
}

export default ProjectComponent