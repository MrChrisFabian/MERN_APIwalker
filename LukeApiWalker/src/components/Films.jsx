import React from 'react'

const Films = () => {
    return (
        <div>
            <h1>{info.title}</h1>
            <p>Episode:{info.episode_id}</p>
            <p>Director:{info.director}</p>
            <p>Producer:{info.producer}</p>
            <p>Release Date:{info.release_date}</p>
            </div>
    )
}

export default Films