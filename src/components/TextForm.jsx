import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here")
    const toUpper=()=>{
        console.log("toUpper")
        let va=text
        va=va.toUpperCase()
        setText(va)
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="myBox">
                    <Form.Label><h5>{props.heading}</h5></Form.Label>
                    <Form.Control as="textarea" value={text} onChange={(event)=>{setText(event.target.value)}} rows={10} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={toUpper}>
                Submit
            </Button>
        </div>
    )
}
