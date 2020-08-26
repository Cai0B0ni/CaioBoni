import React, { Component } from "react";
import Parser from "html-react-parser";
import Grid from '@material-ui/core/Grid'

const Modal = ({ handleClose, show, title, description }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div id={title} className={showHideClassName} onClick={handleClose}>
      <div className="modal__content">
        <button className="modal__close" onClick={handleClose}>
          close
        </button>
        <h3 className="modal__heading">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default class Skill extends Component {
  constructor(props) {
    super(props);
  }
  state = { show: false };

  showModal = () => {
    document.body.style.overflowY = "hidden";
    this.setState({ show: true });
  };

  hideModal = () => {
    document.body.style.overflowY = "auto";
    this.setState({ show: false });
  };

  render() {
    let job = this.props.list;
    return (
      <div className="experience__item">
        <span className="experience__date">{job.date}</span>
        <div className="experience__card">
          <figure style={{ margin: '1rem', marginLeft: '0rem' }}>
            <img className="experience__img" src={job.img} alt={job.name} />
          </figure>
          <div className="experience__content">
            {job.company && (<h3 style={{ marginBottom: ".5rem", marginTop: '-1rem' }} className="experience__heading">{job.company}</h3>)}
            <span className="experience__time">{job.time}</span>
            <h4 className="experience__heading">{job.position}</h4>
            <Grid container>
              <Grid item md={9} xs={12}>
                <p className="experience__text">
                  {job.description.length > 400

                    ? <div id='jobs' dangerouslySetInnerHTML={{ __html: job.description.substring(0, 400) + "..."}} style={{fontSize:'20px', marginLeft:'2rem'}}/>

                    : <div dangerouslySetInnerHTML={{ __html: job.description}} style={{fontSize:'20px', marginLeft:'2rem'}}/>
                  }
                </p>
              </Grid>
              <Grid item md={3} xs={12}>
                {job.description.length > 150 ? (
                  <a className="experience__more" onClick={this.showModal}>
                    +
                  </a>
                ) : (
                    ""
                  )}
              </Grid>
            </Grid>
          </div>
        </div>
        <Modal
          show={this.state.show}
          title={job.position}
          description={Parser(job.description)}
          handleClose={this.hideModal}
        />
      </div>
    );
  }
}
