/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from 'react'

const API_URL = 'https://api.github.com/users'

const UserContext = createContext()

const initialState = {
    user: {},
    repos: [],
    isLoading: false,
    error: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return { ...state, isLoading: true }
        case 'user/loaded':
            return { ...state, isLoading: false, user: action.payload }
        case 'repo/loaded':
            return { ...state, repos: action.payload, isLoading: false }
        case 'rejeted':
            return { ...state, error: action.payload, isLoading: false }
        default:
            throw new Error(`Unknown action ${action.type}`)
    }
}

function UserProvider({ children }) {
    const [{ user, repos, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    )

    const fetchUser = (userInput) => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'user/loaded', payload: data }))
    }

    const fetchRepos = (userInput) => {
        fetch(`https://api.github.com/users/${userInput}/repos`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'repo/loaded', payload: data }))
    }

    return (
        <UserContext.Provider
            value={{ user, repos, isLoading, error, fetchUser, fetchRepos }}
        >
            {children}
        </UserContext.Provider>
    )
}

const useUsers = () => {
    const context = useContext(UserContext)
    if (context === undefined)
        throw new Error('Context was used outside of the Provider')
    return context
}

export { UserProvider, useUsers }
