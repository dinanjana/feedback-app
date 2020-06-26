import React from 'react'
import { ListGroup, Spinner } from 'react-bootstrap';
import Review from './Review';

const styles = {
    wrapper: {
        marginTop: '20px'
    }
};

const ReviewsList = (props) => {
    const { reviewList, select } = props;
    return (
        <div style={styles.wrapper}>
            <ListGroup>
                {reviewList.length < 1 ? <Spinner animation="grow" /> : ''}
                {/*<h5>Display the list of reviews here...</h5>*/}
                {reviewList.map(
                    (review) => (
                        <Review
                            feedBack={review.feedBack}
                            stars={review.stars}
                            name={review.name}
                            id={review.id}
                            select={select}
                        />))
                }
            </ListGroup>
        </div>
    );
};

export default ReviewsList;