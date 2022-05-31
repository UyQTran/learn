import styled from 'styled-components'

interface ButtonGroupProps {
  gridColumnCount: {
    mobile: number
    desktop: number
  }
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.gridColumnCount.desktop}, 1fr);
  column-gap: ${props => props.theme.spacing(4)};
  
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(${props => props.gridColumnCount.mobile}, 1fr);
  }
`
