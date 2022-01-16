import React, { Component } from "react";
import Slide from "react-reveal";
import { useEffect, useState } from "react";

// const CoopInfoSection = (props) => {

//   const [content, setContent] = useState();
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     setTitle(props.title);
//     setContent(props.data.jobDescription);
//     console.log(props);
//   }, []);

  
//   useEffect(() => {
//     if (props.data.length > 0) {
//       setContent(props.data.jobDescription);
//     }
//     console.log(props);
//   }, [props]);

//   useEffect(() => {
//     console.log(content);
//   }, [content])
  
//   // console.log(props);
  
//   // if (props.data.isArray()) {
//   //   
//   // }

//   const education = props.data.jobDescription.map(function (education) {
//     return (
//       <div key={education.header}>
//         <h3>{education.header}</h3>
//         <p className="info">
//           sadasda <span>&bull;</span>
//           <em className="date">sadasda</em>
//         </p>
//         <p>{education.description}</p>
//       </div>
//     );
//   });
  
//   // content.map((paragraph) => {
//   //   <div key={paragraph.header}>
//   //           <h3>{paragraph.header}</h3>
//   //           <p className="info">
//   //             SDASDSAD <span>&bull;</span>
//   //             <em className="date">ASDASD</em>
//   //           </p>
//   //           <p>{paragraph.description}</p>
//   //   </div>
//   // })

//   return ( 
//     <section id="resume">

//       <Slide left duration={1300}>
//         <div className="row work">
//           <div className="three columns header-col">
//             <h1>
//               <span>{title}</span>
//             </h1>
//           </div>

//           <div className="nine columns main-col">{education}
//           </div>
//         </div>
//       </Slide>
//     </section>
//    );
// }
 
// export default CoopInfoSection;

class CoopInfoSection extends Component {

  render() {
    if (!this.props.data) return null;

    // const skillmessage = this.props.data.skillmessage;
    const jobDescription = this.props.data.jobDescription.map(function (education) {
      return (
        <div key={education.header}>
          <h3>{education.header}</h3>
          <p>{education.description}</p>
        </div>
      );
    });

    const goals = this.props.data.goals.map(function (education) {
      return (
        <div key={education.header}>
          <h3>{education.header}</h3>
          <p>{education.description}</p>
        </div>
      );
    });

    const conclusion = this.props.data.conclusion.map(function (education) {
      return (
        <div key={education.header}>
          <h3>{education.header}</h3>
          <p>{education.description}</p>
        </div>
      );
    });

    const acknowledgements = this.props.data.acknowledgements.map(function (education) {
      return (
        <div key={education.header}>
          <h3>{education.header}</h3>
          <p>{education.description}</p>
        </div>
      );
    });

    let content;

    switch (this.props.title) {
      case "Job Description":
        content = jobDescription
        break;
      case "Goals":
        content = goals
        break;
      case "Conclusion":
        content = conclusion
        break;
      case "Acknowledgements":
        content = acknowledgements
        break;
      default:
        break;
    }

    // const project = this.props.data.goals.map(function (project) {
    //   return (
    //     <div key={project.name}>
    //       <h3>{project.name}</h3>
    //       <p className="info">
    //         {project.subject}
    //         <span>&bull;</span> <em className="date">{project.years}</em>
    //       </p>
    //       <p>{project.description}</p>
    //     </div>
    //   );
    // });

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

    return (
      <div>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>{this.props.title}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{content}</div>
              </div>
            </div>
          </div>
        </Slide>

        {/* <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">{project}</div>
          </div>
        </Slide> */}

        {/* <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */}
      </div>
    );
  }
}

export default CoopInfoSection;
