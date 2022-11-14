import React, {useEffect} from 'react'
import ReactGA from "react-ga4";

function  About(){
    useEffect(() =>{
        ReactGA.send({
            hitType: 'pageview',
            page: '/aboutdaingo'
        });
    },[])
    return <div>About</div>
}

export default About;