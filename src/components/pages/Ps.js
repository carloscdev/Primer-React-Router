import React from 'react';
import { Link } from 'react-router-dom';
import ps from '../../images/ps.png'
import gh from '../../images/gh.png'
import tw from '../../images/tw.png'
import li from '../../images/li.png'
import '../styles/Ps.css'

class Ps extends React.Component{
    render(){
        return (
        <div className="PrincipalPS">
            <div className="PrincipalPS__contenedor">
            <nav className="PrincipalPS__navbar">
                <img src={ps} className="PrincipalPS__logo" alt="Logo Ps4" />
                <ul>
                    <li>Términos</li>
                    <li>Premios</li>
                    <li>Registrarse</li>
                </ul>
            </nav>
            <div className="PrincipalPS__texto">
                <h1>PS4 <br/> HALL OF FAME</h1>
                <div className="separadorPS"></div>
                <div className="botonPS">
                    <h5><Link to="/">INICIA SESIÓN PARA PARTICIPAR</Link></h5>
                </div>
            </div>
            <div className="PrincipalPS__lista">
                <div>
                    <h3>Conquistador de Logros</h3>
                    <p>¿Cuántos logros has desbloqueado en esta generación: 
                        5,000 10,000 15,000 o más? Lo único que importa es que tengas más 
                        que cualquier otro jugador.
                    </p>
                    <Link className="Next__page"> Más Información + </Link>
                </div>
                <div>
                    <h3>Conquistador de Logros</h3>
                    <p>¿Cuántos logros has desbloqueado en esta generación: 
                        5,000 10,000 15,000 o más? Lo único que importa es que tengas más 
                        que cualquier otro jugador.
                    </p>
                    <Link className="Next__page"> Más Información + </Link>
                </div>
                <div className="sociales">
                    <img src={gh} alt="Github"/>
                    <img src={tw} alt="Github"/>
                    <img src={li} alt="Github"/>
                </div>

            </div>
            </div>
        </div>
        )
    }
}

export default Ps
