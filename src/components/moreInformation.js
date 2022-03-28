import React from 'react';
import ImageContainer from '../assets/images/image5.png';
import '../styles/moreInformation.css'


const MoreInformation = () => {


    return (
        <div className="main-container-information">
            <img src={ImageContainer} className="img-fluid" alt="imagen de fondo" />
            <div className="hola">
                <div className="button-container">
                    <button className="button-information">MÁS INFORMACIÓN</button>
                </div>
            </div>
        </ div>
    )
}


export default MoreInformation;