import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikCentral() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hik-Central/Software package/"} className='button_div2'>
                             
                            <h5>01. Software package/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default HikCentral