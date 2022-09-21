import React, { useReducer } from 'react'


const initialState = {
    contador: 10,
}

type ActionType = 
| { type: 'incrementrar'} 
| { type: 'decrementar' } 
| { type: 'custom', payload: number } 

//TODO: LA ACCIÓN (ACTION) ES LO QUE VAMOS A UTILIZAR PARA RETORNAR UN NUEVO ESTADO
const contadorReducer = (state: typeof initialState, action: ActionType) => {
    
    switch (action.type) {
        case 'incrementrar':
            //TODO: Extrae todas las propiedades que tenga el state y lo esparce creando una copia
            // que no mantiene la referencia
            // Es decir, crea una nueva variable con el mismo valor del state pero no apunta al mismo lugar de memoria.
            // 
            return {
                ...state,
                contador: state.contador + 1
            }
            break;
            
        case 'decrementar':
            //TODO: Extrae todas las propiedades que tenga el state y lo esparce creando una copia
            // que no mantiene la referencia
            // Es decir, crea una nueva variable con el mismo valor del state pero no apunta al mismo lugar de memoria.
            // 
            return {
                ...state,
                contador: state.contador - 1
            }
            break;

        case 'custom':
            //TODO: Extrae todas las propiedades que tenga el state y lo esparce creando una copia
            // que no mantiene la referencia
            // Es decir, crea una nueva variable con el mismo valor del state pero no apunta al mismo lugar de memoria.
            // 
            return {
                ...state,
                contador: action.payload
            }
            break;

        default:
            return state;
    }
}

export const ContadorRed = () => {
    //TODO: Destructurar cualquier propiedad u objeto que se necesite sacar del State
    // Ej: {contador}
    const [{contador}, dispatch] = useReducer(contadorReducer, initialState)

  return (
    <>
        <h2>Contador: {contador}</h2>
        <button className='btn btn-outline-primary'
        onClick={() => dispatch({type: 'incrementrar'})} >
            + 1
        </button>

        <button className='btn btn-outline-primary'
        onClick={() => dispatch({type: 'decrementar'})} >
            - 1
        </button>

        <button className='btn btn-outline-primary'
        onClick={() => dispatch({type: 'custom', payload: 100})} >
            100
        </button>
    </>
  )
}
