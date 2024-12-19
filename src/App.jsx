import { useState } from "react"
function App() {
const [count,setCount]=useState(0)
function decFun(){
  setCount(count-1)
}
function incFun(){
  setCount(count+1)
}
  return (
  <div>
    <button onClick={decFun}>decrement</button>
    <h2>Count = {count}</h2>
    <button onClick={incFun}>increament</button>
    </div>
  )
}
export default App
