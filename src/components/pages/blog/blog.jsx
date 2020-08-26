import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import Blog from "../../blocks/Blog";

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, active: true };

  }
  
  render() {
    const { list } = this.props
    return (
      <div >
        <Blog list={list}/>
      </div>
    );
  }
}
