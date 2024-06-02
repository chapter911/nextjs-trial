import { useRouter } from "next/router";
import { useState } from "react";
import { API_URL } from "../../../config";
import Layout from "../../../components/Layout";
import Link from "next/link";

export default function EditUserPage({ apiResult }){
    const[values, setValues] = useState({
        name: apiResult.name,
        role: apiResult.role
    })

    const router = useRouter()

    const handleInputChage = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const userAPI = await fetch(`${API_URL}/users/${apiResult.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })

        if(userAPI.ok){
            router.push('/user')
        } else {
            if(apiResult.result === 404 || apiResult.result === 403){
                alert('Error Edit User')
                return
            }
        }
    }

    return(
        <Layout title="Edit User">
            <h2>Edit User</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>name</label>
                    <input type="email" id="name" name="name" value={values.name} onChange={handleInputChage}/>
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" id="role" name="role" value={values.role} onChange={handleInputChage}/>
                </div>
                <button type="submit" onClick={submitHandler} value="Update">Update</button>
            </form>
            <p>
                Cancel? <Link href="/user">Login</Link>
            </p>
        </Layout>
    )
}

export async function getServerSideProps({params: {id}}) {
    const userApi = await fetch(`${API_URL}/users/${id}`)
    const apiResult = await userApi.json()
    return {
        props: {apiResult}
    }
}