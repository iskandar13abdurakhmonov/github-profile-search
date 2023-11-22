import { useState } from 'react'
import { useUsers } from '../context/ProfileContext'

export default function Form() {
    const [query, setQuery] = useState('')

    const { fetchUser, fetchRepos } = useUsers()

    console.log(query)

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault(), fetchUser(query), fetchRepos(query)
            }}
        >
            <label className='text-red-500'>Label</label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="enter username"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}
