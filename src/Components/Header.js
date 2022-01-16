import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import {Link} from "react-scroll";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.isHomePage ? this.props.data.name : this.props.data.companyName;
    const description = this.props.data.description;

    const buttons = this.props.data.isHomePage ? <ul className="social">
    <a href={project} className="button btn project-btn">
      <i className="fa fa-book"></i>Linkdin
    </a>
    <a href={github} className="button btn github-btn">
      <i className="fa fa-github"></i>Github
    </a>
  </ul> : <div></div>

    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              {buttons}
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <Link activeClassName="active" className="smoothscroll" to="about" smooth={true}>
            <i className="icon-down-circle"></i>
          </Link>
        </p>
      </header>
    );
  }
}

export default Header;
