import "./card.css"

export default function Card(props){

    return(
        <div className="card">
            <div className="name">
                <p>{props.grade}</p>
                <p>{props.name}</p>
                <p>{props.surname}</p>
            </div>
            <div className="selector">.</div>
        </div>
    )

}