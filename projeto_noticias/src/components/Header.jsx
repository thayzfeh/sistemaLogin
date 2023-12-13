import userPic from '../images/account_circle.svg'
export default function Header(props){
    return(
        <header className='header'>
            <div className='profile'>
                <img src={userPic} alt="foto de perfil"/>
                <p>{props.name}</p>
            </div>
            <button onClick={props.onLogout}>Logout</button>
        </header>
    )
}