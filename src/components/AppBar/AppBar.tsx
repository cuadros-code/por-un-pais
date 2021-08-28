import styled from 'styled-components'
import { Button } from '../Buttons/Login'

const AppBar = () => {
  return (
    <Nav>
      <div>
        <Title> 
          Por 1 País 
        </Title>
      </div>
      <ContentButtons>
        <Link href="!#"> Contacto </Link>
        <Link href="!#"> Equipo </Link>

        <Button>Iniciar sesion</Button>
      </ContentButtons>
    </Nav>
  )
}

export default AppBar

const Nav = styled.nav`
  padding: 0px 80px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1000px) {
    padding: 0px 30px;
  }
  @media(max-width: 600px) {
    padding: 0px 10px;
  }
`

const Title = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  color: #1900a7;
`

const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  @media(max-width: 1000px) {
    width: 50%;
  }
  @media(max-width: 600px) {
    width: 60%;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: white;
`