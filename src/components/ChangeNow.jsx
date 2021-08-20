import React from 'react'
import '../styles/settings.css';
import '../styles/components/_ChangeNow.css';

export const ChangeNow = () => {
    return (
        <>
            <div className="changenow__telf-and-btn">
                <div className="changenow__column-flex">
                    <div className="changenow__row-flex">
                        <input className="changenow__input-telf" type="text" placeholder="Ingresa tu número móvil" />
                        <button className="changenow__btn-change-now">Cambiarme ya</button>
                    </div>
                    
                    <div className="changenow__terminos">
                        <input type="checkbox" id="cbox3" value="changenow__terminos" /> <label htmlFor="cbox3"> Acepto <u>términos y condiciones</u> y autorizo el tratamiento de datos personales </label>
                    </div>
                </div>    
            </div>
        </>
    )
}
