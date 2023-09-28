import React from "react";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="section layout bg-light">
      <div className="container">
        <div className="row head">
          <div className="col-md-3 colHeadLorem">
            
            <h3>LOREM IPSUM</h3>
          </div>
         
          <div className="col-md-9 colHeadLink">
            <div className="buttons d-inline-flex justify-content-center mb-2 pb-"></div>
            <button onClick="" className="btn btn-primary fa fa-sign-in me-1"> Login</button>            
            <button onClick="" className="btn btn-dark fa fa-sign-in me-1"> Register</button>            
           
              LINK1 - Login
        
          </div>
        </div>

        <div className="row center">
          <div className="col-md-6 colCenter">
            <h3 className="centerHead">
              THIS IS SOME CONTENT ALIGNED IN THS CENTER
              <br /> VERTICALLY AND HORIZONTALLY
            </h3>
          </div>
          <div className="col-md-6 colCenter"></div>
        </div>
        <div className="row center">
          <div className="col-md-12 colFooter">
            <h3>
              THIS IS THE FOOTER CONTENT WHICH IS ALIGNED
             
              <br />
              <span className="left">LEFT</span>
             
            </h3>
            
<div className="buttons d-inline-flex justify-content-center mb-2 pb-"></div>
<button className="btn btn-danger me-2 fa fa-google-plus-official"> Google+</button>  
<button  className=" btn btn-danger me-2 fa fa-youtube-play fa fa-twitter"> Yube Tube</button>  
 
<button className=" btn btn-info me-2 fa fa-twitter"> twitter</button>  

<button className=" btn btn-primary me-2 fa fa-facebook-official"> Facebook</button>            
<button className=" btn btn-danger me-2 fa fa-instagram"> instagram</button>
<br></br>
<div className='text-center p-3' style={{ backgroundColor: 'rgba(2, 0, 2, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright: gagandeep- All Right        
 <a className='text-Gray'>       
        
        </a>
      </div>

          </div>
        
        </div>

      </div>
      
    </div>
  );
}


export default Layout;