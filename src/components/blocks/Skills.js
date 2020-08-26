import React, { Component } from "react";

import Skill from ".././elements/Skill";

export default class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    let skills = this.props.list;
    let skillsTags = this.props.tags;
    return (
      <div id="Skills" className="content__size block">
        <h3 className="block__heading">My skills</h3>
        <div className="skills">
          {skills.map(skill => <Skill list={skill} />)}
        </div>
        <div className="skills skills--small">
          {skillsTags.map(skillTag => (
            <div className="skills__medium">
              <h4>{skillTag.name}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
