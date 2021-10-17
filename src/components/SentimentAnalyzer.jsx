import React, { useState } from 'react'
import Sentiment from 'sentiment'
import {Button} from 'react-bootstrap'

export default function SentimentAnalyzer(props) {
    const [review, setReview] = useState("Type something to Analyze");
    let [globalscore,setglobalscore]=useState(0);
    const giveReview = () => {
        let Sentiment = require('sentiment');
        let sentiment = new Sentiment();
        let result = 0;
        if (props.text.length !== 0)
            result = sentiment.analyze(props.text);
        else
            result = 0;
        // console.dir(result);
        console.log(result.score);
        globalscore=setglobalscore(result.score);
        if (result.score > 0) setReview("Positive");
        else if (result.score < 0) setReview("Negative");
        else setReview("Neutral");
    }
    return (
        <>
            <div>
                <p>{review}</p>
                <p>Positivity Score: {globalscore}</p>
                <Button className="mx-1" variant="primary" type="submit" onClick={giveReview}>
                    Analyze Sentiment
                </Button>
            </div>
        </>
    )
}
