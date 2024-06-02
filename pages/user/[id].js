import Layout from "../../components/Layout";
import UserItem from "../../components/UserItem";
import { API_URL } from "../../config";

export default function Profile({user}){
    return (
        <Layout title={"Profile"}>
            <UserItem user={user}></UserItem>
        </Layout>
    )
}

export async function getServerSideProps({query: {id}}) {
    const userApi = await fetch(`${API_URL}/users/${id}`)
    const user = await userApi.json()
    return {
        props: {user}
    }
}