import "./select.css"

export default function Select(props){
    return(
        <div className="card-container">
            <P>
                <span>{props.class}</span>
                <span>{props.name}</span>
            </P>
            <div className="select-button">.</div>
        </div>
    )
}