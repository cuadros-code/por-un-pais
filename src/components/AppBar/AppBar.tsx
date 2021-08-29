import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Buttons/Login'

interface NavProps {
  scroll: boolean
}

const AppBar = () => {

  const [scroll, setScroll] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 5){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })

  return (
    <Nav scroll={scroll}>
      <Title to="/"> 
        Por 1 País 
      </Title>
      <ContentButtons>
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
  background-color: ${ props => props.scroll && 'rgba(0,0,0,0.23)' };
  
  @media(max-width: 1000px) {
    padding: 0px 30px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media(max-width: 600px) {
    padding: 0px 10px;
  }
`

const Title = styled(Link)`
  font-size: 1.7rem;
  margin-left: 80px;
  font-weight: 700;
  text-decoration: none;
  color: white;
`

const ContentButtons = styled.div`
  margin-right: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  @media(max-width: 1000px) {
    width: 50%;
  }
  @media(max-width: 600px) {
    width: 60%;
  }
`

const LinkNav = styled(Link)`
  text-decoration: none;
  color: white;
`