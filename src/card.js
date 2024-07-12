import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'; 
function Cardh() {
  return (
    <div className="card-container">
      <div className="card-overlay"></div>
      <Card className="transparent-card custom-card-size">
        <Card.Header className="transparent-card-header">Featured</Card.Header>
        <Card.Body>
          <Card.Title className="transparent-card-title">YOUR PARTNER IN ULTIMATE AIR CONDITIONING SOLUTIONS</Card.Title>
          <img src="card1.jpg" alt="Descriptive Alt Text" className="card-image" />
          <Card.Text className="transparent-card-text">
          With a foundation built on "Innovation and Excellence," AIRDYNA propels the air conditioning industry forward, providing cutting-edge solutions that cater to both residential and commercial needs. Our commitment to delivering superior quality and unparalleled service energizes key sectors of the economy, ensuring optimal climate control in diverse environments. AIRDYNA has established a robust presence in the market, successfully fostering partnerships with leading global brands to bring advanced air conditioning technologies to our valued clients.
          </Card.Text>
          <Button className="custom-button">Who are we</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardh;
