import React, { ChangeEvent, useState } from 'react'

export const Formulario = () => {

    //TODO: POR DEFECTO ES DE TIPO GENÉRICO
    const [formulario, setformulario] = useState({
        email: '',
        nombre: ''
    })

    //TODO: TIPO GENÉRICO 
    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target
        //TODO: SE RECOMIENDA QUE SE DESTRUCTURE EL VALOR ACTUAL DEL FORMULARIO
        // Y CAMBIAR LA PROPIEDAD QUE SE ESTÁ CAMBIANDO
        setformulario({
            ...formulario,
            [ name ]: value
        })
    }

  return (
    <form autoComplete='off'>
        <div className="mb-3">
            <label className='form-label'>
                Email:
            </label>
            <input onChange={handleChange} type="email" className='form-control' name='email' />
        </div>

        <div className="mb-3">
            <label className='form-label'>
                Nombre:
            </label>
            <input onChange={handleChange} type="text" className='form-control' name='nombre' />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
