import React, { Component } from 'react';
import RecipeList from './recipeList';
import SearchBar from './searchBar';
import queryString from 'querystring';
import ControlledCarousel from './gallery';
import { findByLabelText } from '@testing-library/react';


const api_key = 'a6b1109d46f443a9a5a27596d3009f95';
class HomePage extends Component {
state = {steps:[]};

getRecipe =async (e) =>{
  const searchName = e.target.elements.searchName.value;
  console.log("the searched name is "+searchName);
  e.preventDefault();
  
    this.props.history.push({
        // eslint-disable-next-line no-useless-concat
        pathname:'/recipeList' + '/' + searchName,
        
    });

}

    render() { 
        return ( 
        <div>
        
        {/* <RecipeList list={this.state.recipies} onClick={this.handleView}/> */}
        <SearchBar getRecipe={this.getRecipe}/>
        <ControlledCarousel />
        </div> );
    }
}
 
export default HomePage;