import React from 'react'
import { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios'

const ReactSelectFiltro = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);

    const peticionesGet = async() =>{
        // inidcamos la direccion a la que queremos pedir los dato
        await axios.get("https://rickandmortyapi.com/api/character")
        .then(response=>{
            console.log(response.data.results);
            setUsuarios(response.data.results)
            setTablaUsuarios(response.data.results)           
        }).catch(error=>{
            console.log(error)
        })
    }

    const handleChange=e=>{
        console.log(e)
        if(e){
            filtrar(e.value)

        }else{
            setUsuarios(tablaUsuarios)
        }
        // const search = e.map(text=>{
        //     return text.value.toString()
        // })
        // filtrar(search.toString())
        // console.log(search.toString())
    }

    const filtrar = (terminoBusqueda) =>{
        let resultadoBusqueda = tablaUsuarios.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.species.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        
        setUsuarios(resultadoBusqueda)
    }

    useEffect(() =>{
        peticionesGet()
    }, [])


  return (
    <div className='container-lg py-5'>

        <Select
            isClearable
            onChange={handleChange}
            options={usuarios.map(item=>({value:item.name, label:item.name}))}
        />
        <div className="table-responsive mt-5">
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Esppecie</th>
                            <th>Genero</th>
                            <th>Origen</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            usuarios && usuarios.map((usuario)=>(
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>                                   
                                    <td>{usuario.name}</td>
                                    <td>{usuario.status}</td>
                                    <td>{usuario.species}</td>
                                    <td>{usuario.gender}</td>
                                    <td>{usuario.origin.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

    </div>
  )
}

export default ReactSelectFiltro