import React from 'react'
import { Form } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const styles = {
    label: {
        display: 'block'
    }
};

/*
    react-star-rating-component
    https://github.com/voronianski/react-star-rating-component
*/

const ReviewStarRating = ({ rating, enterRating }) => {

    const onStarClick = (nextValue, prevValue) => {
        enterRating(nextValue);
        console.log('onStarClick', nextValue, prevValue)
    };

    return (
      <Form.Group>
        <Form.Label style={styles.label}>
          Rating
        </Form.Label>
        <StarRatingComponent
          name="star-rating"
          value={rating}
          onStarClick={onStarClick}
        />
      </Form.Group>
    );
};

export default ReviewStarRating