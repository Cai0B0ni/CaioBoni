import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from "../pages/blog/card"
import { Typography } from '@material-ui/core';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, active: true };

  }

  render() {
    let blogs = this.props.list;

    return (
      <div >
        <Paper style={{background:'transparent', padding:'0'}} className="content__size block" >
          <Grid container spacing={2} alignItems="center" justify="center">
            {blogs.map((blog, idx) => (
              <Grid item xs={12}>
                <Card blog={blog}/>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    );
  }
}
