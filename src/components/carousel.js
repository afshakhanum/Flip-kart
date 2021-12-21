import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slider.css"
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    }
    return (
      <div className="carousel">
        <Slider className="carousel-one" {...settings}>
          <div>
            <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1wCPRc47rPCY1B47ZdRO92lpF_wCXETs_g&usqp=CAU" alt="" />
          </div>
          <div>
          <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvnzQ1Hdww8JUOB-Vve_Zi5FQ6jYgCYJBiw&usqp=CAU" alt="" />
          </div>
          <div>
            <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDJ_HGyv0fEdweKsBoLAqKmy0KgWRNWkvLQ&usqp=CAU" alt="" />
          </div>
          <div>
          <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLaAkJjeDFK0IVS2qttp6v87kcHzxAzqQcg&usqp=CAU" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
export default Carousel;