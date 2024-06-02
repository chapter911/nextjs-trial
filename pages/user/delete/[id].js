import { useRouter } from "next/router";
import Layout from "../../../components/Layout"
import UserItem from "../../../components/UserItem"
import { API_URL } from "../../../config"
import secureLocalStorage from "react-secure-storage";

export default function DeleteUserPage({apiResult}) {

    const router = useRouter()

    const submitHandler = async (e) => {
        e.preventDefault();
        let token = null
        if(secureLocalStorage.getItem('token')){
            token = secureLocalStorage.getItem('token').toString();
        }

        const userAPI = await fetch(`${API_URL}/users/${apiResult.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })

        if(userAPI.status === 204){
            router.push('/user')
        } else {
            if(apiResult.result === 404 || apiResult.result === 403){
                alert('Error Delete User')
                return
            }
        }
    }

    return (
        <Layout title="Delete User">
            <h3>Dou You Want to Delete This User?</h3>
            <UserItem user={apiResult}></UserItem>
            <button type="button" onClick={submitHandler}>Delete</button>
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