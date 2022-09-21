import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementar = (numero: number):void => {
        setCounter(counter+numero);
    }

  return (
    <div className="mt-5">Counter: 
        <br />
        <span>Valor: { counter }</span>
        <br />
        <button onClick={()=>incrementar(1)} className="btn btn-outline-primary m-2">
            +1
        </button>
        <button onClick={()=>incrementar(2)} className="btn btn-outline-primary m-2">
            +2
        </button>
        <button onClick={()=> setCounter(0) } className="btn btn-outline-danger m-2">
            Reset
        </button>
    </div>
  )
}
