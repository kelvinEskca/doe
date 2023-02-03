const Result = ({heading,paragraph,image}) => {
    return (
        <div className="box">
            <div className="left">
                <img src={`../images/${image}`} alt="images" />
            </div>

            <div className="right">
                <h3 className="heading">{heading}</h3>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    );
}
 
export default Result;