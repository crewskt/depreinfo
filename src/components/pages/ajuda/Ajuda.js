import React from 'react';
import './ajuda.css';
import cellphone from './img-ajuda/cellphone.jpg'

const Ajuda = () => (

    <section className="box-ajuda">

        <div className="box-img-ajuda">
            <img className="img-ajuda" src={cellphone} alt="Imagem de um Smatphone" />
        </div>

        <div className="box-description">

            <div className="box-title">
               
            </div>

            <div className="box-mente">
               

            <div className="box-button">
                <a className="button-ajuda" href="https://mente-careapp.vercel.app/" target="_blank">Questionario</a>
               
            </div>
        </div>

    </section>

);

export default Ajuda;