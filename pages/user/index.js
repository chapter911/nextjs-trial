import Layout from "../../components/Layout";
import UserItems from "../../components/UserItems";
import { API_URL } from "../../config";

export default function UserPage({users}){
    return (
        <Layout title="Users Page" description="Page for all users" keyword="nextjs, react">
            <h2>All Users</h2>
            {/* {
                users.map((user) => (
                    <ul>
                        <li>{user.userName}</li>
                    </ul>
                ))
            } */}
            <UserItems users={users}></UserItems>
        </Layout>
    )
}

export async function getServerSideProps() {
    const usersApi = await fetch(`${API_URL}/users`)
    const users = await usersApi.json()
    return {
        props: {users}
    }
}