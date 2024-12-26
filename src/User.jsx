function User({user}){
    console.log(user);
    const {name,email}=user;
    return (
        <div>
            <h1>User</h1>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            
        </div>
    )
}
export default User;
