import React from 'react'

const Home = () => {
  return (
    <div id="home" className='d-flex flex-column text-center gap-2 px-lg-5 mx-lg-5 justify-content-center align-items-center'>
      <h1>Hi I'am, <span className='text-danger'>Hemachandran</span></h1>
      <h4 className='px-lg-5 mx-lg-5'>FEEL THE PROCESS, NOT JUST THE RESULT.</h4>
       <div className="d-flex gap-3">
        <a className="btn btn-light px-3" href='#about'>About</a>
        <a className="btn btn-danger px-3" href="#contacts">Contact</a>
      </div>
    </div>
  )
}

export default Home
