
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Libro } from '../Libro/index';
import {api} from '../../api/index';

const Lista = () => {

  const [list, setList] = useState()
  async function getLibros() {
    try {
      const response = await axios.get('http://localhost:3000/api/libros');
      setList(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getLibros()
  }, [ ])
   
    return (
      <div className='container'>
        <Libro libros={list} />
      </div> 
    )
  
}

export {Lista};

