import "./mobile1.css";

function Mobile1(props){
    return(
        <div className="mobie1">
            <img className="mimg" src={props.src} alt=""/>
            <p className="capt1">{props.capt1}</p>
            <p className="capt2">{props.capt2}</p>
        </div>
    )
}

export default Mobile1;