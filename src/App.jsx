import User from './User'
function App() {
  let name="rahul"
  let email="rahul01@gmail"
  return (
    <div>
      <h1>Props</h1>
      <User name={name} email={email}/>
    </div>
  );
}
export default App;

