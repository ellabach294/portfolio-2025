import React from 'react'
import styled from 'styled-components'

//particle config files
import ParticlesComponentDark from "../config/ParticlesComponentDark"

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`

const ParticleComponent = (props) => {
  return (
    <Box>
        <ParticlesComponentDark id="particles"/>
    </Box>
  )
}

export default ParticleComponent