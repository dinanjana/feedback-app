import React from 'react'
import { Form } from 'react-bootstrap'

const styles = {
    textarea: {
        'height': '100px',
        'resize': 'none'
    },
};

const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const ReviewBody = ({ body, enterReview }) => {
    return (
      <Form.Group controlId="formControlsTextarea">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder={placeholderText} style={styles.textarea} value={body} onChange={(evt) => enterReview(evt.target.value)} />
      </Form.Group>
    );
};

export default ReviewBody