import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from "../assets/music/echoes-of-the-night-dusk.mp3"
import media from '../components/ResponsiveDevices'

const Box = styled.div`
display: flex;
cursor: pointer;
position: fixed;
left: 2rem;
top:6rem;
z-index: 10;

&>*:nth-child(1) {
  animation-delay: 0.2s;
}
&>*:nth-child(2) {
  animation-delay: 0.3s;
}
&>*:nth-child(3) {
  animation-delay: 0.4s;
}
&>*:nth-child(4) {
  animation-delay: 0.5s;
}
&>*:nth-child(5) {
  animation-delay: 0.6s;
}

${media.md`
  left: 10rem;
  top: 3rem;
`
}
`
const play = keyframes`
0%{
  transform: scaleY(1);
}
50%{
  transform: scaleY(2);
}
100%{
  transform: scaleY(1);
}
`

const Line = styled.span`
background: ${props => props.theme.textYellow};
border: 1px solid ${props => props.theme.textYellow};

animation: ${play} 1s ease infinite;
animation-play-state: ${(props) => props.$click ? "running" : "paused"};
height: 1rem;
width: 1px;
margin: 0 0.1rem;
`

const SoundBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if(!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <Box onClick={() => handleClick()} aria-label={click ? 'Play music' : 'Pause music'}>
      <Line $click={click} />
      <Line $click={click} />
      <Line $click={click} />
      <Line $click={click} />
      <Line $click={click} />
      
      <audio src={music} ref={ref} loop />
    </Box>
  )
}

export default SoundBar