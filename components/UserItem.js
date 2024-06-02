export default function UserItem({user}){
    if(user){
        return (
            <div>
                <div><h3>Profile</h3></div>
                <div>Id : {user.id}</div>
                <div>UserName : {user.userName}</div>
                <div>Email : {user.email}</div>
                <div>Role : {user.role}</div>
            </div>
        )
    }
}