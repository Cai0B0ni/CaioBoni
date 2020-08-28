import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let projects = this.props.list;
    return (
      <div id="Projects" style={{marginTop:'2rem', textAlign:'center'}}>
        <div className="project__list" style={{}}>
          <Grid container alignItems="center" justify="center">
            {projects.map((project, idx) => (
              <Grid item xs={6}>
                <div className={"project__item"} style={idx % 2 == 1 ? {marginLeft: '2.5%'} : {}}>
                  <img
                    className="project__img"
                    src={project.imgSrc}
                    alt={project.name}
                  />
                <div className="project__content">
                  <h4 className="project__heading">{project.name}</h4>
                  <p className="project__text">{project.description}</p>
                  <a target="_blank" className="project__link" href={project.url}>
                    Code
                  </a>
                </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
