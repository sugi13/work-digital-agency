import { useState } from "react" ;

export const Signup = () =>{
    /* states */
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    /* form validation */
    function Validate(){
        if(userName == '' && email == '' && password == ''){
            setIsEmpty(true);
        }
        else{
            alert('Thank you')
        }
    }

    return (
        <div className="signup">
        <div className="illustration">
            <img src="/src/assets/DrawKit Vector Illustration Team Work (19).png"/>
        </div>
        <div className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="header">
        <h1>Create account</h1>
        <p>Let's get started with your 30 days free trial</p>
        </div>
        <div>
        <p className="label"> <ion-icon name="person-outline"></ion-icon> Username</p>

        <input type="text" placeholder= "User Name" onChange={(e) =>{
            setUserName(e.target.value);
        }} />

        {isEmpty && <p className="error"> <ion-icon name="alert-outline"></ion-icon>Username is required</p>}
        </div>
        <div>
        <p className="label"><ion-icon name="mail-outline"></ion-icon> Email</p>
        <input type="email" placeholder="Email" onChange={(e) =>{
            setEmail(e.target.value);
        }}/>
         {isEmpty && <p className="error"> <ion-icon name="alert-outline"></ion-icon>Email is required</p>}
        </div>
        <div>
        <p className="label"><ion-icon name="eye-outline"></ion-icon> Password</p>
        <input type="password" placeholder="Password" onChange={(e) =>{
            setPassword(e.target.value);
        }} />
        {isEmpty && <p className="error"><ion-icon name="alert-outline"></ion-icon>Password is needed!</p>}
        </div>
        <div>
            <button onClick={() => Validate()}>Sign up</button>
        </div>
    </div>
        </div>
    )
}