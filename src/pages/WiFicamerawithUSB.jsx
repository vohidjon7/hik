import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function WiFicamerawithUSB() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CD2U21_2Q21/"} className='button_div2'>
                             
                            <h5>DS-2CD2U21_2Q21/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CV2Q21FD-IW2.8mmW safe version/"} className='button_div2'>
                             
                            <h5>DS-2CV2Q21FD-IW2.8mmW safe version/ </h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/WiFi%20camera%20with%20USB/DS-2CD2U32_STD_5.4.71_181129.zip"} className='button_div2'>
                             
                            <h5>DS-2CD2U32_STD_ 5.4.71_181129.zip </h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default WiFicamerawithUSB