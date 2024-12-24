import { useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  function countFun(item) {
    if(count<=1 && item==="decrement"){
      return false;
    }
    // setCount((preCount) => 
    //   item === "increment" ? preCount+1 : Math.max(preCount-1,1)
    // );
    let a=count;
    // if(item==="increment"){
    //   a++;
    // }
    // else{
    //   a--;
    // }
    item ==="increment" ? a++ : a--
    
    setCount(a)
    
  }
  return (
    <div>
      <button onClick={() => countFun("decrement")}>decrement</button>
      <h2>Count = {count}</h2>
      <button onClick={() => countFun("increment")}>increment</button>
    </div>
  );
}
export default App;

