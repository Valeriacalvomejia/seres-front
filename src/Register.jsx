import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <header class="animate__animated animate__fadeInUp">

        <div class="container">
            <h1 class="welcome">Crea una cuenta</h1>

            <form class="form">
                <label for="name">Nombre Completo</label>
                <input value={name} type="name" id="name" name="name" required />

                <label for="email">Correo</label>
                <input value={email} type="email" id="email" name="email" required />

                <label for="password">Contraseña</label>
                <input value={pass} type="password" id="password" name="password" required />

                <button type="submit">Crear cuenta</button>
            </form>
            <p class="register">¿Ya tienes una cuenta? <button onClick={()=> props.onFormSwitch("login")}>Iniciar sesión</button></p>
        </div>
    </header>
    )
}
