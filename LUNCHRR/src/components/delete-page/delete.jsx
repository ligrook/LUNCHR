import "./delete.css"
// import Select from "./select/select"
import Navbar from "../navbar/navbar"
import ButtonMain from "../mainButton/buttonMain"
import Search from "./search/search"


export default function Delete(){
    return(
        <section className="delete-page">
                <Navbar/>
            <section className="main">
                <Search/>
                    <section className="display">
                                {/* <Select
                                    class={"11.1"}
                                    name={"Saran-Ochir"}
                                /> */}
                    </section>
                
            <section className="button-container">

            <ButtonMain buttonname={"Delete user"}/>

            </section>
                
            </section>
        </section>
    )
}