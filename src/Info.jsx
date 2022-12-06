import React, { useEffect, useRef, useState } from "react";
// import ReactGA from "react-ga4";

function Info() {
    const [text, setText] = useState("");
    const refText = useRef();
    // useEffect(() => {
    //     ReactGA.send({
    //         hitType: 'pageview',
    //         page: '/infodaingo'
    //     })
    // }, [])

    const handleSendEvent = () => {
        // ReactGA.event({
        //     category: 'Textttttttttt',
        //     action: 'Text: ' + text
        // })

        setText("");
        refText.current.focus();
    };
    return (
        <div>
            <h1>{text}</h1>
            <input
                ref={refText}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSendEvent}>Send Event</button>
        </div>
    );
}

export default Info;
