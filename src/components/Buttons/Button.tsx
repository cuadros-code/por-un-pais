import styled from 'styled-components';

interface ButtonProps {
  color? : string,
  text?  : string
} 

export const ButtonGeneral = styled.button<ButtonProps>`
  padding: 10px 13px;
  background: ${props => props.color ? props.color : 'transparent'};
  color: ${props => props.text ? props.text : 'white' };
  border: none;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  width: 100%;

  :active {
    background: rgba( 255, 255, 255, 0.3 );
  }
`