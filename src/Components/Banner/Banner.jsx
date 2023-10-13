import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div 
         className='banner'>
            <div className='content' >
                <h1 className='title my-5 pt-2'>The biggest Indian hits. 
                <br />
                Ready to watch here from ₹ 149.  </h1>
                <h4>Join today. Cancel anytime.</h4>
                <h6 className='my-4'>Ready to watch? Get Started your email to create or restart your membership.</h6>
                <button className='btn btn-danger m-1 px-5'>Get Started</button>
               
            </div>
        <div className=" fade_bottom"></div>
        </div>
    )
}

export default Banner