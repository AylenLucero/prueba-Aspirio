import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Form = ({list = []}) => {
    const {id} =useParams();
    const [tituloValor, setTituloValor] = useState()
    const [edit, setEdit] = useState({
        titulo: '',
        descripcion: ''
    })

    

    const putLibros = () => {
        axios.put(`http://localhost:3000/api/libros/${id}`, edit )
    }
    
    useEffect(() => {
        if(edit.titulo.length > 9) {
          putLibros()  
        }
        
    })
 
    const handdleChange = (e) => {
        
        const valor = e.target.value        
        const {name, value} = e.target;
        setEdit(prevState =>({
            ...prevState,
            [name]: value
        }))
        console.log(value)
    }

    return(
        <div className="container">
            {
                list.map((libro) => (
                <form>
                    <div class="mb-3">
                        <label for="titulo" className="form-label">Titulo</label>
                        <input type="text" label='titulo' defaultValue={ libro.titulo} onChange={handdleChange} name="titulo" className="form-control" id="titulo" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
                    <textarea className="form-control" defaultValue={libro.descripcion} onChange={handdleChange} name="descripcion" label='descripcion' id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <Link to='/' type="submit" className="btn btn-primary">Cerrar</Link>
                </form>  
                ))
            }
        </div>
    )
}

export {Form};