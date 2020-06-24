import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { connect } from "react-redux";
import Review from './Review';

const styles = {
    wrapper: {
        marginTop: '20px'
    }
};

const ReviewsList = (props) => {
    const { reviewList, select, deleteReview, selected } = props;
  return (
    <div style={styles.wrapper}>
        <ListGroup>
            {/*<h5>Display the list of reviews here...</h5>*/}
            { reviewList.map(
              (review) => (
                <Review
                    feedBack={review.feedBack}
                    stars={review.stars}
                    id={review.id}
                    select={select}
                    deleteReview={deleteReview}
                    selected={selected}
                />))
            }
        </ListGroup>
    </div>
  );
};

export default ReviewsList;