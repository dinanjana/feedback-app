import React from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import ReviewStarRating from './ReviewStarRating'
import ReviewBody from './ReviewBody'

const styles = {
    wrapper: {
        paddingBottom: '20px',
        borderBottom: '1px solid grey'
    }
};

const ReviewForm = (props) => {
    const {feedback, name, stars, saveAndReload, enterRating, enterReview, enterName} = props;
    return (
        <div style={styles.wrapper}>
            <Row>
                <Col md={12}>
                    <ReviewBody
                        feedback={feedback}
                        enterReview={enterReview}
                        name={name}
                        enterName={enterName}
                    />
                    <ReviewStarRating
                        rating={stars}
                        enterRating={enterRating}
                    />
                    <Button variant="primary" type="submit" onClick={() => saveAndReload(feedback, stars, name)}>Save
                        review</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ReviewForm