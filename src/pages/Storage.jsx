import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Storage2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/"} className='button_div2'>
                             
                            <h5>1. Hybrid SAN/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Storage2