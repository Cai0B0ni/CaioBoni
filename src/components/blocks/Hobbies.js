import React, { Component } from "react";

import Hobbie from ".././elements/Hobbie";

export default class Hobbies extends Component {
  
  render() {
    let hobbies = this.props.hobbies;
    return (
      <div id="Hobbies" className="content__size block block--complementary">
        <h3 className="block__heading">Hobbies/Awards</h3>
        <div className="hobbies">
          {hobbies.map(hobbie => <Hobbie hobbie={hobbie} />)}
        </div>
      </div>
    );
  }
}
