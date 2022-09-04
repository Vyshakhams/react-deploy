function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Brand
          </a>

          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                {" "}
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="/" className="nav-link">
                {" "}
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// test
