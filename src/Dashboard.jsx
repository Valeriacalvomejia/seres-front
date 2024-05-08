import React from "react";
import styles from "./Dashboard.css"

export const Dashboard = (props) => {

    return (
        <React.Fragment>
            <header>
                <div class="container">
                    <h1 style={{fontSize: 40}}>Seres</h1>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Perfil</li>
                            <li>Chat</li>
                            <li>Notificaciones</li>
                            <li>Cerrar sesión</li>
                            
                            
                            <li class="search-container">
                                <input type="text" placeholder="Buscar..." class="search-box" />
                                <button type="submit" class="search-button">Buscar</button>
                            </li>

                        </ul>

                    </nav>

                </div>
            </header>

            <section class="hero">
                <div class="feed">
                    <h2>Bienvenido a nuestra Red Social</h2>
                    <p>Conéctate con amigos, comparte momentos y descubre nuevas experiencias.</p>
                    {/* <button class="btn" onClick={()=> props.onFormSwitch("register")}>Registrarse</button> */}
                </div>
            </section>

            <footer style={{backgroundColor: "#39373758"}}>
                <div class="container">
                    <p>&copy; 2024 Red Social. Todos los derechos reservados.</p>
                </div>
            </footer>


        </React.Fragment>

    )

}