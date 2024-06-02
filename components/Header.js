import Link from "next/link"
import AuthContext from "../context/AuthContext"
import { useContext } from "react"
//untuk import style khusus
import styles from '../styles/Header.module.css'

export default function Header(){
    const {user, logout} = useContext(AuthContext)

    return (
        <header className={styles.header}>
            <div>
                <h2>Next Js Web App</h2>

                <nav>
                    <ul>
                        <li><Link href='/user'>Users</Link></li>
                        {
                            user ?
                            <>
                                <li><Link href='/user/profile'>Profile</Link></li>
                                <li><button type="button" onClick={ () => logout() }>Logout</button></li>
                            </> :
                                <li><Link href='/user/login'>Login</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}
