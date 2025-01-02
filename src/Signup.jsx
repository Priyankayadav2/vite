import { useState } from "react";
function Signup() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[subject,setSubject]=useState()


    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(event);
        
    };
    const submit=()=>{
        console.log(name,email,password,subject)

    }
    return(
        <div>
            <h1>Sign Up Page</h1>
            <div>
            <label for="fname">Enter name: </label>
            <input type="text" onChange={handleNameChange} placeholder="enter your name"/><br /><br />

            <label for="email">Email id : </label>
            <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="enter your e-mail"/><br /><br/>
            
            <label for="password">Password : </label>
            <input type="password" onChange={(event)=>{setPassword(event.target.value)}} placeholder="password"/><br /><br />
            
            <label for="subject">Choose a Subject:</label>

            <select name="subject" onChange={(event)=>{setSubject(event.target.value)}} id="subjects">
            <option value="math">Maths</option>
            <option value="Science">Science</option>
            </select>
            <button onClick={submit}>Submit</button><br />
            </div>

        </div>
    )
}
export default Signup;