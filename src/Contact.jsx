import React, {useEffect} from 'react'
import ReactGA from "react-ga";

function  Contact(){
    useEffect(() =>{
        ReactGA.pageview('/contact');
    },[])
    return <div>Contact</div>
}

export default Contact;