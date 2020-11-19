import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>

      <Form>
        <Row>
          <Col>
          <Form.Group controllId="formEmail">
            <Form.Label>E-Mail Address</Form.Label>
            <Form.Control type="email" placeholder="Example@gmail.com" />
            <Form.Text className="text-muted">
              Email adresiniz bize emanet, güvenin bize!
            </Form.Text>
          </Form.Group>
          </Col>
          <Col>
            <Form.Group controllId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>


      </Form>
      
      <Card className="mb-3" style={{color: '#000' }}>
        <Card.Img src="https://picsum.photos/200/100" />
        <Card.Body>
          <Card.Title>
            Card Example
          </Card.Title>
          <Card.Text>
            This is an example of react bootstrap cards
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card> 
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="secondary">This is a Button</Alert>

      <Button>Test Button</Button>
      </Container>
      </header>
    </div>
  );
}

export default App;
