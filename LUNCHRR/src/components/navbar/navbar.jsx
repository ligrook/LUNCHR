import Profile from "./profile/profile"
import Button from "./button/button"
import Drop from "./drop-down-menu/dropmenu"
import "./navbar.css"
export default function Navbar(){
    return(
        <nav>
            <Profile
                name={"Saran-Ochir"}
                position={"UI/UX designer , Developer"}
            />
            <Drop gradeName={"12"}/>
            <Drop gradeName={"11"}/>
        <Button
            btnName={"Add card"}/>

        <Button
            btnName={"Delete card"}/>
        </nav>
    )
}