import HomeNavLinks from "./HomeNavLinks";
import CoopNavLinks from "./CoopNavLinks";

const Navigation = (props) => {

    return ( 
        <nav id="navigation" className="nav-wrap">
            {props.isHomePage ? <HomeNavLinks/> : <CoopNavLinks/>}
        </nav>
     );
}
 
export default Navigation;