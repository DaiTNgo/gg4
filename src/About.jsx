import React, {useEffect} from 'react'
import ReactGA from "react-ga4";

function  About(){
    useEffect(() =>{
        ReactGA.send({
            hitType: 'page_view',
            page: '/about'
        });
    },[])
    return <div>About</div>
}

export default About;