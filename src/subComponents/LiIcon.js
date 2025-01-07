import React from 'react'
import styled from 'styled-components'
import {motion, useScroll} from 'framer-motion'
import media from '../components/ResponsiveDevices'

const Figure = styled.figure`
position: absolute;
left: 0;
transform: translateX(-55%);

${media.md`
    transform: translateX(-55%);
`}
`

const Svg = styled.svg`
transform: rotate(-90deg);
width: 40px;
height: 40px;

${media.md`
width: 60px;
height: 60px;
`}

${media.xl`
width: 75px;
height: 75px;
`}
`
const Circle = styled.circle`
stroke: ${props => props.theme.textWhite};
stroke-width: 1;
fill: none;
`

const ProgressCircle = styled(motion.circle)`
stroke: ${props => props.theme.textWhite};
stroke-width: 5px;
`

const InnerCircle = styled.circle`
stroke-width: 1;
fill: ${props => props.theme.textYellow};
`

const LiIcon = ({references}) => {
    const { scrollYProgress } = useScroll({
        target: references,
        offset: ["start end", "end start"],
    })

  return (
    <Figure>
        <Svg viewBox="0 0 100 100">
            <Circle cx="75" cy="50" r="20" />
            <ProgressCircle 
                cx="75"
                cy="50"
                r="20"
                style={{pathLength: scrollYProgress}}
            />
            <InnerCircle cx="75" cy="50" r="10" />
        </Svg>
    </Figure>
  )
}

export default LiIcon