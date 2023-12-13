import React, {useState} from "react"
export default function Login(props) {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:3001/accounts');
        const users = await response.json();

        const user = users.find(u => u.email === email && u.password === pass);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            props.onLogin(user);
        } else {
            alert('Credenciais inválidas');
        }
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="youremail@gmail.com"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="********"/>
                <button type="submit" className="submit">Log In</button>
            </form>
            <button className="link-btn"onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </>
    )
}