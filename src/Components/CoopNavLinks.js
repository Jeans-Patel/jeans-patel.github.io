import { Link } from "react-scroll";
import { Link as HomeLink } from "react-router-dom";

const CoopNavLinks = (props) => {
    return ( 
        <ul id="nav" className="nav">
            <li>
              <HomeLink to="/">
                Home
              </HomeLink>
              {/* <a className="smoothscroll" href="#home">
                Home
              </a> */}
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="about company" spy={true} smooth={true} onClick={() => props.isMobile && props.closeMenu()}>
                About Company
              </Link>
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="about position" spy={true} smooth={true} offset={-90} onClick={() => props.isMobile && props.closeMenu()}>
                About Position
              </Link>
            </li>

            <li>
              <Link activeClassName="active" className="smoothscroll" to="goals" spy={true} smooth={true} offset={-90} onClick={() => props.isMobile && props.closeMenu()}>
                Goals
              </Link>
            </li>
            
            <li>
              <Link activeClassName="active" className="smoothscroll" to="conclusion" spy={true} smooth={true} offset={-90} onClick={() => props.isMobile && props.closeMenu()}>
                Conclusion
              </Link>
            </li>
            
            <li>
              <Link activeClassName="active" className="smoothscroll" to="acknowledgements" spy={true} smooth={true} offset={-90} onClick={() => props.isMobile && props.closeMenu()}>
                Acknowledgements
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
 
export default CoopNavLinks;