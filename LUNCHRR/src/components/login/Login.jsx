import "./login.css"

export default function Login(){
    return(

        <section className="login-background">

        <div className="container">

            <h1 className="header">Access your account</h1>

            <div className="input-el">
                <h3 className="sub">Email</h3>
                <input type="text" />
            </div>
            
            <div className="input-el">
                <h3 className="sub">Password</h3>
                <input type="text" />
            </div>

            <button>Log in</button>
            
        </div>

</section>
        
    )
}