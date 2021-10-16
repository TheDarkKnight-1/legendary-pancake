import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
export default function TextForm(props) {
    const [text, setText] = useState("")
    const toUpper=()=>{
        console.log("toUpper")
        let va=text
        va=va.toUpperCase()
        setText(va)
    }
    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="myBox">
                    <Form.Label><h5>{props.heading}</h5></Form.Label>
                    <Form.Control as="textarea" value={text} onChange={(event)=>{setText(event.target.value)}} rows={10} />
                </Form.Group>
            </Form>
            <Button className="mx-1" variant="primary" type="submit" onClick={toUpper}>
                Upper
            </Button>
            <Button className="mx-1" variant="primary" type="submit" onClick={()=>{setText(text.toLowerCase())}}>
                Lower
            </Button>
            <Button className="mx-1" variant="primary" type="submit" onClick={intoTitleCase}>
                Title Case
            </Button>
            <Button className="mx-1" variant="primary" type="submit" onClick={()=>{setText("")}}>
                Clear
            </Button>
            <div className="container my-4">
                <h5>Text Summary</h5>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>Average Reading Time: {0.008*(text.split(" ").length-1)} mins</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
            
        </div>
    )
}
