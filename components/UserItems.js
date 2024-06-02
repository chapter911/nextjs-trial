import Link from "next/link";

export default function UserItems({users}){
    if(users){
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td><Link href={`/user/${user.id}`}>Profile</Link></td>
                            <td><Link href={`/user/edit/${user.id}`}>Edit</Link></td>
                            <td><Link href={`/user/delete/${user.id}`}>Delete</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}