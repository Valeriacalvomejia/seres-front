import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onFormSwitch("dashboard")
    }

    
    return (
        <header class="animate__animated animate__fadeInUp">
        <div class="container">


            <h1 class="welcome">Bienvenido</h1>

            <form class="form" onSubmit={handleSubmit}>
                <label for="email">Correo</label>
                <input type="email" id="email" name="email" required />

                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Iniciar sesión</button>
            </form>
            <p class="register">¿No tienes una cuenta? <button onClick={()=> props.onFormSwitch("register")}>Crea una</button></p>
        </div>
    </header>
    )
}