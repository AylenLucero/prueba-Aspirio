import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../Btn";
import { Modal } from "../Modal";
import './index.css';

const Book = ({books = []}) => {
    
    return(
        <ul className="list-group list mt-5 mb-5">
            {
                books.map((item, index) => (
                
                <li key={index} className="list-group-item d-flex justify-content-between liList">

                    <Link 
                    to={'/api/libros/'+item.id} 
                    data-bs-toggle="modal" 
                    className="textList"
                    data-bs-target={`#id${index}`}>
                        <i class="fas fa-book"></i>
                        {item.titulo}
                    </Link>    
                    <Btn link={item.id} />
                    <Modal titulo={item.titulo} descripcion={item.descripcion} id={`id${index}`} />
                </li>
                ))
            }
        </ul>
    )
}

export {Book};