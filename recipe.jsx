import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card:{
    width:345,
    minHeight:200,
    margin:10,
    padding:10
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Recipe(props) {
  const classes = useStyles();
  console.log(props.image)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          src={props.image}
          component="img"
          title="Recipe Images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.recipeName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click the View button to know more about the {props.recipeName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{
          console.log("the recipe where view button is clicked ",props.recipeName+"the id is", props.id)
          props.onRLClick(props.recipeName, props.id)}}>
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
}
