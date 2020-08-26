import * as React from "react";
import { render } from "react-dom";
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bold: {
    fontWeight: 700,
    listStyle: 'none'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.95),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: "5px 0 0px 0",
    border: 'solid 1px white',
    width: '50%',
    
  },
  inputRoot: {
    color: 'white',
    fontWeight:700
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `10px`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '12px'
    
  },
  icons:{
    background:'white !important',
    color:'white',
    padding:'5px',
    marginLeft:'.5rem'
  }
}))

function Menu() {

  const classes = useStyles();

  return (
    <footer className="footer" role="contentinfo">

      <div style={{ width: '100%', background: 'black', color: 'white', opacity: 0.6 }}>
        <Grid container>
          <Grid item xs={4} style={{ padding: '1.5rem' }}>
            <div className={classes.bold}>Lets Chat</div>
            <div style={{ fontWeight: 300 }}></div>
            <div className={classes.search}>
              <InputBase
                style={{width:'100%'}}
                placeholder="Please Enter A Valid Email Address"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton className={classes.icon} href='https://www.linkedin.com/in/caio-boni/'>
              <LinkedInIcon style={{ marginLeft: "0rem", color: 'white' }} />
            </IconButton>
            <IconButton  href='https://github.com/Cai0B0ni'>
              <GitHubIcon style={{ color: 'white' }} />
            </IconButton>
            <IconButton className={classes.icon} href='https://www.facebook.com/clboni12/'>
              <FacebookIcon style={{ color:'white' }} />
            </IconButton>
            <IconButton className={classes.icon} href="mailto:caioboni8@gmail.com">
              <EmailIcon style={{ color:'white' }} />
            </IconButton>
            
            {/* <div> caioboni8@gmail.com</div> */}
            <div style={{ marginLeft: '0rem' }}> (425)-268-9819</div>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={4}>
                <ul>
                  <li className={classes.bold}>Links</li>
                  <li>github.com/Cai0B0ni</li>
                  <li>linkedin.com/in/caio-boni/</li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul >
                  <li className={classes.bold}>Projects</li>
                  <li>Snake </li>
                  <li>GUI Calulator</li>
                  <li>Twitter Api</li>
                  <li>Dna Sequencer</li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul>
                  <li className={classes.bold}>Recent Posts</li>
                  <li>https://mystery.knightlab.com/</li>
                  <li>https://leetcode.com/</li>
                  <li>https://www.interviewbit.com/sql-interview-questions/</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ textDecoration: 'underline', paddingBottom: '.3rem', textAlign: 'center' }}>Designed and Built by <i>Caio Boni</i></div>
      </div>
    </footer>
  )
}

export default Menu


