import Login from "../components/Login";
import React, {useState} from "react";
import Register from "../components/Register";
import '../css/auth.css'

export default function AuthPage(props){
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) =>{
        setCurrentForm(formName);
    }
    return(
        <div className="auth-form-container">
        {currentForm === 'login'? <Login onFormSwitch={toggleForm} onLogin = {props.handleLogin} />:<Register onFormSwitch={toggleForm} onRegister={props.handleRegister}/>}
        </div>
    )
}