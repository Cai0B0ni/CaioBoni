import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '98%',
      margin:'auto',
      background:'transparent'



    },
  },
  text: {
    padding: '.5rem',
    margin:'auto',
    border: '1px solid rgb(255,255,255,0.3)',
  }

}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container style={{marginTop:'2rem'}}>
      <Grid item xs={7}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12}>
              <Paper style={{ padding: '.5rem', margin: '.5rem 3rem 0 3rem'  }}>
                <TextField
                  id="outlined-textarea"
                  label="Your Email"
                  placeholder='johndoe@gmail.com'
                  multiline
                  variant="outlined"
                  className={classes.text}

                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper style={{ padding: '.5rem', margin: '.5rem 3rem 0 3rem' }}>

                <TextField
                  id="outlined-textarea"
                  label="Subject"
                  placeholder="Greetings"
                  multiline
                  variant="outlined"
                  className={classes.text}

                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper style={{ padding: '.5rem', margin: '.5rem 3rem 0 3rem' }}>

                <TextField
                  id="outlined-multiline-static"
                  label="Content"
                  multiline
                  rows={4}
                  placeholder="Hi Caio,"
                  variant="outlined"
                  className={classes.text}

                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Button style={{background:'rgb(255,255,255,0.7)', marginLeft:'45%', marginTop:'.4rem'}}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={5}>
        <Paper style={{ color: 'white', background: 'transparent', width: '80%', height:'100%' }}>
          <Grid container>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={6}>
              <Typography component='h3' style={{ fontWeight: '700', marginBottom:'2rem' }}>
                Also Find Me Here
              </Typography >
            </Grid>
            <br/>
            <Grid item sm={4} xs={0}>
              <PinDropIcon />
            </Grid>
            <Grid item xs={6}>
              <Typography component='h3' style={{ fontWeight: '400', marginBottom:'2rem' }}>
                Seattle, WA
              </Typography>
            </Grid>
            <Grid item sm={4} xs={0}>
              <PhoneIcon />
            </Grid>
            <Grid item xs={6}>
              <Typography style={{ fontWeight: '400', marginBottom:'2rem' }}> 
                (425)-268-9819
              </Typography>
            </Grid>
          
            <Grid item sm={4}>
              <EmailIcon style={{ marginLeft: ".5rem" }} />
            </Grid>
            <Grid item xs={6}>
              <Typography component='h3' style={{ fontWeight: '700' }}>
                caioboni8@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <hr/>
          <LinkedInIcon style={{ marginLeft: "40%" }} />
          <GitHubIcon style={{ marginLeft: ".5rem" }} />
          <FacebookIcon style={{ marginLeft: ".5rem" }} />

        </Paper>

      </Grid>
    </Grid>

  );
}
