import { useContext,useState,useEffect } from "react";
import PrayerContext from "../PrayerContext";
import Slider from "react-slick/lib/slider";
import axios from "axios";
const Testimonies = () => {
    axios.defaults.withCredentials = true;
    const [prayers,setPrayers] = useState('');
    const {increase,count,setCount} = useContext(PrayerContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentId = prayers && prayers[currentIndex] ? prayers[currentIndex].id : '';


    const increaseItem = (item,itemId)=>{
        increase(item,itemId);
        setCount(count+1);
    }

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
                const request = await axios.get('http://localhost:5000/api/prayer');
                if(request.status === 200){
                    setPrayers(request.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        grabPrayer();
            
    }, []);

    if (prayers && prayers.length) {
        const prayer = prayers.find((prayer) => prayer.id === currentId);
        if (prayer) {
            setCount(prayer.count);
        }
    }
    
     
    return (
        <Slider {...settings}>  
            {prayers && prayers.map((currentItem,i)=>{
                return(
                    <div className="box" key={currentItem.id}>
                        <div className="left">
                            <span className="purpleText">{currentItem.subject}</span>
                            <p className="paragraph">{currentItem.prayer}</p>
                            <div className="row">
                                <div className="left">
                                    <small className="date">{currentItem.createdAt}</small>
                                    <small className="count">Prayed {count} time(s)</small>
                                </div>
                                <div className="left right">
                                    <small className="date">{currentItem.fname}</small>
                                    <div className="country">
                                        {/* <img src={`../images/${currentItem.flag}`} alt={currentItem.country} /> */}
                                        {/* <h3 className="heading">{currentItem.country}</h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <button onClick={()=>increaseItem(currentItem.id,currentItem)}>Pray</button>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
       
        
  
}
 
export default Testimonies;