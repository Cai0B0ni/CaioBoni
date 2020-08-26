import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = { show: false, active: true };

  showMenu = (x) => {
    this.setState({ show: !this.state.show });
    this.setState({ active: !this.state.active });

  };
  
  render() {
    const showHideClassName = this.state.show ? "menu open" : "menu";
    return (
      <header className="nav">
        {/* <a href="https://fontmeme.com/cursive-fonts/"><img src="https://fontmeme.com/permalink/200812/4fb1074ce666fbe9f33ce114f51fd1c5.png" alt="cursive-fonts" border="0"/></a> */}
        {/* <div className="burger-menu" onClick={()=>this.showMenu(this)}>
          <div className={this.state.active ? 'bar1': 'change1'} ></div>
          <div className={this.state.active ? 'bar2': 'change2'} ></div>
          <div className={this.state.active ? 'bar3': 'change3'} ></div>
        </div> */}
        <div className={showHideClassName}>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#Projects" onClick={this.showMenu}>
                Log-In
              </a>
            </li>
            <li className="menu__item">
              <a href="#Hobbies" onClick={this.showMenu}>
                Sign-Up
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
