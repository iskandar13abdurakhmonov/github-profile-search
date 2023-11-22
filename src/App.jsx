import Form from './components/Form'
import User from './components/User'
import { UserProvider } from './context/ProfileContext'

function App() {

    return (
        <UserProvider>
            <div className="wrapper">
                <header className="header">
                    <div className="header__container">header</div>
                </header>
                <main className="main">
                    <div className="main__container">
                        <User />
                        <Form/>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer__container">footer</div>
                </footer>
            </div>
        </UserProvider>
    )
}

export default App
