import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';





const useStyles = makeStyles(theme => ({

  bar:{
    fontFamily: 'Inconsolata',
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar=(props)=>{

  const classes = useStyles();
  const hadleLogin = (props) =>{
    props.history.push({
      pathname:'/login'
    })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} style={{background:'#3a3535', color:'#f4f4f4'}}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>Get Recipee</Link>
          </Typography>
          <Button onClick={() => hadleLogin(props)} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )


};

export default withRouter(ButtonAppBar);
