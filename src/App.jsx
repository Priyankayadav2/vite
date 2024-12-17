function App() {
  function clickButton(){
    alert("Hii !")
    test()
  }  
  function test(){
    alert("Test.")
  }  
  return (
  <div>
      <h1>Hello</h1>
      <button onClick={ function clickButton(){
    alert("Hii !")
    test()
  } }>Button</button>
    </div>
  )
}
export default App
