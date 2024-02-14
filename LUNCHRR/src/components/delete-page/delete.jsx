import "./delete.css"

import Navbar from "../navbar/navbar"
import ButtonMain from "../mainButton/buttonMain"
import Search from "./search/search"
import Card from "./card/card"

export default function Delete(){
    return(
        <section className="delete-page">
                <Navbar/>
            <section className="main">
                <Search/>
                    <section className="display">
                        <Card
                            grade={"11.1"}
                            name={"Saran-Ochir"}
                            surname={".S"}
                        />
                    
                    </section>
                
                <section className="button-container">

                    <ButtonMain buttonname={"Delete user"}/>

                </section>
                
            </section>
        </section>
    )
}