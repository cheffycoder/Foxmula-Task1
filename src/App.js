import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Button from "./Button";
import DisplayCount from "./DisplayCount";

function App() {

  //const [count, setCount] = useState(0)

    //console.log(count)

  return (
    <Row style={{overflow: 'hidden'}}>
      <Col>
        <Button 
        //count={count} incrementCount={setCount}
        />
      </Col>
      <Col>
        <DisplayCount 
        //count={count}
        />
      </Col>
    </Row>
  );
}

export default App;
