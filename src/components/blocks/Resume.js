import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'

export default class Resume extends Component {
  state = { href: 'about' }
  changeHref = (ref) => {
    this.setState({ href: ref })
  }
  render() {
    console.log(this.state.href)
    return (
      <div className="content" >
        <div style={{ color: 'white', marginLeft: '5%', marginBottom: '3rem' }}>
          <div className="resume__item" >
            <h1 style={{ fontSize: '60px', marginBottom: '10px', fontWeight: 200 }}>CAIO BONI</h1>
            <Grid container>
              <Grid item md={4} xs={12}>
            <p className="resume__text" style={{ float: 'left', marginRight: "4rem" }}>
              <span className="resume__outstand">Full Stack Developer</span>
              <br />
              'We do not grow when things are easy, we grow
              when we face challenges.''
            </p>
            </Grid>
            <Grid item md={6} xs={12}>
            <ul style={{ marginTop: '2rem', listStyle: 'none' }}>
              <li onClick={() => this.changeHref('about')} className="menu__item" style={{ float: 'left', listStyle: 'none'}}>
                <a id='link' style={this.state.href == 'about' ? { borderBottom: 'solid 2px white', paddingBottom:'1px' } : {}}>
                  <Link to="/CaioPortfolio">
                    About
                  </Link>
                </a>
              </li>
              <li onClick={() => this.changeHref('proj')} className="menu__item" style={{ float: 'left', listStyle: 'none' }}>
                <a id='link' style={this.state.href == 'proj' ? { borderBottom: 'solid 2px white', paddingBottom:'1px' } : {}}>
                  <Link to="/CaioPortfolio/projects">
                    Projects
                  </Link>
                </a>
              </li>
              <li onClick={() => this.changeHref('blog')} className="menu__item" style={{ float: 'left', listStyle: 'none' }}>
                <a id='link' style={this.state.href == 'blog' ? { borderBottom: 'solid 2px white', paddingBottom:'1px' } : {}}>
                  <Link to="/CaioPortfolio/forum">
                    Blog
                  </Link>
                </a>
              </li>
              <li onClick={() => this.changeHref('con')} className="menu__item" style={{ float: 'left', listStyle: 'none' }}>
                <a id='link' style={this.state.href == 'con' ? { borderBottom: 'solid 2px white', paddingBottom:'1px' } : {}}>
                  <Link to="/CaioPortfolio/contact">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
            </Grid>
            </Grid>
            {/* <ul className="resume__list-info">
              <li className="resume__item-info">
                <em className="resume__icon resume__icon--phone" />
                <a className="resume__link" href="tel:4252689819" title="Phone">
                  (425)-268-9819
                </a>
              </li>
              <li className="resume__item-info">
                <em className="resume__icon resume__icon--email" />
                <a
                  className="resume__link"
                  href="mailto:cl.boni@hotmail.com"
                  title="Personal email"
                >
                  cl.boni@hotmail.com
                </a>
              </li>
            </ul> */}
          </div>

        </div>
      </div>
    );
  }
}
