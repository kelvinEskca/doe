import { Link } from "react-router-dom";

const Button = ({link,btnClass,btnText,handle}) => {
    return (
        <Link to={link}>
            <button className={`button ${btnClass}`} onClick={handle}>{btnText}</button>
        </Link>
    );
}
 
export default Button;