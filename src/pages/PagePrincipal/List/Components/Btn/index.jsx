import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Btn = ({link}) => {

    return(
        <Link to={`/api/libros/${link}`} type="button" className="btn btn-secondary btnEdit"><i class="fas fa-edit"></i></Link>
    )
}

export {Btn}