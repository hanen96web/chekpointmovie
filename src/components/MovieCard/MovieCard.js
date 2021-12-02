import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Rating, RatingView } from 'react-simple-star-rating';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width:"22.5%",marginLeft:"1.2em"}}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <RatingView ratingValue={movie.rating} />
        </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
 
  );
};

export default MovieCard;
