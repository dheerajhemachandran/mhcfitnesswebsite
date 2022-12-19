import React from 'react'
import r1 from '../assets/r1.jpeg'
import r2 from '../assets/r2.jpeg'
import r3 from '../assets/r3.jpeg'
import r4 from '../assets/r4.jpeg'
import r5 from '../assets/r5.jpeg'
import r6 from '../assets/r6.jpeg'
import r7 from '../assets/r7.jpeg'
import r8 from '../assets/r8.jpeg'
import r9 from '../assets/r9.jpeg'
import r10 from '../assets/r10.jpeg'
import r11 from '../assets/r11.jpeg'

const Testimonial = () => {
  return (
    <div id="reviews" className="d-flex gap-3 flex-column justify-content-center items-align-center mb-5">
      <h1 className="text-danger text-center"><u>Client Testimonials</u></h1>
      <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={r1} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r2} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r3} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r4} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r5} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r6} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r7} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r8} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r9} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r10} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={r11} class="d-block mx-auto p-5 w-80 img-fluid" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>   
        
    </div>
  )
}

export default Testimonial
