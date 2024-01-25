import React from "react";
import login from "../../Images/login1.avif";

export default function Signup() {
  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundColor: "#1c2333",
        marginTop: "55px",
        background: "linear-gradient(to right, #8e44ad, #3498db, #00cec9)",
      }}
    >
        
      <div className="row p-5 ">
      <center><h1 className="text-white" style={{fontFamily:"cursive",marginTop:"4%",marginBottom:"0%"}}><b><u>Login User</u></b></h1></center>
        <div className="col-lg-4 col-sm-12 " style={{ marginTop: "6%" }}>
         <center> <img className="img-fluid rounded-5" src={login} /></center>
        </div>
        <div className="col-lg-8 col-sm-12  " style={{ marginTop: "5%" }}>
          <div className="container-fluid border border-5 border-white p-5 rounded-5">
            <form>

            <div class="form-group text-white mb-2">
                <label for="name"><h6>Name</h6></label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name.."
                />
               
              </div>
            
              <div class="form-group text-white mb-2 mt-2">
                <label for="exampleInputEmail1"><h6>Email address</h6></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email ..."
                />
               
              </div>
              <div class="form-group text-white mb-2 mt-2">
                <label for="exampleInputPassword1"><h6>Password</h6></label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              
              <button type="submit" class="btn btn-success w-100 mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
