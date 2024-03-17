import React from 'react'

const Species = ({info}) => {
  return (
    <div>
        <h1>{info.name}</h1>
        <p>Classification:{info.classification}</p>
        <p>Designation:{info.designation}</p>
        <p>Average Height:{info.average_height}</p>
    </div>
  )
}

export default Species