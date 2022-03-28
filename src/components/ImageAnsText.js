import React from 'react';
import '../styles/imagenAndText.css'
import Animation from './animation';



const ImageAndTextComponent = ({ data }) => {

    const { src, title, description } = data;

    return (
        <div class="card-image-text">
            <img src={src} className="img-fluid" alt="imagen secundaria" />
            <Animation>
                <div >
                    <h2 >
                        {title}
                    </h2>
                    <p>{description}</p>
                </div>
            </Animation>
        </div>
    )
}

export default ImageAndTextComponent;