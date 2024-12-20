import { useState } from "react"
function App() {
const [count,setCount]=useState(0)
function countFun(item){
  if(item==="increment"){
    setCount(count+1)
  }
  else if(item==="decrement"){
    setCount(count-1)
  }
}
  return (
  <div>
    <button onClick={()=>countFun("decrement")}>decrement</button>
    <h2>Count = {count}</h2>
    
    <button onClick={()=>countFun("increment")}>increment</button>
    </div>
  )
}
export default App
