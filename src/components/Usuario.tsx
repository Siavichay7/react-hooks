import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

//TODO: USE STATE Y USE REDUCER PERMITEN MANEJAR EL ESTADO DE LOS COMPONENTES    
export const Usuario = () => {
    const [user, setUser] = useState<User>()
    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'xavier siavichay'
        })
    }
  return (
    <div className="mt-5">
        <h3>Usuario: </h3>
        <button onClick={login} className="btn btn-outline-primary">
            Login
        </button>
        {
            (!user) ? 
            <pre>NO HAY USUARIO</pre>
            :
            <pre>{JSON.stringify(user)}</pre>
        }
    </div>
  )
}
