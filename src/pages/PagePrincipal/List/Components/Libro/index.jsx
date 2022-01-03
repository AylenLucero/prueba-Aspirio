import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../Btn";
import { Modal } from "../Modal";

const Book = ({books = []}) => {
    
    return(
        <ul className="list-group">
            {
                books.map((item, index) => (
                
                <li key={index} className="list-group-item d-flex justify-content-between">

                    <Link 
                    to={'/api/libros/'+item.id} 
                    data-bs-toggle="modal" 
                    data-bs-target={`#id${index}`}>
                        {item.titulo}
                    </Link>    
                    <Btn text='Edit' link={item.id} />
                    <Modal titulo={item.titulo} descripcion={item.descripcion} id={`id${index}`} />
                </li>
                ))
            }
        </ul>
    )
}

export {Book};