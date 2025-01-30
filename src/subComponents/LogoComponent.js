import React from 'react'
import { LogoBlack, LogoWhite } from '../components/AllSvgs'
import styled from 'styled-components'

const Logo = styled.a`
    width: 6rem;
    height: 3rem; 

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoComponent = (props) => {

  return (
    <Logo href='/'>
        {props.theme === 'light' ? <LogoBlack /> : <LogoWhite />}
    </Logo>
  )
}

export default LogoComponent