import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas iniciales
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Funcion que tome las citas actuales y agrege la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Use Effect se usa cuando el state cambia
  // Se debe pasar un arreglo vacio para que solo se ejecute una vez
  // Ej: si se llama un API, useEffect se cicla
  useEffect( () => {
    if (citasIniciales) { 
      localStorage.setItem('citas',JSON.stringify(citas));
    }
    else {
      localStorage.setItem('citas', []);
    }
  }, [citas, citasIniciales]);

  // Funcion que elimimna cita por ID
  const eliminarCita = ID => {
    const nuevasCitas =  citas.filter( cita => cita.id !== ID);
    guardarCitas(nuevasCitas);
  }

  // Titulo condicional de listado de citas
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';


  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="conatiner">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.length > 0 ?
              citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
              :
              <p>Agrega una cita</p>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
