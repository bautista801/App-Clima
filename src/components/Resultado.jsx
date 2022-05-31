import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()

    const {name, main} = resultado

    // grados kelvin

    const Kelvin = 273.15

  return (
    <div className="contenedor">
        <h2>El clima de {name} es:</h2>

        <h2 className="actual-temp">
            {parseInt(main.temp - Kelvin)} <span>&#x2103;</span>
        </h2>

        <p>
            Mínima: {parseInt(main.temp_min - Kelvin)} <span>&#x2103;</span>
        </p>

        <p>
            Máxima: {parseInt(main.temp_max - Kelvin)} <span>&#x2103;</span>
        </p>
    </div>
  )
}

export default Resultado