import { useState } from 'react'
import { useUsers } from '../context/ProfileContext'

export default function Form() {
    const [query, setQuery] = useState('')

    const { fetchUser } = useUsers()

    console.log(query)

    return (
        <form onSubmit={(e) => {e.preventDefault(), fetchUser(query)}}>
            <input
                type="text"
                placeholder="enter username"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}
