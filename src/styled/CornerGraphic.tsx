import styled from 'styled-components'
import {Theme} from '@mui/material'



interface CornerGraphicProps {
  theme: Theme
  inverted?: boolean
}

const CornerGraphic = styled.div<CornerGraphicProps>`
  position: absolute;
  bottom: ${props => props.inverted ? 35 : -60}%;
  left: ${props => props.inverted ? 30 : -60}%;
  transform: rotate(25deg);
  height: 60%;
  width: 200%;
  background-color: ${props => props.theme.palette.primary.main};

  @media only screen and (max-width: 1900px) {
    bottom: ${props => props.inverted ? 55 : -60}%;
  }

  @media only screen and (max-width: 1600px) {
    height: 80%;
    ${props => props.inverted ? 'display: none' : ''};
  }
`

export default CornerGraphic
