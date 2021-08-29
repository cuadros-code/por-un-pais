import styled from 'styled-components'
import { ButtonGeneral } from '../../components/Buttons/Button'
import { TextField } from '../../components/TextField/TextField'
import imgGoogle from '../../assets/img/google.svg'
import imgFace from '../../assets/img/facebook.svg'
import imgForm from '../../assets/img/form.svg'

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
              <TextField type="email" placeholder="example@gmail.com" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="">Contraseña</label>
              <TextField type="password" placeholder="Min 8 caracteres" />
            </InputGroup>

            <ButtonGeneral
              color='#9E74EF'
            >
              Iniciar sesión
            </ButtonGeneral>
          </Group>
        
        </form>
        <Info>
          <p>Con tu ayuda podremos hacer un cambio.</p>
        </Info>
      </Card>
    </Container>
  )
}

export default Login

const Container = styled.div`
  padding-top: 40px;
  min-height: 100vh;
  width: 100vw;
  height: 100%;
  background-color: #b6b6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:500px){
    padding-top: 20px;
  }
  
`

const Card = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  width: 70%;
  height: 520px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width:700px){
    grid-template-columns: 1fr;
    width: 90%;
  }

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
  @media (max-width:700px){
    width: 80%; 
  }
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

const Info = styled.div`
  background-image: url(${imgForm});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:700px){
    display: none;
  }
  p{
    text-align: center;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
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