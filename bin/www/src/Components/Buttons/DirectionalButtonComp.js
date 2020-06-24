/**
 * Created by dinanjanag on 8/6/19.
 */
import Button from '@material-ui/core/Button';
import { Col, Row } from 'react-bootstrap';
import React from 'react'

const ButtonComp = ({ page, total, move, backButtonDisabled }) => {
  return (
    <Row>
      <Col>
        <Button disabled={backButtonDisabled} onClick={() => move(false)}>Previous</Button>
        {page}/{total}
        <Button onClick={() => move(true)}>Next</Button>
      </Col>
    </Row>
  );
};

export default ButtonComp;