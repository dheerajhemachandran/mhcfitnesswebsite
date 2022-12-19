import React from 'react'
import cli1 from '../assets/cli1.jpeg'
import cli2 from '../assets/cli2.jpeg'
import cli3 from '../assets/cli3.jpeg'
import cli6 from '../assets/cli6.jpeg'
import cli7 from '../assets/cli7.jpeg'
import cli8 from '../assets/cli8.jpeg'

const Clients = () => {
  return (
    <div id='transformations' className='mt-5 pt-5'>
        <h1 className="text-danger mt-5 pb-lg-5 text-center"><u>Transformations</u></h1>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={cli1} class="d-block w-90 p-5 mx-auto img-fluid" alt="..."/>
    </div><div class="carousel-item ">
      <img src={cli2} class="d-block w-90 p-5 mx-auto img-fluid" alt="..."/>
    </div><div class="carousel-item ">
      <img src={cli3} class="d-block w-90 p-5 mx-auto img-fluid" alt="..."/>
    </div><div class="carousel-item ">
      <img src={cli6} class="d-block w-90 p-5 mx-auto img-fluid" alt="..."/>
    </div><div class="carousel-item ">
      <img src={cli7} class="d-block w-90 p-5 mx-auto img-fluid" alt="..."/>
    </div><div class="carousel-item ">
      <img src={cli8} class="d-block w-90 p-5 mx-auto img-fluid" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Clients
