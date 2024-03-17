import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


const People = () => {
    const [name, setName] = useState("")
    const { categorie, id } = useParams();
    const ApiHandler = (id) => {
        axios.get(`https://swapi.py4e.com/api/${categorie}/${id}/`)
            .then(response => {
                setName(response.data.name)
            })
    }
    useEffect(() => {
        ApiHandler(id);
    }, [])


    return (
        <h4>Id:{id}<br />Name:{name}<br />Categorie:{categorie}</h4>
    )
}

export default People