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
    fontWeight: 900,
    fontSize: 18,
    height: 200,
  },
}));

export default function AnimeCard({ item }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} data-aos="flip-left">
      <CardMedia
        className={classes.media}
        image={item.image_url}
        title={item.type}
      />
      <CardContent>
        <Typography
          variant="h6"
          className={classes.text}
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="200"
        >
          {item.synopsis}
        </Typography>
      </CardContent>
    </Card>
  );
}

AnimeCard.prototype = {
  ...AnimeCard,
};
