import React, {useEffect} from 'react'
import ReactGA from "react-ga4";

function  Contact(){
    useEffect(() =>{
        ReactGA.send({
            hitType: 'page_view',
            page: '/contact'
        });
    },[])
    return <div>Contact</div>
}

export default Contact;