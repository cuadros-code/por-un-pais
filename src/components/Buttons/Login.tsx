import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  padding: 8px 13px;
  background: transparent;
  color: white;
  border-radius: 50px;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  :hover{
    
  }
  :active {
    background: rgba( 255, 255, 255, 0.3 );
  }
`