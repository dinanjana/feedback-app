import React from 'react'
import {ListGroupItem,} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({feedBack, stars, name, id, select, deleteReview, selected}) => {
    return (
        <ListGroupItem onClick={() => select(id)}>
            <p>{name}</p> says
            <p>{feedBack}</p>
            <StarRatingComponent
                name="star-rating"
                value={stars}
                editing={false}
            />
            <Button disabled={selected !== id} onClick={() => deleteReview(id)}>Delete</Button>
        </ListGroupItem>
    )
};

export default Review