import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const CategoryDisplay = ({ category }) => {
  let description = category.description;
  
  if (description.length > 100) {
    const descriptionCutIndex = category.description.indexOf(' ', 120) + 1;
    description = category.description.substring(0, descriptionCutIndex) + "...";
  };
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={"/creator/" + category.id} style={{textDecoration: "none"}}>
        <CardMedia className={classes.media} image={category.assets[0].url} title={category.name}/>
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom style={{color: "white"}}>
                {category.name}
              </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" style={{color: "#999999"/*, height: "8vh", overflow: "hidden"*/}}/>
          </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryDisplay;