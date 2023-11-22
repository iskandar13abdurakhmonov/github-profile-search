import { useUsers } from '../context/ProfileContext'

export default function ProfileDetails() {
    const { user, repos } = useUsers()

    const avatar = user.avatar_url

    console.log(user)
    console.log(repos)

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
