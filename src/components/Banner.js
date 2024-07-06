import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Web Developer", "Web Designer", "Frontend-Developer", "UI/UX Designer", "Programmer", "Student"];
    const[text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();

        },delta)
        return ()=>{clearInterval(ticker)};
    },[text]);

    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText =toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updateText=== fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updateText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);


        }
    } 





    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Soumyakanta `}<span className="wrap"> {text}</span></h1>
                        <p>Hello! I'm Soumyakanta Parida, a driven and ambitious individual pursuing a degree in Computer Science and Engineering from the esteemed Gandhi Institute for Technological Advancement (GITA) in Odisha. With a strong passion for programming, coding, and web development, I'm constantly seeking opportunities to hone my skills and stay updated with the latest trends in the tech industry.</p><br/>

                        <p>When I'm not coding, you can find me exploring new technologies, reading about the latest advancements in the field, I'm eager to connect with fellow tech enthusiasts, share knowledge, and learn from each other's experiences.</p><br/>

                        <p>Feel free to reach out to me if you'd like to discuss projects, ideas, or just chat about the latest developments in the world of tech!</p><br/>


                        <button onClick={() => { console.log("connect") }}> Let's Connect<ArrowRightCircle size={25} /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />

                    </Col>

                </Row>
            </Container>


        </section>

    )
}