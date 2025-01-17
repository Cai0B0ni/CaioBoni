import React, { Component } from "react";
import {Grid} from '@material-ui/core';
import { Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Banner from "./layout/Banner";
import Resume from "./blocks/Resume";
import Projects from "./pages/projects/projects";
import Footer from "./layout/Footer";
import About from "./pages/about/about"
import Contacts from "./pages/contacts/contacts"
import Blog from "./pages/blog/blog"
import datas from "./data.json"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [{
        "name": "PostgreSQL",
        "slogan": "Database",
        "description": "3 years of experience using the best techniques to get a reusable and clean code.",
        "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        "tags": [
          {
            "name": "PostgreSQL" 
          },
          {
            "name":"MySQL"
          }
  
        ]
      },
      {
        "name": "Python",
        "slogan": "Backend ",
        "description": "Sometimes I don't think in perfection",
        "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        "tags": [
         
        ]
      },
      {
        "name": "JS",
        "slogan": "Never afraid to JS frameworks",
        "description": "Nothing to say. Or maybe... no, any",
        "imgSrc": "data:image/png;base64,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",
        "tags": [
          {
            "name": "React.js"
          },
          {
            "name": "Node.js"
          }
        ]
      }],
      skillsTags: [],
      jobs: [],
      studies: [],
      personalProjects: [],
      hobbies: [],
      blogs: [],
    };
  }

  componentWillMount() {
    console.log('mount1')
    console.log((datas))
    this.setState({
      skills: (datas)["skills"],
      skillsTags: (datas)["skillsTags"],
      jobs: (datas)["jobs"],
      studies: (datas)["studies"],
      personalProjects: (datas)["personalProjects"],
      hobbies: (datas)["hobbies"],
      blogs: (datas)["blog"],
    });
      
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        
        {/* <Header/> */}
        <Grid container >
          <Grid item xs={12}>
            <Banner />

          </Grid>
          <Grid item xs={12}>
            <Resume />
          </Grid>

          <Grid item xs={12} className="Content" >
            {/* <div className="Content__resume">
            </div> */}
            
            <div className="Content__blocks">
              <Switch>
                <Route exact path="/CaioPortfolio/projects" component={() => <Projects list={this.state.personalProjects} title="Personal projects"/>} />
                <Route exact path="/CaioPortfolio" component={() => 
                  <About 
                    hobbies={this.state.hobbies}
                    jobs={this.state.jobs}
                    skills={this.state.skills}
                    study={this.state.studies}
                    tags={this.state.skillsTags}
                    expClass=""
                    studyClass="study"
                    studyTitle="Studies"
                    jobTitle="Experience"

                  />} 
                />
                <Route exact path="/CaioPortfolio/forum" component={() => <Blog list={this.state.blogs} />} />
                <Route exact path="/CaioPortfolio/contact" component={() => <Contacts/>}  /> 
              </Switch>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}
