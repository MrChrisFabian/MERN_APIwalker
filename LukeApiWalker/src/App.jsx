import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Species from './components/Species';
import { Routes, Route, Link } from 'react-router-dom';
import People from './components/People';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [categorie, setcategorie] = useState("")
  const [id, setid] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const categories = formData.get('categories')
    const idValue = formData.get('id')
    setid(idValue)
    setcategorie(categories)
    navigate(`/${categories}/${idValue}`)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="categories">Search for: </label>
        <select name="categories" id="categories">
          <option defaultValue={true} value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">StarShips</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="text">id</label>
        <input type='number' id='text' name='id' />
        <button type="submit">Search</button>
      </form>
      <div>
        <Routes>
          <Route path='/:categorie/:id' element={<People />} />
        </Routes>
      </div>
    </>
  )
}

export default App