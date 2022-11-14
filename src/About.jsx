import React, {useEffect} from 'react'
import ReactGA from "react-ga";

function  About(){
    useEffect(() =>{
        ReactGA.pageview('/about');

    },[])
    return <div>About</div>
}

export default About;