import React from "react";
import MainText from "../Components/MainText";
import Button from "../Components/Button";
import Cards from "../Components/Cards";
import Result from "../Components/ResultCard";
import Decide from "../Components/Decide";
import Testimonial from "../Components/Testimonail";
import Testimonials from "../Testimonial";
const About = () => {
    return (
        <main className="main">
            <section className="section hero">
                <div className="wrapper">
                    <div className="boxes">
                        <div className="box">
                            <MainText purpleText={'Your Go to Marketing Agency'} heading={'Super Fast marketing solution '} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae '}  />
                            <div className="btn-row">
                                <Button btnClass={'purple'} btnText={'Get Started'}  />
                                <Button btnClass={'white'} btnText={'View Demo'}  />
                            </div>
                        </div>

                        <div className="box image-box">
                            <div className="top-box">
                                <img src="../images/hero_insta-post-1.png" alt="hero_insta-post-1" />
                            </div>
                            <img src="../images/portrait-of-cheerful-european-female-with-satisfie-2021-08-31-04-21-52-utc-1-1.png" alt="portrait-of-cheerful-european-female-with-satisfie-2021-08-31-04-21-52-utc-1-1" className="img"/>
                        </div>
                    </div>
                </div>
            </section>

            <Decide />

            <section className="section solutions">
                <div className="wrapper">
                    <MainText purpleText={'Our Premium Marketing solutions'} heading={'Supercharge your Business with Social Media'} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae '}  />
                    <div className="boxes">
                        <Cards heading={'Email Marketing'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} btnText={'Learn More'} image={'icons02.png'}/>

                        <Cards heading={'Email Marketing'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} btnText={'Learn More'} image={'icons04.png'}/>

                        <Cards heading={'Email Marketing'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} btnText={'Learn More'} image={'icons06.png'}/>

                        <Cards heading={'Email Marketing'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} btnText={'Learn More'} image={'sskoo-23.png'}/>
                    </div>
                </div>
            </section>

            <section className="section testimonial">
                <div className="wrapper">
                    <MainText purpleText={'Your Go to Marketing Agency'} heading={'Super Fast marketing solution '} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae '}  />
                    <div className="boxes">
                        {Testimonials.map((item)=>{
                            return (
                                <Testimonial title={item.title} paragraph={item.description} role={item.role} image={item.image} key={item.id}/>
                            )
                        })}
                        
                    </div>
                </div>
            </section>

            <section className="section result">
                <div className="wrapper">
                    <div className="boxes">
                        <div className="top">
                            <div className="up">
                                <div className="text">
                                    <h3 className="heading">Result driven marketing</h3>
                                    <p className="paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae </p>
                                </div>

                                <Button btnClass={'white'} btnText={'Learn More'}/>
                            </div>

                            <div className="boxes-wrapper">
                                <Result heading={'Understand Audience'} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae'} image={'icons03.png'}/>

                                <Result heading={'Understand Audience'} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae'} image={'sskoo.png'}/>

                                <Result heading={'Understand Audience'} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae'} image={'icons04.png'}/>

                                <Result heading={'Understand Audience'} paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae'} image={'icons01.png'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default About;