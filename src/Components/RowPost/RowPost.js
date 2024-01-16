import React from 'react'
import "./RowPost.css"
import { useEffect, useState } from 'react'
import axios from '../../axios'
import {  imgUrl } from '../../constants/constants'



function RowPost(props) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovies(response.data.results)
        })
    }, [])

    return (

        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img src={`${imgUrl+obj.backdrop_path}`} className={props.isSmall ? 'smallPoster':'poster'} alt="" />

                )}

            </div>

        </div>
    )
}

export default RowPost
