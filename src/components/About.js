import React from 'react'
import about from '../assets/about.jpeg'

const About = () => {
  return (
    <div id="about" className='d-flex justify-content-center align-items-center py-5 my-5'>
      <div className="container my-lg-5 py-lg-5">
        <div className="row">

          <h1 className='d-block d-lg-none text-danger'><u>About me</u></h1>
          <div className="col-lg-6 col-12">
            <img className='img-fluid w-80 px-lg-5 py-3 py-lg-0' src={about} alt="" />
          </div>
          <div className="col-lg-6 col-12">
            <h2 className='d-none d-lg-block text-danger'><u>About me</u></h2>
            <h5 className='pe-lg-5 pt-2'>I realize how being overweight affects many aspects of your life, and I want to be there for you and help you discover the benefits and joys of training.
I am here to be your personal guide on every step of the journey.</h5>
          
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
