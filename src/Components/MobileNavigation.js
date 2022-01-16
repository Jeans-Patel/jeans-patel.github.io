import HomeNavLinks from "./HomeNavLinks";
import CoopNavLinks from "./CoopNavLinks";
import {HiMenu} from "react-icons/hi";
import {CgClose} from "react-icons/cg"
import { useState } from "react";

const MobileNavigation = (props) => {

    const [open, setOpen] = useState(false);

    const menuIcon = <HiMenu className="mobileMenuIcon" size="40px" color='#fe6928' onClick={() => setOpen(!open)}/>

    const closeIcon = <CgClose className="mobileMenuIcon" size="40px" color='#fe6928' onClick={() => setOpen(!open)}/>

    const closeMenu = () => setOpen(false);

    const navlinks = props.isHomePage ? <HomeNavLinks isMobile={true} closeMenu={closeMenu}/> : <CoopNavLinks isMobile={true} closeMenu={closeMenu}/>;

    return ( 
        <nav id="mobileNavigation" className="nav-wrap">
            {open ? closeIcon : menuIcon}
            {open && navlinks}
        </nav>
     );
}
 
export default MobileNavigation;