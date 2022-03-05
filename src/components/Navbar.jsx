import logo from "../assets/pizzaLogo.png"

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarA">
        <div className="logoDiv">
          <img className="logoImage" src={logo} alt="Logo" />
        </div>
        <div className="nameDiv">Pizzzarriba</div>
      </div>
      <div className="navbarB">
        <div className="links">
          <button className="homeBtn">Home</button>
          <button className="aboutBtn">About</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
