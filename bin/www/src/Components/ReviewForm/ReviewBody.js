import React from 'react'
import { Form } from 'react-bootstrap'

const styles = {
    textarea: {
        'height': '100px',
        'resize': 'none'
    },
};

const feedbackPlaceHolder = 'Feedback goes here';
const namePlaceHolder = 'Name goes here';

const ReviewBody = ({feedback, name, enterReview, enterName}) => {
    return (
        <Form.Group controlId="formControlsTextarea">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder={feedbackPlaceHolder} style={styles.textarea}
                          value={feedback} onChange={evt => enterReview(evt.target.value)}/>
            <Form.Control type="text" size="sm" placeholder={namePlaceHolder} style={styles.textarea} value={name}
                          onChange={evt => enterName(evt.target.value)} required/>
        </Form.Group>
    );
};

export default ReviewBody