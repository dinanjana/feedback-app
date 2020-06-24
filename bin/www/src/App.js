import React from 'react';
import ReviewsListView from './Views/ReviewsListView';
import ReviewFormView from './Views/ReviewFormView';
import ButtonsComp from './Views/ButtonsView';
import { Col, Row } from 'react-bootstrap';
import MessageView from "./Views/MessageView";

function styles () {
    return {
        marginTop:'20px'
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container" style={styles()}>
                <Row>
                  <Col md={4} mdOffset={4}>
                    <MessageView/>
                    <ReviewFormView />
                    <ReviewsListView />
                  </Col>
                </Row>
                <ButtonsComp/>
            </div>
        )
    }
}

export default App
