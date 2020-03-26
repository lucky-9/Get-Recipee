import React, { Component } from "react";
import Recipe from "./recipe";
import { Link } from "react-router-dom";
import AppBar from "./AppBar";
import MDSpinner from "react-md-spinner";

const api_key = "a6b1109d46f443a9a5a27596d3009f95";
const imgFormat = "https://spoonacular.com/recipeImages/";
const sizeOfLoader = 150;
const loaderColor = "#ff7315";
class RecipeList extends Component {
  state = { recipies: [], noData: null };

  async componentDidMount() {
     console.log("recipeList check", this.props);
     console.log("the required recipe we get in params is ", this.props.match.params.name);
    try {
      const recipeName = this.props.match.params.name;
      console.log("fetch called", recipeName);
      const api_call = await fetch( 
        `http://localhost:3003/api/recipes?cuisine=${recipeName}`
      );
      const data = await api_call.json();
      console.log(data);
      console.log("the first title is "+data.title);
      this.setState({ recipies: data.results });
    } catch (err) {
      this.setState({ noData: true });
    }
  }
  handleView = async (recipeName, id) => {
    //console.log("View Button is Clicked", recipeName+ "This is in HomePage the id is ",id);

    this.props.history.push({
      // eslint-disable-next-line no-useless-concat
      pathname: "/desc" + "/" + recipeName + "/" + id
    });
  };
  render() {
    if (this.state.noData === true) {
      return (
        <div className="err-message">
          Sorry, There is No data for Your Search.
          <br />
          please try, another Recipe Search
        </div>
      );
    }
    if(!this.state.recipies.length){
      return(<div style={{textAlign:"center", marginTop:"30vh"}}>
        <MDSpinner size={sizeOfLoader} singleColor={loaderColor}/>
      </div>) 
    }
    return (
      
      <>
        
        <h1 className="recipe-list-heading">
          Recipe List for {this.props.match.params.name}
        </h1>
        <div className="d-flex flex-row justify-content-center flex-wrap recipe-list">
          {this.state.recipies.map(reci => (
            <Recipe
              recipeName={reci.title}
              image={imgFormat + reci.image}
              key={reci.id}
              id={reci.id}
              onRLClick={this.handleView}
            />
          ))}
        </div>
        <Link
          to="/"
          className="btn btn-dark back-btn"
        >
          Back
        </Link>
      </>
    );
  }
}

export default RecipeList;
