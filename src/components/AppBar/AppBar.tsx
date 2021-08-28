import styled from 'styled-components'
import { Button } from '../Buttons/Login'

const AppBar = () => {
  return (
    <Nav>
      <div>
        <Title> 
          <span className="color-1">Por </span> 
          <span className="color-2">1 </span> 
          <span className="color-3">País </span>
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
`

const Title = styled.p`
  font-size: 1.7rem;
  font-weight: 700;

`

const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`

const Link = styled.a`
  text-decoration: none;
  color: white;
`