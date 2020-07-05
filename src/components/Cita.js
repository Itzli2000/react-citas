import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.date}</span></p>
        <p>Hora: <span>{cita.time}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &nbsp; &times;</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
};

export default Cita;