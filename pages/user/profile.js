import { useContext } from "react";
import Layout from "../../components/Layout";
import UserItem from "../../components/UserItem";
import { API_URL } from "../../config";
import AuthContext from "../../context/AuthContext";
// import secureLocalStorage from "react-secure-storage";

export default function ProfilePage(){
    const {user} = useContext(AuthContext)
    // const token = secureLocalStorage.getItem('token') ? secureLocalStorage.getItem('token').toString() : null

    return (
        <Layout title="Profile">
            {/* <h6>{token}</h6> */}
            <UserItem user={user}></UserItem>
        </Layout>
    )
}

// export default function ProfilePage({user}){
//     return (
//         <Layout title="Profile">
//             <UserItem user={user}></UserItem>
//         </Layout>
//     )
// }

// export async function getServerSideProps() {
//     const userApi = await fetch(`${API_URL}/user/42`)
//     const user = await userApi.json()
//     return {
//         props: {user}
//     }
// }