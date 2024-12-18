import { useState } from "react"
function App() {
const [data,setData]=useState("peter")
function update(){
  setData('john')
} 
function updateEmail(){
  emailId="anil@gmail.com"
  console.log(emailId);
  
} 
  let emailId="test@gmail"
  emailId="demo@gmail.com"
  return (
  <div>
      <h1>State</h1>
      <h2>{data}</h2>
      <h3>{emailId}</h3>
      <button onClick={update}>Update Data</button>
      <button onClick={updateEmail}>Update Email</button>
    </div>
  )
}
export default App
