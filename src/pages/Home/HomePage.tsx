import styled from 'styled-components'
import AppBar from '../../components/AppBar/AppBar'
import img from '../../assets/img/home.svg'
import imgMoney from '../../assets/img/money.svg'
import ios from '../../assets/img/apple-64.png'
import android from '../../assets/img/google-play.svg'

const HomePage = () => {
  return (
    <Container>
      <AppBar />
      <Content>
        <Description>
          <h2>Por un mejor país</h2>
          <p>Denuncia los actos de corrupción y ayuda a crear un lugar mejor donde vivir.</p>

          <ContentButtons> 
            <Buttons>
              <img src={android} alt="" />
              <div>
                <span>
                  Disponible en
                </span>
                <strong>
                  Google play
                </strong>
              </div>
            </Buttons>

            <Buttons>
              <img src={ios} alt="" />
              <div>
                <span>
                  Disponible en
                </span>
                <strong>
                  App Store
                </strong>
              </div>
            </Buttons>

          </ContentButtons>
        </Description>
        <ContentImg>
          <Img src={imgMoney} alt="money" />
        </ContentImg>

      </Content>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }

`

const ContentButtons = styled.div`
  margin-top: 20px;
  display: flex;
  width: 400px;
  justify-content: space-around;
`

const Buttons = styled.button`
  color: white;
  padding: 5px 10px;
  background: black;
  border-radius: 10px;
  display: flex;
  border: none;
  cursor: pointer;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 30px;
    margin-right: 5px;
  }
`



const Description = styled.div`
  display: flex;
  height: 70vh;
  padding: 0px 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p{
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
    color: #060486;
    @media (max-width: 600px){
      text-align: center;
    }
  }

  h2{
    color: #000000;
    margin-bottom: 20px;
  }

  @media (max-width: 600px){
    padding: 0px 10px;
  }
`

const ContentImg = styled.div`
  @media (max-width: 600px){
    display: flex;
    justify-content: center;
  }
`

const Img = styled.img`
  width: 90%;
  position: relative;
`