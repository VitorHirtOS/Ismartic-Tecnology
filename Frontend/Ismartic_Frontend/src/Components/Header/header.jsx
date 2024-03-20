function Header(){
  return(
    <>
    <div className="header-box">
      <div className="header-left-box">
        <div className="logo">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
          <div>
          <h1>Ismartic <br/>Tecnology</h1>
        </div>
        <div class="bars-left-box">
          <span>.</span>
        </div>
      </div>
      <div className="header-center-box">
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Page Blog</li>
            <li>Search</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header-right-box">
           <a href="#">
            Sing Up
           </a>
           <a href="#">
            Add Listing
           </a>
            <button>
              <i class="fas fa-shopping-cart"></i>
            </button>
      </div>
     </div>
    </>
  )
};


export default Header;
