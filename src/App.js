
import React from 'react';
import { Libro } from './Components/Libro';
import { Modal } from './Components/Modal';
import { Lista } from './Components/Lista';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Btn } from './Components/Btn';
import { PageId } from './pages';
import { ModalEdit } from './Components/ModalEdit';

const App = () => {

   
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lista />}>
        </Route>
        <Route path="/api/libros/:id" element={<PageId />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;

