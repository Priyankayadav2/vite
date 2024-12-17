import { useState } from "react"

function App() {
const [data,setData]=useState("peter")
function update(){
  setData('john')
}


  return (
  <div>
      <h1>State</h1>
      <h2>{data}</h2>
      <button onClick={update}>Update Data</button>
    </div>
  )
}
export default App
