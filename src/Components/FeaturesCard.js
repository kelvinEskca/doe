const Features = ({images,heading,paragraph}) => {
    return (
        <div className="box">
            <div className="circle">
                <img src={`../images/${images}`} alt="images" />
            </div>

            <div className="text">
                <h3 className="heading">{heading}</h3>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    );
}
 
export default Features;