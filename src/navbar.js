import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <>
      <Navbar className='navc' >
        
       
        <Container>
          <Navbar.Brand href="#home" >
          <div data-bs-theme="dark" style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'inline-block', marginRight: '10px' }}>
            <img 
              alt=""
              src="a.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{ objectFit: 'cover' }}
            />{' '}
            </div>
            <span className="nav-link-custom" style={{  fontSize: '20px'}}>Airdynamic Solutions</span>
          </Navbar.Brand>
        </Container>
      
        
        <Container >
          <Nav className="ms-auto">
            <Nav.Link href ="#home"className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link-custom">About us</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link-custom">Products</Nav.Link>
            <Nav.Link href="#pricing2" className="nav-link-custom">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      

      
    </>
  );
}

export default BasicExample;