import Button from "./Button";

const Decide = () => {
    return (
        <section className="section decide">
            <div className="wrapper">
                <div className="boxes">
                    <div className="box">
                        <h3 className="heading">Choose the decision today or never you'll have time for it</h3>
                        <p className="paragraph">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                        </p>
                        <Button btnClass={'purple'} btnText={'Get Started'} />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Decide;