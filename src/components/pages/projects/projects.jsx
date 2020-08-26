import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import Projects from "../../blocks/Projects";


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, active: true };

  }
  
  render() {
    const { list, title} = this.props
    return (
      <div >
        <Projects list={list} title={title}/>
      </div>
    );
  }
}
