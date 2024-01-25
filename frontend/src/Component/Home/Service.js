import React from 'react'
import login from '../../Images/login.png'

export default function Service() {
  return (
    <div className='container-fluid '>
        <center>        <h1 className='text-white'><u >Getting Started</u></h1>

        <div className='row'>
            <div className="col-lg-4">
            <div class="card border-white bg-transparent  mb-3" style={{maxWidth: "18rem"}}>
  {/* <div class="card-header">Header</div> */}
  <div class="card-body text-secondary">
    <h5 class="card-title text-white">Secondary card title</h5>
    {/* <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  <img className='img-fluid ' src={login} />
  
  </div>
</div>
            </div>

        </div>
        </center>


    </div>
  )
}
