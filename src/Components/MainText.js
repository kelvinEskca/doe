const TopText = ({purpleText,heading,paragraph}) => {
    return (
        <div className="text main-text">
            <span className="purpleText">{purpleText}</span>
            <h3 className="heading">{heading}</h3>
            <p className="paragraph">{paragraph}</p>
        </div>
    );
}
 
export default TopText;