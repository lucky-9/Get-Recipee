import React,{Component} from 'react';
import ButtonAppBar from './components/AppBar'
import HomePage from './components/homePage';
import {Switch, Route} from 'react-router-dom';
import Description from './components/description';
import RecipeList from './components/recipeList';
//import Temp from './components/temp';
import Footer from './components/footer';
import SignIn from './components/signin';
import SignUp from './components/signup';



class App extends Component {
  
  render() { 
    return ( 
      <>
      
    <ButtonAppBar/>
    <Switch>
      <Route path="/recipeList/:name" component={RecipeList}/>
      <Route path="/desc/:recipeName/:id" component={Description}/>
      <Route path="/login" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/" component={HomePage}/>

    </Switch>
    {/* <Footer/> */}
    </>);
  }
}
 
export default App;