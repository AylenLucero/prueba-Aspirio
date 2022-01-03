import React from "react";
import { Link } from "react-router-dom";

const Btn = ({text, link}) => {



    return(
            <Link to={`/api/libros/${link}`} type="button" class="btn btn-secondary">{text}</Link>
 
        
    )
}

export {Btn}