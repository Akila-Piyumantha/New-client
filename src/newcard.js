import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'; // Ensure your custom CSS file is imported
import './newcardstyle.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
function Newcard() {
  return (
    <div className="cards-container">
        
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
  <ParallaxProvider>
      <Parallax speed={-10}>
    <div className="card-container3">
    
      <div className="card-overlay3"></div>
      <Card className="custom-card3">
      
        <Card.Img variant="top" src="B.jpg" className="custom-card-img2"  />
        
        <Card.Body className="custom-card-body3">
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

    <ParallaxProvider>
      <Parallax speed={10}>
    <div className="card-container3">
    
      <div className="card-overlay3"></div>
      <Card className="custom-card3">
      
        <Card.Img variant="top" src="C.jpg" className="custom-card-img2"  />
        
        <Card.Body className="custom-card-body3">
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

    <div className="card-container4">
    
    <div className="card-overlay4"></div>
    <Card className="custom-card4">
    
      <Card.Img variant="top" src="B.jpg" className="custom-card-img2"  />
      
      <Card.Body className="custom-card-body4">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='custom-button'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
  </div>
    
      
    </div>
  );
}

export default Newcard ;
