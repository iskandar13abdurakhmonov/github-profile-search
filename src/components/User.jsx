import { useUsers } from '../context/ProfileContext'

export default function User() {
    const { user } = useUsers()

    const avatar = user.avatar_url

    console.log(user)

    return (
        <div>
            <img
                style={{ width: '100px', height: '100px' }}
                src={avatar}
                alt={avatar}
            />
        </div>
    )
}
