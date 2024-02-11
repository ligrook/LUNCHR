import Profile from "./profile/profile";
import "./navbar.css"
export default function Navbar(){
    return(
        <nav>
            <Profile
                name={"hello"}
                position={"world"}
            />

        </nav>
    )
}