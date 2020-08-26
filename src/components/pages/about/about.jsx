import React, { Component } from "react";
import Hobbies from "../../blocks/Hobbies";
import Experience from "../../blocks/Experience";
import Skills from "../../blocks/Skills";
import chargeSample from './resume.docx';
import { saveFileAs } from "./download/download";
import api from "./download/api";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, active: true };
  }
  handleClick = async () => {
    const file = await api.get("/api/url");
    saveFileAs(file, "somefile.txt");
  };
  render() {
    
    const { hobbies, jobs, study, skills, tags} = this.props
    return (
      <div >
{/* <button onClick={this.handleClick}>
        Download
      </button> */}
        <Skills list={skills} tags={tags} /> 
        <Experience list={jobs} class="" title="Experience" /> 
        <Experience
          list={study}
          class="study"
          title="Education"
        />
        {/* <Hobbies hobbies={hobbies} /> */}

      </div>
    );
  }
}
