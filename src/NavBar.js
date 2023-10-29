// import React from 'react'

// function NavBar() {
    
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar


import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  bg-redorange custom-navbar" style={{height: '80px', padding:'30px', backgroundColor:'#FF4500 !important'}}>
      <a className="navbar-brand" href="/">ListenEd</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto text-right align-items-right  justify-content-right ">
          <li className="nav-item " style={{marginLeft: '100px'}}>
          <a className="nav-link" href="search">පොත් සොයන්න</a>

          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">නිර්දේශයන්</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">මගේ දත්ත</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">අප ගැන</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
