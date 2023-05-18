import Home from "./pages/home.jsx"
import { Routes, Route } from "react-router-dom";
import Signin from './pages/signin.jsx'
import Login from './pages/login.jsx'
import Createevent from './pages/createvent.jsx'
import Search from './pages/searchbar.jsx'
import { useEffect, useState } from "react";
import { auth } from "./Firebase";



function App() {
  const[userName,setUserName] = useState("");
  useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }
      else setUserName("");
      console.log(user);
    });
  },[]);
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/login" element={<Login  ></Login>}></Route>
        <Route path="/searchbar" element={<Search  ></Search>}></Route>
        <Route path="/home" element={<Home  ></Home>}></Route>
        <Route path="/createvent" element={<Createevent />}></Route>
      </Routes>
    </>
  );
}

export default App;
