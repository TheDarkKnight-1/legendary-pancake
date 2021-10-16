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
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button className="my-2" variant={btnvariant} onClick={toggleColor}>{btntext}</Button>
        </div>
        </>
    )
}
