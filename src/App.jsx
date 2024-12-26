import User from './User'
import Counter from './Counter'
import { useState } from 'react';


function App() {
  const[count,setCount]=useState(0)
  
  function handleReset(){
    setCount(0)
  }

  const userdata = {
    name:"rahul",
    email:"rahul01@gmail"
  };
  return (
    <div>
      <h1>Props</h1>
      <User user={userdata}/>
      <Counter count ={count} reset={handleReset}/>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}
export default App;

