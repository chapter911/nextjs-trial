import { useContext, useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import AuthContext from "../../context/AuthContext";

export default function LoginPage() {
const authContext = useContext(AuthContext);
const { login } = authContext || {};
const [email, setEmail] = useState("");
const [password, setHashPassword] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    if (login) {
        login({ email, password });
    }
};

return (
    <Layout title="Login">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label>Email Address</label>
                <input
                    type     = "email"
                    id       = "email"
                    name     = "email"
                    value    = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type     = "password"
                    id       = "password"
                    name     = "password"
                    value    = {password}
                    onChange = {(e) => setHashPassword(e.target.value)}
                />
            </div>
            <button type="button" onClick={submitHandler} value="Login">
            LOGIN
            </button>
        </form>
        <p>
            Belum Punya akun?{" "}
            <Link href="/user/create">Create Account</Link>
        </p>
        </Layout>
    );
}
