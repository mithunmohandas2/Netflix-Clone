import React, { useEffect, useState } from 'react'
import { baseUrl, API_KEY, imgUrl } from '../../constants/constant'
import './PrimeRelease.css'
import axios from '../../axios'
import YouTube from 'react-youtube'

function PrimeRelease() {
  const [Movie1, setMovie1] = useState({})
  const [Movie2, setMovie2] = useState({})
  const [Movie3, setMovie3] = useState({})
  const [movieID, setMovieID] = useState(null)

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie1(response.data.results[4]);
        setMovie2(response.data.results[1]);
        setMovie3(response.data.results[2]);
        // console.log(response.data.results[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  };

  function trailerHandler(id) {
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
    <>
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${imgUrl + Movie1.backdrop_path}`} className="d-block w-100" alt="Movie-1_banner" />
            <div className="carousel-caption d-none d-md-block">
              <h2>{Movie1 ? Movie1.title : ''}</h2>
              <h5 className='mb-4'>Rating : {Movie1 ? Movie1.vote_average : ''} / 10</h5>
              <p>{Movie1 ? Movie1.overview : ''}</p>

              <div className='banner_buttons my-3' >
                <button className='btn btn-danger m-1 px-4' onClick={() => trailerHandler(Movie1.id)} >Play Trailer</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={`${imgUrl + Movie2.backdrop_path}`} className="d-block w-100" alt="Movie-2_banner" />
            <div className="carousel-caption d-none d-md-block">
              <h2>{Movie1 ? Movie2.title : ''}</h2>
              <h5 className='mb-4'>Rating : {Movie1 ? Movie2.vote_average : ''} / 10</h5>
              <p>{Movie1 ? Movie2.overview : ''}</p>

              <div className='banner_buttons my-3' >
                <button className='btn btn-danger m-1 px-4' onClick={() => trailerHandler(Movie2.id)} >Play Trailer</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={`${imgUrl + Movie3.backdrop_path}`} className="d-block w-100" alt="Movie-3_banner" />
            <div className="carousel-caption d-none d-md-block">
              <h2>{Movie1 ? Movie3.title : ''}</h2>
              <h5 className='mb-4'>Rating : {Movie3 ? Movie3.vote_average : ''} / 10</h5>
              <p>{Movie1 ? Movie3.overview : ''}</p>

              <div className='banner_buttons my-3' >
                <button className='btn btn-danger m-1 px-4' onClick={() => trailerHandler(Movie3.id)} >Play Trailer</button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {movieID && <button className='btn btn-dark' onClick={() => setMovieID(null)}><span className='bg-danger px-2 py-1' style={{ borderRadius: 100 }} >x</span></button>}
      {movieID && <YouTube videoId={movieID} opts={opts} />}
    </>
  )
}

export default PrimeRelease