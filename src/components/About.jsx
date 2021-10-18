import React,{useState} from 'react'
import { Accordion,Button } from 'react-bootstrap'

export default function About() {
    const [myStyle,setmyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btnvariant,setbtnvariant] = useState("dark")
    const [btntext,setbtntext] = useState("Enable Dark Mode")
    const toggleColor=()=>{
        if(myStyle.color==="black"){
            setmyStyle({color:"white",backgroundColor:"black"})
            setbtnvariant("light")
            setbtntext("Enable Light Mode")
        }
        else{
            setmyStyle({color:"black",backgroundColor:"white"})
            setbtnvariant("dark")
            setbtntext("Enable Dark Mode")
        }
    }
    return (
        <>
        <div className="container" style={myStyle}>
            <h1>About</h1>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" style={myStyle}>
                    <Accordion.Header>Developer</Accordion.Header>
                    <Accordion.Body>
                    <p>👋 Hi I'm Chandan Mishra</p>
                    <p>I am a Cloud and ML enthusiast. My expertise includes project design and management, data analysis, development and implementation of research tools.
                    I enjoy generating new ideas and devising feasible solutions to broadly relevant problems.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header>Tech Stack</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>ReactJS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Machine Learning (Javascript)</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button className="my-2" variant={btnvariant} onClick={toggleColor}>{btntext}</Button>
        </div>
        </>
    )
}
