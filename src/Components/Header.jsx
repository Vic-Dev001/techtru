import "./Header.css";
import "animate.css/animate.min.css";
import "./Root.css";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";

function Header(props) {
  return (
    <>
      <main>
        <div
          className='container-fluid header'
          style={{
            backgroundImage: `linear-gradient(to bottom right, var(--black-theme),var(--black-theme)), url(${props.backgroundImage})`,
          }}>
          <nav className='navbar navbar-expand-lg'>
            <div>
              <Link to={"/"} className='navbar-brand' ><img
                  src='../src/assets/images/main-logo.png'
                  alt=''
                  width={"50%"}
                /></Link>
              <button
                className='navbar-toggler'
                style={{ backgroundColor: "white" }}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item-custom'>
                  <Link to={"/works"}  className='nav-link' style={{ color: "white" }}> Our works</Link>
                </li>
                <li className='nav-item-custom'>
                <Link to={"/about-us"}  className='nav-link' style={{ color: "white" }}> About</Link>
                </li>
                <li className='nav-item-custom'>
                <Link to={"/services"}  className='nav-link' style={{ color: "white" }}> Services</Link>
                </li>
                <li className='nav-item-custom'>
                <Link to={"/contact-us"}  className='nav-link' style={{ color: "white" }}> Contact</Link>
                </li>
              </ul>
              <div className=''>
                <button
                  className='btn'
                  style={{ backgroundColor: "#FCE38A", fontSize: "1.6rem" }}>
                  Get Started
                </button>
              </div>
            </div>
          </nav>

          <div
            className='col-lg-12 d-flex justify-content-end'
            style={{ marginTop: "20rem" }}>
            <div>
              <h1
                style={{
                  fontSize: "6rem",
                  color: "white",
                  fontWeight: "800",
                  marginRight: "10rem",
                  lineHeight: "1.4em",
                }}>
                We're <span className='highlight'>Creative</span>
                <br /> <span className='highlight'>Technology</span> Agency
              </h1>

              <p
                style={{
                  color: "white",
                  fontSize: "1.6rem",
                  lineHeight: "1.8em",
                }}>
                we're a cutting-edge technology brand that specializes in
                designing and developing innovative
                <br /> solutions for the modern world. Our team of experts is
                dedicated to pushing the boundaries of
                <br /> what's possible, with a focus on creating products that
                are not only functional but also <br /> visually stunning.
              </p>

              <button
                className='btn text-center'
                style={{ backgroundColor: "#FCE38A", fontSize: "1.6rem" }}>
                Get Started
              </button>
            </div>
          </div>
        </div>

      </main>

    </>
  );
}
export default Header;
