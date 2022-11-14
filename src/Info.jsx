import React, {useEffect} from 'react'
import ReactGA from "react-ga4";

function  Info(){
    useEffect(() =>{
        ReactGA.send({
            hitType: 'page_view',
            page: '/infodaingo'
        })
    },[])
    return <div>Info</div>
}

export default Info;