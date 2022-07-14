import axios from 'axios';
import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './app.css';


const FiltroBusqueda = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    const peticionesGet = async() =>{
        // inidcamos la direccion a la que queremos pedir los datos
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response.data);
            setUsuarios(response.data)
            setTablaUsuarios(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const handleChange=e=>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }
    
    const filtrar = (terminoBusqueda) =>{
        let resultadoBusqueda = tablaUsuarios.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setUsuarios(resultadoBusqueda)
    }

    useEffect(() =>{
        peticionesGet()
    }, [])

    return (
        <div className='container-lg'>
            <div className="containerInput">
                <input type="text"
                    className='form-control inputBuscar'
                    value={busqueda}
                    palaceholder='Busqeuda por nombre o Empresa'
                    onChange={handleChange}
                />
                <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Nombre de usuario</th>
                            <th>Correo</th>
                            <th>Sitio web</th>
                            <th>Ciudad</th>
                            <th>Empresa</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            usuarios && usuarios.map((usuario)=>(
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>                                   
                                    <td>{usuario.name}</td>
                                    <td>{usuario.phone}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.website}</td>
                                    <td>{usuario.address.city}</td>
                                    <td>{usuario.company.name}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FiltroBusqueda