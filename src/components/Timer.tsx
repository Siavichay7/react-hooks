import { useEffect, useRef, useState } from "react"

//TODO: TIPO QUE SÓLO SE VA A USAR EN EL PRESENTE ARCHIVO
type TimerArgs = {
    milisegundos: number    
}

//TODO: {milisegundos}: TimerArgs => Se llama destructuración, es decir, acceder al campo del objeto
//TODO: RECIBO EL TIPO DE DATO DE MI COMPONENTE PADRE COMO PARÁMETRO Y LO USO PARA LOS MILISEGUNDOS DE MI INTERVALO
export const Timer = ({milisegundos}: TimerArgs) => {
    //TODO: USE STATE ES PARA GESTIONAR EL ESTADO (ACTUAL Y FUTURO)
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>() 

    //TODO: SI SE ESTABLECE UNA FUNCIÓN EN UNA FUNCIÓN USESTATE EL PRIMER ARGUMENTO QUE EMITE ES EL VALOR ACTUAL DEL STATE
    useEffect(() => {
       ref.current && clearInterval(ref.current)
      ref.current = setInterval(()=> setSegundos(s=>s + 1) , milisegundos)
    }, [milisegundos])
    

  return (
    <>
        <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
