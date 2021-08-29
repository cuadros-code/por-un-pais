import styled from 'styled-components'
import { ButtonGeneral } from '../../components/Buttons/Button'
import { TextField } from '../../components/TextField/TextField'
import imgGoogle from '../../assets/img/google.svg'
import imgFace from '../../assets/img/facebook.svg'

const Login = () => {
  return (
    <Container>
      <Card>
        <form>
          <Group>
            <h2>Iniciar sesión</h2>
            <SocialButton>
              <img src={imgGoogle} alt="Google" />
              Sesión con Google
            </SocialButton>

            <SocialButton>
              <img src={imgFace} alt="Google" />
              Sesión con Facebook
            </SocialButton>

            <h4> ó inicia sesión con el correo</h4>
            
            <InputGroup>
              <label htmlFor="">Correo electrónico</label>
              <TextField type="email" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="">Contraseña</label>
              <TextField type="password" />
            </InputGroup>

            <ButtonGeneral
              color='#9E74EF'
            >
              Iniciar sesión
            </ButtonGeneral>
          </Group>
        
        </form>
        <div>

        </div>
      </Card>
    </Container>
  )
}

export default Login

const Container = styled.div`
  padding-top: 45px;
  min-height: 100vh;
  width: 100vw;
  height: 100%;
  background-color: #b6b6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const Card = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.09);
  width: 70%;
  height: 520px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  form{
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`
const Group = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  h2{
    text-align: left ;
    margin-bottom: 15px;
  }
  h4{
    margin-bottom: 25px;
    color: #868383;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`
const SocialButton = styled.button`
  padding: 5px 13px;
  background: transparent;
  color: #000;
  border: 2px solid #c0bcbc;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img{
    width: 25px;
    padding-right: 10px;
  }

  :active {
    background: rgba( 255, 255, 255, 0.3 );
  }
`