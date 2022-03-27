import React from 'react';
import MainImage from '../assets/images/mainImage.png';
import FirstImage from '../assets/images/Rectangle2.png';
import SecondImage from '../assets/images/Rectangle3.png';
import ThirdImage from '../assets/images/Rectangle1.png';
import '../styles/mainBlock.css'
import ImageAndTextComponent from './ImageAnsText';



const MainBlock = () => {

    const data = [
        {
            id: 1,
            title: 'LA CACERÍA HA COMENZADO',
            src: FirstImage,
            description: 'EL PUNTO CERO ESTÁ EXPUESTO, PERO NADIE ESCAPARÁ DEL BUCLE. NO SI PODÉIS IMPEDIRLO. UNÍOS AL AGENTE JONES Y A LOS GRANDES CAZADORES DE TODAS LAS REALIDADES, COMO EL MANDALORIANO, EN UNA CAÓTICA BATALLA QUE DETERMINARÁ EL FUTURO DE LA ISLA.'
        },
        {
            id: 2,
            title: 'NUEVAS ZONAS DE CAZA',
            src: SecondImage,
            description: 'NO SOLO HABRÁ NUEVOS CAZADORES, SINO TAMBIÉN NUEVAS UBICACIONES MÁS ALLÁ DEL BUCLE. LUCHAD POR VUESTRO HONOR EN UNA ANTIGUA ARENA, PULID VUESTRAS HABILIDADES DE SUPERVIVENCIA EN LA JUNGLA Y EXPLORAD LAS ARENAS MOVEDIZAS CRISTALINAS QUE FLUYEN DESDE EL PUNTO CERO EXPUESTO.',
        },
        {
            id: 3,
            title: 'AYUDA PREVIO PAGO',
            src: ThirdImage,
            description: 'COMO CAZADORES, ES VUESTRO DEBER AYUDAR A LOS PERSONAJES DE LA ISLA EN ESTA NUEVA REALIDAD INESTABLE. ACEPTAD SUS MISIONES Y CONTRATOS, OBTENED INFORMACIÓN EN LOS ALREDEDORES O CONTRATADLOS COMO ALIADOS. ¿NO QUERÉIS NEGOCIAR? DESAFIADLOS A UN DUELO Y RECOGED LAS RECOMPENSAS.'
        }
    ]




    return (
        <div id="mainComponent">
            <div className="contenedor">
                <div className="mainContainer">
                    <img src={MainImage} className="img-fluid" alt="imagen principal" />
                </div>
                <div className='secondContainer text-center'>
                {
                    data?.map(item => (
                        <ImageAndTextComponent key={item.id} data={item} />
                    ))
                }
                </div>
                 
            </div>
        </div>
    )
}

export default MainBlock;