import React from 'react'
import styled from 'styled-components'

//particle config files
import ParticlesComponent from "../config/ParticlesComponent"

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
        <ParticlesComponent id="particles"/>
    </Box>
  )
}

export default ParticleComponent