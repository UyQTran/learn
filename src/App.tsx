import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import AssignmentPage from "./pages/AssignmentPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Theme, useTheme} from "@mui/material";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

interface CornerGraphicProps {
  theme: Theme;
  inverted?: boolean;
}

const CornerGraphic = styled.div<CornerGraphicProps>`
  position: absolute;
  bottom: ${props => props.inverted ? 35 : -60}%;
  left: ${props => props.inverted ? 30 : -60}%;
  transform: rotate(25deg);
  height: 60%;
  width: 200%;
  background-color: ${props => props.theme.palette.primary.main};



  @media only screen and (max-width: 1600px) {
    height: 80%;
    ${props => props.inverted ? 'display: none' : ''};
  }
`

function App() {
  const theme = useTheme()

  return (
    <AppWrapper>
      <CornerGraphic theme={theme}/>
      <CornerGraphic theme={theme} inverted/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="assignment" element={<AssignmentPage />}>
            <Route path=":index" element={<AssignmentPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App
