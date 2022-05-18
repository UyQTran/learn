import { Suspense } from 'react'
import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import AssignmentPage from "./pages/AssignmentPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`


function App() {

  return (
    <AppWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="assignment" element={<AssignmentPage />}>
              <Route path=":index" element={<AssignmentPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppWrapper>
  )
}

export default App
