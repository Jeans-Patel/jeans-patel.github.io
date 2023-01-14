import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Coop from "./Pages/Coop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Coop" element={<Coop/>}/>
        </Routes>
      </BrowserRouter>
      // <div className="App">
      // <Header data={this.state.resumeData.main} />
      //   <About data={this.state.resumeData.main} />
      //   <Resume data={this.state.resumeData.resume} />
      //   <Portfolio data={this.state.resumeData.portfolio} />
      //   <Contact data={this.state.resumeData.main} />
      //   <Footer data={this.state.resumeData.main} />
      // </div>
    );
  }
}

export default App;
