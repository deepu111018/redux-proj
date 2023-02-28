import React from 'react';
import useStyles from './styles';

import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const classes = useStyles();

  const products = useSelector((state) => state.allproducts.products);

  //const { id, category, image } = products;

  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <Link to={`/product/${product.id}`}>
              <CardActionArea>
                <CardActions>
                  <CardMedia
                    component="img"
                    alt="title"
                    height="280"
                    image={product.image}
                  />{' '}
                </CardActions>
              </CardActionArea>
              <CardContent overflow="hidden">
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>

                <Typography variant="body1" color="textPrimary" component="p">
                  ₹{product.price}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {product.category}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductComponent;
