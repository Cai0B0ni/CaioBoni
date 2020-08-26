import React, { Component } from "react";

export default class Tags extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className="tags">
        {this.props.tags.map(tag => (
          <span className="tags__item">{tag.name}</span>
        ))}
      </div>
    );
  }
}
