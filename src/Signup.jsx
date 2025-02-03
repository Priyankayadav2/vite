import { useState } from "react";
function Signup() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[subject,setSubject]=useState()
    const[skills,setSkills]=useState()

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(event);
        
    };
    const handleSkills=(event)=>{
        console.log(event.target.value);
        console.log(event.target.checked);
        if(event.target.checked){
            setSkills(event.target.value);
            console.log("work");
        }
        else{
            setSkills()
            console.log("not work");
        }
            
        }

    
    const submit=()=>{
        console.log(name,email,password,subject,checkbox)
    
    }
    return(
        <div>
            <h1>
                {skills}
            </h1>
            <h1>Sign Up Page</h1>
            <div>
            <label for="fname">Enter name: </label>
            <input type="text" onChange={handleNameChange} placeholder="enter your name"/><br /><br />

            <label for="email">Email id : </label>
            <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="enter your e-mail"/><br /><br/>
            
            <label for="password">Password : </label>
            <input type="password" onChange={(event)=>{setPassword(event.target.value)}} placeholder="password"/><br /><br />
            
            
            <label for="container">Skills : </label>
            
            <input type="checkbox"  value="javascript" onChange={(event)=>{handleSkills(event)} }/>
            
            <label class="container">JavaScript
    
            
            <span class="checkmark"></span>
            </label>
            
            <input type="checkbox" value="python" onChange={(event)=>{handleSkills(event)} }/>
    
            
            <label class="container">Python

            <span class="checkmark"></span>
            </label>

            <input type="checkbox"  value="reactjs" onChange={(event)=>{handleSkills(event)} }/>
    
            
            <label class="container">ReactJs
            
            <span class="checkmark"></span>
            </label><br /><br/>
            <label for="subject">Choose a Subject : </label>

            <select name="subject" onChange={(event)=>{setSubject(event.target.value)}} id="subjects">
            <option value="math">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Social Science">Social Science</option>
            </select>
            <br /><br />
            <label for="gender">Gender : </label>
            <input type="radio" name="gender" />
            <label for="html">Male</label>
            <input type="radio"  name="gender"/>
            <label for="css">Female</label>
            <input type="radio"  name="gender" />
            <label for="javascript">Other</label><br /><br />
            <button onClick={submit}>Submit</button><br />
            </div>

        </div>
    )
}
export default Signup;