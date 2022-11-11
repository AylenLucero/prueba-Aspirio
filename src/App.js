
import React from 'react';
import { List } from './pages/PagePrincipal/List';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {PageEdit} from './pages';

const App = () => {
 
  return( 
    // Rutas del proyecto 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}>
        </Route>
        <Route path="/api/libros/:id" element={<PageEdit />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;

