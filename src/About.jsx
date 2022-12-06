import React, { useEffect } from "react";
import ReactGA from "react-ga4";

function About() {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "/aboutdaingo",
        });
    }, []);
    return (
        <div>
            <h1>About</h1>
            <button
                onClick={() => {
                    window.dataLayer.push({
                        a: "b",
                        c: "da",
                    });
                }}>
                Click GTM
            </button>
        </div>
    );
}

export default About;
