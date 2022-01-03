import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form } from "./Component/Form";
import { baseUrl } from "../../api";
import { Layout } from "../../Layout";

const PageEdit = () => {
    const {id} = useParams();

    const [list, setList] = useState()

    async function getBooks() {
        try {
          const response = await axios.get( baseUrl + id );
          setList(response.data)
          
        } catch (error) {
          console.error(error);
        }
    }
    
    useEffect(() => {
        getBooks()
      }, [ ])

    return(
      <div className="container-fluid">
        <Layout>
        <Form list={list} />
        </Layout>
      </div>
        
    )
}

export {PageEdit};