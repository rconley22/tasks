import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Welcome to my website</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Rylan Conley. Hello
                World.
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src="https://miro.medium.com/v2/resize:fit:447/1*ccL2R1a-iRprIW2OJwTYDQ.jpeg"
                alt="code"
            ></img>
            <ul>
                <li>cisc108</li>
                <li>cisc181</li>
                <li>cisc210</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
