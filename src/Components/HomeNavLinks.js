import { Link } from "react-scroll";

const HomeNavLinks = (props) => {
    return ( 
        <ul id="nav" className="nav">
            <li>
              <Link activeClassName="active" className="smoothscroll" to="home" spy={true} smooth={true} onClick={() => props.isMobile && props.closeMenu()}>
                Home
              </Link>
              {/* <a className="smoothscroll" href="#home">
                Home
              </a> */}
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="about" spy={true} smooth={true} onClick={() => props.isMobile && props.closeMenu()}>
                About
              </Link>
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="resume" spy={true} smooth={true} onClick={() => props.isMobile && props.closeMenu()}>
                Resume
              </Link>
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="portfolio" spy={true} smooth={true} onClick={() => props.isMobile && props.closeMenu()}>
                Co-ops
              </Link>
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="contact" spy={true} smooth={true} onClick={() => props.isMobile && props.closeMenu()}>
                Contact
              </Link>
            </li>
        </ul>
     );
}
 
export default HomeNavLinks;