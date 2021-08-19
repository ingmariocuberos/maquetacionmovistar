import React from 'react';
import '../styles/settings.css';
import '../styles/components/_MainInfo.css';

export const MainInfo = () => {
    return (
        <div className="maininfo__container">
            <img 
                src="/assets/principal-wave.png" 
                className="maininfo__wave" 
                alt="wave principal page"/>

            <img 
                src="/assets/movistar-man.png" 
                className="maininfo__movistar-man" 
                alt="guia movistar móvil"/>

            <div className="maininfo__container-change-now">
                <h1>¡Cámbiate a un plan <br/>con muchas más Gigas!</h1>
                <div className="maininfo__telf-and-btn">
                    <input type="text" placeholder="Ingresa tu número móvil"></input>
                    <button className="maininfo__btn-change-now">Cambiarme ya</button>
                    <div className="maininfo__terminos">
                        <input type="checkbox" id="cbox2" value="maininfo__terminos" /> <label for="cbox2">Acepto <u>términos y condiciones</u> y autorizo el tratamiento de datos personales </label>
                    </div>
                    
                </div>
            </div>
            <a href="https://www.grupodot.com/es/" target="_blank" rel="noreferrer">
            <img 
                src="/assets/star-new-plan.png" 
                className="maininfo__new-plan" 
                alt="plan 30 gb movil colombia"/>  
            </a>         
        </div>
    )
}
