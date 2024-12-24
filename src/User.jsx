function User(props){
    console.log(props);
    // let name = props.name
    // let email =  props.email
    let {name,email} =props
    return (
        <div>
            <h1>User</h1>
            <h2>{name}</h2>
            <h2>{email}</h2>
            
        </div>
    )
}
export default User;
