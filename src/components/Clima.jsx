import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Loading from './Loading'

const Clima = () => {

  const {resultado, cargando, noResultado} = useClima()

  return (
    <>
        <main className='dos-columnas'>
            <Formulario />

            {
              cargando ? <Loading /> :
              resultado.name ? <Resultado /> :
              noResultado ? <p>{noResultado}</p> : <p>Aquí se mostrará el clima</p>
            }
            
        </main>
    </>
  )
}

export default Clima