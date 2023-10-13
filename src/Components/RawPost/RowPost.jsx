import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imgUrl, baseUrl, API_KEY } from '../../constants/constant'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [movieID, setMovieID] = useState('')

    const opts = {
        height: '390',
        width: '100%',
        playerVars: { autoplay: 1 },
    };

    useEffect(() => {
        axios.get(`${props.url}`)
            .then((res) => {
                setMovies(res.data.results);
                // console.log(res.data.results);
            }).catch((err) => {
                console.error("Axios Error", err);
            })
    }, [])

    function trailerHandler(id) {
        // console.log(id)
        axios.get(`${baseUrl}movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                const Trailer = res.data.results.filter((obj) => obj.type === 'Trailer' && obj.site === "YouTube")
                setMovieID(Trailer.length > 0 ? Trailer[0].key : null);
            }).catch((err) => {
                console.log(err)
                setMovieID(null);
            })
    }

    return (
        <div className='row'>
            <h2 className='mt-5 subHeading'>{props.title}</h2>
            <div className='posters'>
                {
                    movies && movies.length > 0 ? movies.map((obj) => {
                        return <img className={props.isSmall ? 'poster_small' : 'poster zoomEffect'} alt='poster' src={`${imgUrl + obj.poster_path}`} onClick={() => { trailerHandler(obj.id) }} />
                    }) : ''
                }
            </div>

            {movieID && <button className='btn btn-dark' onClick={() => setMovieID(null)}><span className='bg-danger px-2 py-1' style={{ borderRadius: 100 }} >x</span></button>}
            {movieID && !props.noPreview && <YouTube videoId={movieID} opts={opts} />}

        </div>
    )
}

export default RowPost