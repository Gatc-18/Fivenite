import React from 'react';
import SecondImage from '../assets/images/Rectangle2.png';
import '../styles/imagenAndText.css'



const ImageAndTextComponent = ({data}) => {

    const { src, title, description } = data;


    return (
        <div class="card-image-text">
            <img src={src} className="img-fluid" alt="imagen secundaria" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ImageAndTextComponent;