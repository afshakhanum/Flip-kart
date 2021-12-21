import "./categstyles.css"

function Categories(props) {
    return(
    <div class="categories">
         <img className="img1" src={props.src} alt="" />
         <p className="p1">{props.text}</p>
    </div>
    );
}

export default Categories;