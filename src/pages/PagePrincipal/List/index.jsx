
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import {Book} from './Components/Libro';
import { baseUrl } from '../../../api';

const List = () => {

  const [list, setList] = useState()

  async function getBooks() {
    try {
      const response = await axios.get(baseUrl);
      setList(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getBooks()
  }, [ ])
   
    return (
      <div className='container'>
        <Book books={list} />
      </div> 
    )
  
}

export {List};

