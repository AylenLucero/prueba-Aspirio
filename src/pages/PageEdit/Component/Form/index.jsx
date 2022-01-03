import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../../../api";
import './index.css'

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
        <div className="mt-5 mb-5 d-flex justify-content-center">
            {
                list.map((book) => (
                <form className="containerEdit mb-5 mt-3 pt-5" key={book.id}>
                    <h1 className="text-center h1Edit">Edit the book</h1>
                    <div className="formGroup">
                    <div class="mb-3">
                        <label for="titulo" className="form-label textInd">Titulo</label>
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
                    <div className="mb-3 mt-4">
                        <label for="descrip" className="form-label textInd">Descripción</label>
                        <textarea 
                        className="form-control" 
                        defaultValue={book.descripcion} 
                        onChange={handdleChange} 
                        name="descripcion" 
                        label='descripcion' 
                        id="descrip" 
                        rows="5"
                        placeholder="La descripción debe contener más de diez carcteres">
                        </textarea>
                    </div>
                    {/* Envio a pantalla principal */}
                    <div className="containerBtn">
                       <Link to='/' type="submit" className="btn btn-primary btnEditForm mb-5">Cerrar</Link> 
                    </div>
                    
                    </div>
                </form>  
                ))
            }
        </div>
    )
}

export {Form};