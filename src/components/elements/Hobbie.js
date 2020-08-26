import React, { Component } from "react";

export default class Hobbie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hobbie = this.props.hobbie;
    return (
      <div className="hobbies__item">
        <figure className="hobbies__logo">
          <img width="50px" src={hobbie.imgSrc} />
        </figure>
        <div className="hobbies__content">
          <h3 className="hobbies__name">{hobbie.name}</h3>
          <p>{hobbie.description}</p>
        </div>
      </div>
    );
  }
}
