import React from "react";
import { Routes, Route,Link } from "react-router-dom";
import { Btn } from "../Btn";
import { Modal } from "../Modal";
import { ModalEdit } from "../ModalEdit";



const Libro = ({libros = []}) => {
    
    

    return(
        <ul className="list-group">
            {
                libros.map((item, index) => (
                
                <li key={index} className="list-group-item d-flex justify-content-between">

                    <Link to={'/api/libros/'+item.id} data-bs-toggle="modal" data-bs-target={`#id${index}`}>{item.titulo}</Link>    
                    {/* <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#id${item.id}`}>Edit</button> */}
                    <Btn text='Edit' link={item.id} />
                    <Modal titulo={item.titulo} descripcion={item.descripcion} id={`id${index}`} />
                    {/* <ModalEdit id={`id${item.id}`} titulo={item.titulo} /> */}
                </li>
                ))
            }
        </ul>
    )
}

export {Libro}