import React, { Component } from "react";
import $ from "jquery";
import Navigation from "../Components/Navigation";
import MobileNavigation from "../Components/MobileNavigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="Home">
        <Navigation isHomePage={true}/>
        <MobileNavigation isHomePage={true}/>
        <Header data={this.state.resumeData.main} id="home"/>
        <About data={this.state.resumeData.main} id="about"/>
        <Resume data={this.state.resumeData.resume} id="resume"/>
        <Portfolio data={this.state.resumeData.portfolio} id="portfolio"/>
        <Contact data={this.state.resumeData.main} id="contact"/>
        <Footer data={this.state.resumeData.main} id="footer"/>
      </div>
    );
  }
}

export default Home;
