import React from 'react'
import '../styles/settings.css';
import '../styles/components/_PlanInfo.css';

export const PlanInfo = () => {
    return (
        <>
            <h2 className="planinfo__title-quote">Nuevo plan con muchas más Gigas en 4G/3G, minutos ilimitados a todo operador, video, música y servicios que hacen más fácil tu vida</h2>

            <section aria-label="Nuevos beneficios y planes movistar" className="planinfo__container-plans">
                <div className="planinfo__current-plan">
                    <p>TU PLAN ACTUAL</p>
                    <p>4.5 GB</p>
                    <p>$80.900 /mes</p>
                </div>
                <div className="planinfo__container-posible-plan">
                    <p className="planinfo__text-posible-plan">TU NUEVO PLAN INCLUYE MÁS GIGAS Y MÁS BENEFICIOS:</p>
                    <div className="planinfo__posible-plan">
                        <div className="planinfo__posible-speed-and-price">
                            <p>30 GB</p>
                            <p>Al consumir tus 30 GB navegarás a una velocidad de 256 kbps</p>
                            <p>$99.900 /mes</p>
                        </div>
                        <div className="planinfo__flex-advantages">
                            <div className="planinfo__ilimitated-minutes">
                                <p>Minutos ilimitados</p>
                                <p>a Fijo o Móvil</p>
                                <img 
                                    src="/assets/flags.png" 
                                    className="planinfo__flags" 
                                    alt="paises a los que puedes llamar ilimitadamente"/>                              
                            </div>
                            <div className="planinfo__screen-insurance">
                                <img 
                                    src="/assets/broked-screen.png" 
                                    className="planinfo__broked-screen" 
                                    alt="seguro para la pantalla de tu smartphone"/>
                                <p><b>¡Upss!</b><br/>Seguro de pantalla</p> 
                                                               
                            </div>
                            <div className="planinfo__movistar-play">
                                <h5><img 
                                    src="/assets/movistar-mini-icon.png" 
                                    className="planinfo__movistar-mini-icon" 
                                    alt="Movistar Play ilimitado"/> Play Lite</h5>
                               
                                <p>Lo mejor de lo que ves en TV, cine e internet en una sola App</p>
                                                            
                            </div>
                            <div className="planinfo__napster">
                                <img 
                                    src="/assets/napster-icon.png" 
                                    className="planinfo__napster-icon" 
                                    alt="Musica en cualquier lugar con Napster"/>                              
                                <p>Napster, la App de Movistar Música</p>                               
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
