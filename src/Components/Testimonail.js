import React,{useState,useEffect} from "react";
import Slider from "react-slick/lib/slider";
import axios from "axios";
const Testimonial = ({image,title,paragraph,reviews,role}) => {
    const [Testimonials,setTestimonials] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentIndex(next)
    };

    useEffect(() => {
        const grabPrayer = async () =>{
            try {
                const request = await axios.get('https://doeclient-production.up.railway.app/api/testimony');
                if(request.status === 200){
                    setTestimonials(request.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        grabPrayer();
            
    }, []);
    return (
        <Slider {...settings}> 
        {Testimonials.map((currentItem)=>{ 
            return(
                <div className="box" key={currentItem.id}>
                    <div className="circle">
                        {/* <img src={`../images/${currentItem.image}`} alt="images" /> */}
                    </div>

                    <h3 className="heading">{currentItem.fname}</h3>
                    <small>{currentItem.subject}</small>
                    <p className="paragraph">{currentItem.testimony}</p>
                </div>
            )
        })}
        </Slider>
    );
}
 
export default Testimonial;