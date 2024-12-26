import User from './User'
function App() {
  const userdata = {
    name:"rahul",
    email:"rahul01@gmail"
  };
  return (
    <div>
      <h1>Props</h1>
      <User user={userdata}/>
    </div>
  );
}
export default App;

