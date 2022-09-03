import React, {createContext} from 'react'

export const userKey = 'user'

interface User {
  progression: Progression
}

export interface Progression {
  [assignmentId: string]: AssignmentProgression
}

interface AssignmentProgression {
  hasSolved: boolean
  code: string
}

interface UserContextType {
  user: User
  solveProgression: (assignmentId: string) => void
  setProgressionCode: (code: string, assignmentId: string) => void
}

const defaultUser: User = JSON.parse(localStorage.getItem(userKey) || '{"progression":{"intro": {"hasSolved": false, "code": "print(\'Hei verden!\')"}}}')

const defaultUserContext: UserContextType = {
  user: defaultUser,
  solveProgression: (assignmentId: string) => {},
  setProgressionCode: (code, assignmentId) => {}
}

export const UserContext = createContext(defaultUserContext)
