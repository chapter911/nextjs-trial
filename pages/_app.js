//disini smemua berlaku secara global untuk semua page
import { AuthProvider } from "../context/AuthContext";
//ini untuk stylingnya
import '../styles/globals.css';

function MyApp({Component, pageProps}){
    return (
        <AuthProvider>
            <Component {...pageProps}/>
        </AuthProvider>
    );
}

export default MyApp;