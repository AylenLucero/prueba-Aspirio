import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form } from "./Component/Form/index";

const PageId = () => {
    const {id} = useParams();
    console.log(id)
    const [list, setList] = useState()
    async function getLibros() {
        try {
          const response = await axios.get(`http://localhost:3000/api/libros/${id}` );
          setList(response.data)
          
        } catch (error) {
          console.error(error);
        }
    }
    
    useEffect(() => {
        getLibros()
      }, [ ])

    return(
        <Form list={list} />
    )
}

export {PageId};