import React, { Component } from 'react';
//import { BrowserHistory } from 'react-router/lib/BrowserHistory';
import MDSpinner from "react-md-spinner";

const sizeOfLoader = 150;
const loaderColor = "#ff7315";

const api_key = 'a6b1109d46f443a9a5a27596d3009f95';
class Decription extends Component {
    constructor(props){
    super(props)
    this.state = { steps:[],
         currentRecipe:'',
            ingredients:[], noData:null}
    this.handleBack = this.handleBack.bind(this);
    }


    async componentDidMount(){
    try{

        const recipe_call = await fetch(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/analyzedInstructions?apiKey=${api_key}&stepBreakdown=true`)
        const recipeInstructions = await recipe_call.json();
        console.log("The entire recipe Details ", recipeInstructions);
        console.log("the recipe instructions is", recipeInstructions[0].steps);
        this.setState({steps:recipeInstructions[0].steps})
        this.setState({currentRecipe:this.props.match.params.recipeName})
        const ingredients_call = await fetch(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/ingredientWidget.json?apiKey=${api_key}`);
        const ingredients_data = await ingredients_call.json();
        console.log(ingredients_data.ingredients);
        this.setState({ingredients:ingredients_data.ingredients})
        }
    catch(err)
        {
            this.setState({noData:true});
        }
    }
    handleBack(){
        this.props.history.goBack();
    }
    render() { 
        const {steps, ingredients} = this.state;
        //console.log("The received state in the description component is ",this.props.match.params.recipeName);
        if(this.state.noData === true){
            return(
                <div className="err-message">Sorry, There is No data for {this.props.match.params.recipeName}
                    <br/>please try, another Recipe 
                </div>
            )
        }
        if(!this.state.steps.length && !this.state.ingredients.length){
            return(<div style={{textAlign:"center", marginTop:"30vh"}}>
              <MDSpinner size={sizeOfLoader} singleColor={loaderColor}/>
            </div>) 
          }
        return (<>
        
        
        <div className="d-flex flex-row justify-content-between"> 
            <div className="w-40 ingredients">
            <h1 className="ingredients-heading">Ingredients</h1>
            {ingredients.map(ingredient => <ul key={ingredient.name}> <li className="ingredients-list-style">{ingredient.name}</li></ul>)}
            </div>
                <div className="instructions w-60">
                <p className="instructions-heading">Instructions for Cooking {this.props.match.params.recipeName}</p>
                    {steps.map(OneStep => <ul key={OneStep.step}><li>{OneStep.step}</li> </ul>)}
                </div>
        </div>
        <button className="btn btn-dark back-btn" onClick={this.handleBack}>Back</button>
        </>);
    }
}

 
export default Decription;