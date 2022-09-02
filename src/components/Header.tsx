import styled from 'styled-components'
import {useNavigate} from "react-router-dom";

const Heading = styled.h1`
  font-size: calc(20px + 1vmin);
  opacity: 0.98;
  text-transform: lowercase;
  font-family: 'Roboto', sans-serif;
  margin-top: ${props => props.theme.spacing(4)};
  font-weight: 200;
  animation: downSize 0.3s;
  
  a {
    color: white;
    text-decoration: none;
  }


  @keyframes downSize {
    0% {
      font-size: calc(50px + 1vmin);
    }
    100% {
      font-size: calc(20px + 1vmin);
    }
  }

  @media only screen and (max-width: 1000px) {
    margin-top: ${props => props.theme.spacing(2)};
`


const Header = () => {
  const navigate = useNavigate()

  return (
    <Heading>
      <a href="" onClick={() => navigate('/')}>
        progg.it
      </a>
    </Heading>
  )
}

export default Header
