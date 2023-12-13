import React, {useState} from "react"
export default function Register(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[username, setUsername] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const emailExists = await checkEmailExists(email);
            if (emailExists) {
              alert('Este e-mail já está registrado. Por favor, escolha outro e-mail.');
            } else {
              const response = await fetch('http://localhost:3001/accounts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
              });
              if (response.ok) {
                const newUser = await response.json();
                localStorage.setItem('user',JSON.stringify(newUser))
                props.onRegister(newUser);
              } else {
                alert('Erro ao registrar usuário');
              }
            }
          } catch (error) {
            console.error('Erro durante o registro:', error);
            alert('Erro ao registrar usuário');
          }
    }
    const checkEmailExists = async (email) => {
        const response = await fetch(`http://localhost:3001/accounts?email=${email}`);
        const users = await response.json();
        return users.length > 0;
      };    
    return(
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder="Your Username"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="youremail@gmail.com"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="********"/>
                <button type="submit" className="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </>
    )
}