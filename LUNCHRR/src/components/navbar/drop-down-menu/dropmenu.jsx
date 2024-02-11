import "./dropmenu.css"
import Uparrow from "./expand_less_up.svg"
import Button from "../button/button"
export default function Drop(props){
    return(
        <div className="drop-down-menu">
            <div className="visible">
                <p className="mune-name">{props.gradeName}</p>
                <img src={Uparrow} alt="" />

            </div>
            <div className="button-container">
                <Button btnName={""}/>
                <Button btnName={"12.2"}/>
                <Button btnName={"12.3"}/>
            </div>
        </div>
    )
}