import React, { useEffect } from "react";
import axios from 'axios';

const ModalEdit = ({link, titulo}) => {

  async function getLibros() {
    try {
      const response = await axios.get(`http://localhost:3000/api/libros/${link}`);
      console.log(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }

    return(
        <div className="modal" id='IdModal' tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form className="container">
                    <div class="mb-3">
                        <label for="titulo" className="form-label">Titulo</label>
                        <input type="text" className="form-control" placeholder={titulo} id="titulo" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripción</label>
                        <input type="text" className="form-control" id="descripcion" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    )
}
export {ModalEdit};