import {Suspense, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import LandingPage from './pages/LandingPage'
import AssignmentPage, {Assignment} from './pages/AssignmentPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SandboxPage from './pages/SandboxPage'
import {Progression, UserContext, userKey} from "./context/UserProgressionContext";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const App = () => {
  const userContext = useContext(UserContext)
  const [assignments, setAssignments] = useState<Assignment[]>([])
  useEffect(() => {
    import('./data/assignmentData.json')
      .then((res) => setAssignments(res.default))
      .catch(_ => null)
  }, [])
  const [user, setUser] = useState(userContext.user)
  const [progression, setProgression] = useState(userContext.user.progression)
  useEffect( () => localStorage.setItem(userKey, JSON.stringify({progression})), [progression])

  const solveProgression = (assignmentId: string) =>  {
    const currentProgression = progression[assignmentId]

    const progressionUpdate: Progression = {}

    if(!currentProgression.hasSolved) {
      const currentAssignment = assignments.find(assignment => assignment.id === assignmentId)
      const nextAssignment = assignments.find(assignment => assignment.id === currentAssignment?.nextId)
      progressionUpdate[nextAssignment?.id || ''] = {hasSolved: false, code: nextAssignment?.initialCode || ''}
    }

    currentProgression.hasSolved = true

    progressionUpdate[assignmentId] = currentProgression

    setProgression({...progression, ...progressionUpdate})
    setUser({progression: {...progression, ...progressionUpdate}})
  }

  const setProgressionCode = (code: string, assignmentId: string) =>  {
    const currentProgression = progression[assignmentId]
    currentProgression.code = code

    setProgression({...progression, currentProgression})
    setUser({progression: {...progression, currentProgression}})
  }

  return (
    <AppWrapper>
      <UserContext.Provider value={{user, solveProgression, setProgressionCode}}>
        <BrowserRouter basename="/">
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="assignment" element={<AssignmentPage />}>
                <Route path=":index" element={<AssignmentPage />}/>
              </Route>
              <Route path="sandbox" element={<SandboxPage />}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </UserContext.Provider>
    </AppWrapper>
  )
}

export default App
