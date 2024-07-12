import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './element.css'; // Ensure you import your custom CSS file
import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
function Sidecard() {
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
    <div className="card-container2">
    
      <div className="card-overlay2"></div>
      <Card className="custom-card2">
      
        <Card.Img variant="top" src="B.jpg" className="custom-card-img2"  />
        
        <Card.Body className="custom-card-body2">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='custom-button'>Go somewhere</Button>
        </Card.Body>
      </Card>
      
    </div>
    </Parallax>
    
    </ParallaxProvider>
  );
}

export default Sidecard;
