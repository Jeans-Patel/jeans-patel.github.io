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
import { useLocation } from 'react-router-dom'

class CoopTerm2 extends Component {
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
            url: "./CoopTerm2Data.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
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
            <div className="CoopTerm2">
                <Navigation isHomePage={false} />
                <MobileNavigation isHomePage={false} />
                <Element name="header">
                    <Header data={this.state.resumeData.main} name="header" />
                </Element>
                <Element name="about company">
                    <About data={this.state.resumeData.main} name="about" />
                </Element>
                <section id="resume">
                    <Element name="about position">
                        <CoopInfoSection data={this.state.resumeData.resume} title="Job Description" />
                    </Element>
                    <Element name="goals">
                        <CoopInfoSection data={this.state.resumeData.resume} title="Goals" />
                    </Element>
                    <Element name="conclusion">
                        <CoopInfoSection data={this.state.resumeData.resume} title="Conclusion" />
                    </Element>
                    <Element name="acknowledgements">
                        <CoopInfoSection data={this.state.resumeData.resume} title="Acknowledgements" />
                    </Element>
                </section>
                <Contact data={this.state.resumeData.main} name="contact" />
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default CoopTerm2;