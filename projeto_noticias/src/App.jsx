import Home from "./Home";
import AuthPage from "./pages/AuthPage";
import React, {useEffect, useState} from "react";
export default function App(){
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogin = (user) => {
        setCurrentUser(user);
    }
    const handleRegister = (newUser) =>{
        setCurrentUser(newUser);
    }
    const handleLogout = () =>{
        setCurrentUser(null);
        localStorage.removeItem('user')
    }
    useEffect(()=>{
        const hasUser = JSON.parse(localStorage.getItem('user'));
        if(hasUser){
            setCurrentUser(hasUser);
        }
    },[]);
    return(
        <>
        {currentUser != null? <Home user={currentUser.username} onLogout={handleLogout}/>: <AuthPage handleLogin = {handleLogin} handleRegister = {handleRegister}/>}
        </>
    )
}