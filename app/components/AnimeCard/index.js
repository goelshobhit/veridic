/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 450,
    objectFit: 'contain',
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 900,
    fontSize: 18,
  },
}));

export default function AnimeCard({ item }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image_url}
        title={item.type}
      />
      <CardContent>
        <Typography variant="h6" className={classes.text}>
          {item.synopsis}
        </Typography>
      </CardContent>
    </Card>
  );
}

AnimeCard.prototype = {
  ...AnimeCard,
};
