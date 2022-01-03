
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import {Book} from './Components/Libro';
import { baseUrl } from '../../../api';
import { Layout } from '../../../Layout';

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
      
      <div className='container-fluid'>
        <Layout >
          <h1 className='mt-5 text-center'>My List</h1>
        <div className=' d-flex justify-content-center mt-3 mb-5'>
          
          <Book books={list} />
        </div>
        </Layout>
      </div> 
    )
  
}

export {List};

