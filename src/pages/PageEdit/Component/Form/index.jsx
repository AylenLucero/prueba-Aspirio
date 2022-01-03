import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../../../api";

const Form = ({list = []}) => {
    const {id} =useParams();

    const [edit, setEdit] = useState({
        titulo: '',
        descripcion: ''
    })

    // Edicion
    const putBook = () => {
        axios.put( baseUrl + id, edit )
    }
    
    // Aplicacion de put
    useEffect(() => {
        if((edit.titulo.length >= 2) && (edit.descripcion.length >= 9)) {
          putBook()  
        }        
    })
 
    // Valores input
    const handdleChange = (e) => {     
        const {name, value} = e.target;
        setEdit(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div className="container">
            {
                list.map((book) => (
                <form>
                    <div class="mb-3">
                        <label for="titulo" className="form-label">Titulo</label>
                        <input 
                        type="text" 
                        label='titulo' 
                        defaultValue={ book.titulo} 
                        onChange={handdleChange} 
                        name="titulo" 
                        className="form-control" 
                        id="titulo" 
                        aria-describedby="Titulo" 
                        placeholder="El titulo debe contener más de dos caracteres"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
                        <textarea 
                        className="form-control" 
                        defaultValue={book.descripcion} 
                        onChange={handdleChange} 
                        name="descripcion" 
                        label='descripcion' 
                        id="exampleFormControlTextarea1" 
                        rows="5"
                        placeholder="La descripción debe contener más de diez carcteres">
                        </textarea>
                    </div>
                    {/* Envio a pantalla principal */}
                    <Link to='/' type="submit" className="btn btn-primary">Cerrar</Link>
                </form>  
                ))
            }
        </div>
    )
}

export {Form};