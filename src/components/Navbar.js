import React from 'react'

const Navbar = () => {
  return (
    <div id="navbar" className='px-lg-5 sticky-top bg-dark'>
    <nav class="navbar navbar-expand-lg navbar-dark px-3 px-lg-5 mx-lg-5">
  <div class="container-fluid px-lg-5 mx-lg-5">
    <div class="fs-3 text-danger">MHC fitness</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto me-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#transformations">Transformations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#reviews">reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacts">contacts</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
