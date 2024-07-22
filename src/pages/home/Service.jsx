import { Container, Row, Col, Card } from 'react-bootstrap'; // Import required components from react-bootstrap
import './service.css'; // Import your CSS file for styling

const Service = () => {
  return (
    <div className='serviceContainer'>
      <Container>
        <h1 className='h1'>Our Services</h1>
        <Row>
          <Col md={4}>
            <Card className='serviceCard'>
              <Card.Body>
                <Card.Title>Service 1</Card.Title>
                <Card.Text>
                  Description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='serviceCard'>
              <Card.Body>
                <Card.Title>Service 2</Card.Title>
                <Card.Text>
                  Description of Service 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='serviceCard'>
              <Card.Body>
                <Card.Title>Service 3</Card.Title>
                <Card.Text>
                  Description of Service 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
