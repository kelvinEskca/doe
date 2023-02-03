import Button from "./Button";

const Cards = ({btnText,heading,paragraph,image}) => {
    return (
        <div className="box">
            <div className="top">
                <h3 className="heading">{heading}</h3>
                <p className="paragraph">{paragraph}</p>
            </div>

            <div className="bottom">
                <Button btnClass={'purple'} btnText={btnText}/>
                <img src={`../images/${image}`} alt="images" />
            </div>
        </div>
    );
}
 
export default Cards;