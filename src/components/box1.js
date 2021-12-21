import "./box1.css"

function Box1(props) {
    return (
        <div className="box33">
         <img className="imges" src={props.src} alt="" />
         <p className="cap1">{props.cap1}</p>
         <p className="cap2">{props.cap2}</p>
         <p className="cap3">{props.cap3}</p>
        </div>
    )
}
export default Box1;