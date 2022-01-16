import React, { Component } from "react";
import { useState, useEffect } from "react";
import $ from "jquery";
import Navigation from "../Components/Navigation";
import MobileNavigation from "../Components/MobileNavigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import CoopInfoSection from "../Components/CoopInfoSection";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";
import { Element } from "react-scroll";

// const CoopTerm1 = (props) => {
//   const [coopTermdata, setCoopTermData] = useState({});
//   const [jobDescriptionData, setJobDescriptionData] = useState([]);

//   useEffect(() => {
//     $.ajax({
//       url: "./coopTerm1Data.json",
//       dataType: "json",
//       cache: false,
//       success: function(data) {
//         setCoopTermData(data);
//         setJobDescriptionData(data.resume.jobDescription);
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.log(err);
//         alert(err);
//       }
//     });
//   }, [])

//   return ( 
//       <div className="CoopTerm1">
//         <Navigation isHomePage={false}/>
//         <MobileNavigation isHomePage={false}/>
//         <Element name="header">
//           <Header data={coopTermdata.main} name="header"/>
//         </Element>
//         <Element name="about company">
//           <About data={coopTermdata.main} name="about"/>
//         </Element>
//         <Element name="about position">
//           <CoopInfoSection data={coopTermdata.resume} title="Job Description"/>
//         </Element>
//         <Contact data={coopTermdata.main} name="contact"/>
//         <Footer data={coopTermdata.main} />
//       </div>
//    );
// }
 
// export default CoopTerm1;

class CoopTerm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
    this.getResumeData = this.getResumeData.bind(this);
  }

  getResumeData() {
    $.ajax({
      url: "./coopTerm1Data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log(data.resume.education);
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
      <div className="CoopTerm1">
        <Navigation isHomePage={false}/>
        <MobileNavigation isHomePage={false}/>
        <Element name="header">
          <Header data={this.state.resumeData.main} name="header"/>
        </Element>
        <Element name="about company">
          <About data={this.state.resumeData.main} name="about"/>
        </Element>
        <section id="resume">
          <Element name="about position">
            <CoopInfoSection data={this.state.resumeData.resume} title="Job Description"/>
          </Element>
          <Element name="goals">
            <CoopInfoSection data={this.state.resumeData.resume} title="Goals"/>
          </Element>
          <Element name="conclusion">
            <CoopInfoSection data={this.state.resumeData.resume} title="Conclusion"/>
          </Element>
          <Element name="acknowledgements">
            <CoopInfoSection data={this.state.resumeData.resume} title="Acknowledgements"/>
          </Element>
        </section>
        <Contact data={this.state.resumeData.main} name="contact"/>
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default CoopTerm1;
