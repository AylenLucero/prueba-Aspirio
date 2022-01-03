import React from "react";
import './index.css';

const Modal = ({titulo, descripcion, id}) => {
    // Modal para info.
    return(   
        <div className="modal fade" id={id} tabindex="-1" aria-labelledby="modal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content modalFont">
                <div className="contenedor">
            <div className="modal-header">
                <h5 className="modal-title" id="modal">{titulo}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body modalBody">
                {descripcion}
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary btnModal" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>  
    )
}

export {Modal};