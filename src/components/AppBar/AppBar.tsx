import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Buttons/Login'
import { FaBars, FaWindowClose } from "react-icons/fa";

interface NavProps {
  scroll?: boolean,
  mobile?: boolean
}

const AppBar = () => {

  const [scroll, setScroll] = useState(false)
  const [navMobile, setNavMobile] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 5){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })

  return (
    <Nav scroll={scroll} mobile={navMobile}>
      {
        !navMobile 
        ? <IconMenu onClick={() => setNavMobile(!navMobile)} />
        : <IconMenuClose onClick={() => setNavMobile(!navMobile)} />
      }
      <Title to="/"> 
        Por 1 País 
      </Title>
      <ContentButtons mobile={navMobile} >
        <LinkNav to="" > Contacto </LinkNav>
        <LinkNav to="" > Equipo </LinkNav>
        <Button to="/login" >Iniciar sesión</Button>
      </ContentButtons>
    </Nav>
  )
}

export default AppBar

const Nav = styled.div<NavProps>`
  width: 100%;
  position: fixed;
  z-index: 1;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  background-color: ${ props => props.scroll && '#9E74EF' };

  @media(max-width: 1000px) {
    padding: 0px 30px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media(max-width: 600px) {
    padding: 0px 5px;
    height: ${props => props.mobile && '200px' };
  }
`
const IconMenu = styled(FaBars)`
  visibility: hidden;
  position: absolute;
  color: white;
  font-size: 1.6rem;
  margin-left: 15px;
  cursor: pointer;

  @media(max-width: 600px){
    visibility: visible;
  }

`

const IconMenuClose = styled(FaWindowClose)`
  visibility: hidden;
  position: absolute;
  color: white;
  font-size: 1.6rem;
  margin-left: 15px;
  cursor: pointer;

  @media(max-width: 600px){
    visibility: visible;
  }

`

const Title = styled(Link)`
  font-size: 1.7rem;
  margin-left: 80px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  @media(max-width: 1000px) {
    margin-left: 40px;
  }
  @media(max-width: 600px) {
    margin-left: 20px;
    visibility: hidden;
    position: absolute;
  }
`

const ContentButtons = styled.div<NavProps>`
  margin-right: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  @media(max-width: 1000px) {
    width: 50%;
  }
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-right: 20px;
    visibility: ${props => props.mobile ? 'visible': 'hidden'};
    flex-direction: column;
    justify-content: space-around;
  }
`

const LinkNav = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
`