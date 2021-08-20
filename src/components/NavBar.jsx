import React from 'react';
import '../styles/settings.css';
import '../styles/components/_NavBar.css';



export const NavBar = () => {
    return (
        <nav className="navbar__container">
            <div className="navbar__links-container">
                <img 
                src="/assets/movistar-icon.png" 
                className="navbar__movistar-icon" 
                alt="logo movistar"/>
                <ul className="navbar__principal-menu">
                    <li className="navbar__li-link">
                        <a className="" href="./">Productos y servicios</a>
                        <img 
                            src="/assets/down-row.png" 
                            className="navbar__downrow-icon" 
                            alt="flecha hacia abajo"/>
                    </li>
                    <li className="navbar__li-link">
                        <a className="nav-link-pc" href="./">Información importante para usuarios</a>
                        <img 
                            src="/assets/down-row.png" 
                            className="navbar__downrow-icon" 
                            alt="flecha hacia abajo"/>
                    </li>
                    <li className="navbar__li-link">
                        <a className="" href="./">Pagos y Recargas</a>
                        <img 
                            src="/assets/down-row.png" 
                            className="navbar__downrow-icon" 
                            alt="flecha hacia abajo"/>
                    </li>
                </ul>
            </div>
            <div>
                
            </div>
            <div className="navbar__btns-container">
                <img 
                    src="/assets/chat-icon.png" 
                    className="navbar__icon" 
                    alt="chat con asesor movistar"/>
                <img 
                    src="/assets/no-see-icon.png" 
                    className="navbar__icon" 
                    alt="chat con asesor movistar"/>
                
                <button className="navbar__btn-mi-movistar">
                    Mi Movistar
                </button>
            </div>

            <div className="navbar__responsive-menu">
                <div className="navbar__responsive-container-movistar-icon">
                    <img 
                        src="/assets/movistar-icon.png" 
                        className="navbar__responsive-movistar-icon" 
                        alt="logo movistar"/>
                   
                </div>

                <div className="navbar__responsive-menu-options">
                    <button className="navbar__responsive-btn-menu me-2">Menú</button>
                    <img 
                        src="/assets/chat-icon.png" 
                        className="navbar__responsive-icon me-2" 
                        alt="chat con asesor movistar"/>
                    <img 
                        src="/assets/no-see-icon.png" 
                        className="navbar__responsive-icon me-2" 
                        alt="chat con asesor movistar"/>
                    
                    <button className="navbar__responsive-btn-mi-movistar">
                        Mi Movistar
                    </button>
                </div>
                <div className="navbar__ocultar">
                    
                    <ul className="navbar__principal-menu">
                        <li className="navbar__li-link">
                            <a className="" href="./">Productos y servicios</a>
                            <img 
                                src="/assets/down-row.png" 
                                className="navbar__downrow-icon" 
                                alt="flecha hacia abajo"/>
                        </li>
                        <li className="navbar__li-link">
                            <a className="nav-link-pc" href="./">Información importante para usuarios</a>
                            <img 
                                src="/assets/down-row.png" 
                                className="navbar__downrow-icon" 
                                alt="flecha hacia abajo"/>
                        </li>
                        <li className="navbar__li-link">
                            <a className="" href="./">Pagos y Recargas</a>
                            <img 
                                src="/assets/down-row.png" 
                                className="navbar__downrow-icon" 
                                alt="flecha hacia abajo"/>
                        </li>
                    </ul>
                </div>
                <div>
                    
                </div>
                <div className="navbar__btns-container">
                    
                </div>
            </div>
        </nav>
    )
}
