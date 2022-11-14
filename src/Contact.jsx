import React, {useEffect} from 'react'
import ReactGA from "react-ga4";

function  Contact(){
    useEffect(() =>{
        ReactGA.send({
            hitType: 'pageview',
            page: '/contact'
        });
    },[])
    return <div>Contact</div>
}

export default Contact;