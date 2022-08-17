import React, {useState} from 'react';
import LoginForm from './components/LoginForm'; 
import './index.css';


function App() {
  const adminUser = {
    email: "mouayad.ahmad7@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in")
      setUser({
        name: details.name,
        email:details.email
      })
    }else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }
  const Logout = () => {
    console.log('Logout');
    setError("");
    setUser({name:"",email:""});
  }

  return (
    <div className='App container justify-content-center align-items-center vh-100 d-flex '>
      {(user.email != "") ? (
        <div className='welcome text-center bg-primary p-5 rounded text-light'>
          <h2>welcome, <span>{user.name}</span></h2>
          <button onClick={Logout} className="btn btn-dark text-light mt-4">Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error} className="" />
      )}
    </div>
  );
}

export default App;