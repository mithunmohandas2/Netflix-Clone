import React, { useEffect, useState } from 'react'
import './PrimeRelease.css'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constant'

function PrimeRelease() {
  const [Movie1, setMovie1] = useState({})
  const [Movie2, setMovie2] = useState({})
  const [Movie3, setMovie3] = useState({})

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie1(response.data.results[0]);
        setMovie2(response.data.results[1]);
        setMovie3(response.data.results[2]);
        // console.log(response.data.results[0])
      })
      .catch((err)=>{
        alert('Network Error')
    })
  }, [])

  return (
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
              <button className='btn btn-danger m-1 px-4' >Play</button>
              <button className='btn btn-danger m-1 px-4' >My list</button>
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
                <button className='btn btn-danger m-1 px-4' >Play</button>
                <button className='btn btn-danger m-1 px-4' >My list</button>
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
                <button className='btn btn-danger m-1 px-4' >Play</button>
                <button className='btn btn-danger m-1 px-4' >My list</button>
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
  )
}

export default PrimeRelease