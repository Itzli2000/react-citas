import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Formulario({ crearCita }) {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        date: '',
        time: '',
        sintomas: '',
    });

    // Crear state para manejo de formulario
    const [error, actualizarError] = useState(false);

    // Destructuring del state cita
    const { mascota, propietario, date, time, sintomas } = cita;

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const submitCita = e => {
        e.preventDefault();

        // Validar formulario
        if (mascota.trim() === '' || propietario.trim() === '' || date.trim() === '' || time.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        else
            actualizarError(false);

        // Asignar ID unico
        cita.id = uuidv4();

        // Crear la cita en localStorage
        crearCita(cita);

        // Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            date: '',
            time: '',
            sintomas: '',
        });
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {
                error ?
                    <p className="alert-error">Todos los datos son obligatorios</p>
                    : null
            }
            <form
                onSubmit={submitCita}
            >
                <label htmlFor="mascota">Nombre de la mascota</label>
                <input
                    type="text"
                    name="mascota"
                    id="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label htmlFor="nombre">Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    id="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario"
                    onChange={handleChange}
                    value={propietario}
                />
                <label htmlFor="date">Fecha</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label htmlFor="time">Hora</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label htmlFor="sintomas">Sintomas</label>
                <textarea
                    name="sintomas"
                    id="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
}

export default Formulario;