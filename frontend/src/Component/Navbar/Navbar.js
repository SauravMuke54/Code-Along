import React from 'react'
import logo from '../../Images/logo.png'
export default function Navbar() {
  return (
 
        <nav class="navbar navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={{fontFamily:"cursive",color:"#3498db",textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',letterSpacing:"2px",fontSize:"25px"}}><b><i>Code Along</i></b> 
                
                {/* <img  className='img-fluid'src={logo} alt='logo' style={{width:"20%",borderRadius:"50px",mixBlendMode:"darken"}}/> */}
 </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                            Code Along
                        </h5>
                        <button
                            type="button"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                    ><b>Home</b></a
                                >
                            </li>
                            <hr/>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#"><b>About Us</b></a>
                            </li>
                           <hr/>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><b>Login / Signup</b></a>
                            </li>

                            {/* <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >Dropdown</a
                                >
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownId"
                                >
                                    <a class="dropdown-item" href="#"
                                        >Action 1</a
                                    >
                                    <a class="dropdown-item" href="#"
                                        >Action 2</a
                                    >
                                </div>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>

        
        

  )
}
