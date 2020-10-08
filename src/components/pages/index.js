import React from 'react';
import { Link } from 'react-router-dom';
import xbox from '../../images/xbox.png'
import gh from '../../images/gh.png'
import tw from '../../images/tw.png'
import li from '../../images/li.png'
import '../styles/Xbox.css'

class Navbar extends React.Component{
    render(){
        return (
        <div className="Principal">
            <div className="Principal__contenedor">
            <nav className="Principal__navbar">
                <img src={xbox} className="Principal__logo" alt="Logo xbox" />
                <ul>
                    <li>Términos</li>
                    <li>Premios</li>
                    <li>Registrarse</li>
                </ul>
            </nav>
            <div className="Principal__texto">
                <h1>XBOX <br/> HALL OF FAME</h1>
                <div className="separador"></div>
                <div className="boton">
                    <h5><Link to="/Ps">INICIA SESIÓN PARA PARTICIPAR</Link></h5>
                </div>
            </div>
            <div className="Principal__lista">
                <div>
                    <h3>Conquistador de Logros</h3>
                    <p>¿Cuántos logros has desbloqueado en esta generación: 
                        5,000 10,000 15,000 o más? Lo único que importa es que tengas más 
                        que cualquier otro jugador.
                    </p>
                    <Link className="Next__page" to="/Ps"> Más Información + </Link>
                </div>
                <div>
                    <h3>Conquistador de Logros</h3>
                    <p>¿Cuántos logros has desbloqueado en esta generación: 
                        5,000 10,000 15,000 o más? Lo único que importa es que tengas más 
                        que cualquier otro jugador.
                    </p>
                    <Link className="Next__page" to="/Ps"> Más Información + </Link>
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

export default Navbar
