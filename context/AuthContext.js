import { createContext, useState } from "react"
import { useRouter } from "next/router"
import { API_URL } from "../config"
import secureLocalStorage from "react-secure-storage"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [token, setToken] = useState(null)
    const router = useRouter();

    const login = async({email, password}) => {
        const authAPI = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const data = await authAPI.json()

        if(authAPI.ok){
            setUser(data)
            router.push('/user/profile')
        } else {
            alert("username or password is wrong")
        }
    }

    const register = async (user) => {
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUser(data.user);
            router.push('/user/login');
        } catch (error) {
            setError(error.message);
            setError(null);
        }
    }

    const logout = () =>{
        secureLocalStorage.removeItem("token")
        setToken(null)
        setUser(null)
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{user, error, token, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext