import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ReviewStarRating from './ReviewStarRating'
import ReviewBody from './ReviewBody'

const styles = {
    wrapper: {
        paddingBottom:'20px',
        borderBottom:'1px solid grey'
    }
};

const ReviewForm = (props) => {
  const { body, rating, saveAndReload, enterRating, enterReview } = props;
    return (
      <div style={styles.wrapper}>
        <Row>
          <Col md={12}>
            <ReviewBody
                body={body}
                enterReview={enterReview}
            />
            <ReviewStarRating
                rating={rating}
                enterRating={enterRating}
            />
            <Button bsStyle="primary" bsSize="small" onClick={() => saveAndReload(body, rating)}>Save review</Button>
          </Col>
        </Row>
      </div>
    );
};

export default ReviewForm