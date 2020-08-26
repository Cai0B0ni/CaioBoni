import React, { Component } from "react";
import Job from ".././elements/Job";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let jobs = this.props.list;
    let studyClass = "experience " + this.props.class;
    return (
      <div id={this.props.title} className="content__size block">
        <h3 className="block__heading">{this.props.title}</h3>
        <div className={studyClass}>{jobs.map(job => <Job list={job} />)}</div>
      </div>
    );
  }
}
