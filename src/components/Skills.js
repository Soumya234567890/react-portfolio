import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }

    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h3>
                                Skills:
                            </h3>
                            <p>I possess a strong foundation in web technologies, with expertise in both frontend and backend development. On the frontend, I am proficient in HTML, CSS, JavaScript, and jQuery, with a basic understanding of ReactJS. On the backend, I have experience with Node.js and Express.js, as well as middleware technologies such as Body-Parser and Morgan. Additionally, I am familiar with npm and Nodemon. Furthermore, I have a solid grasp of programming fundamentals, including data structures and algorithms, which enables me to write efficient and scalable code.<br /></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1 } alt="Image" />
                                    <h5>Web Development</h5>


                                </div>
                                <div className="item">
                                    <img src={ meter2} alt="Image" />
                                    <h5>UI/UX Design</h5>


                                </div>
                                <div className="item">
                                    <img src={ meter3} alt="Image" />
                                    <h5>Logo Design</h5>


                                </div>
                                <div className="item">
                                    <img src={ meter1} alt="Image" />
                                    <h5>Web Design</h5>


                                </div>
                                <div className="item">
                                    <img src={ meter1} alt="Image" />
                                    <h5>C programming</h5>


                                </div>
                                <div className="item">
                                    <img src={ meter1} alt="Image" />
                                    <h5>Python programming</h5>


                                </div>
                                <div className="item">
                                    <img src={ meter1} alt="Image" />
                                    <h5>Problem Solving</h5>


                                </div>


                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>



        </section>
    );
}