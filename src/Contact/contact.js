import React from 'react';
import './Contact.css';
import '../navbar2styles.css';

const Contact = () => {
    return (
       <div>
        <section className="hero-banner">
      <h1>AIRDYNAMIC SOLUTIONS PVT LTD</h1>
      <h3>Contact us Today</h3>
    </section>
      
       <div className="contact-section" id="contact">

            <h2 className="half-big-text has-border">Contact US</h2>
            <p className="section-description" style={{color:"#050A44"}}>Get in touch with us today to discover how our innovative solutions can transform your environment and drive success</p>
            <div className="orbitron black-orb">\\\///</div>
            <div className="contact-form-container">
                <div className="contact-half contact-left">
                    <h2 className="small-header">Don't hesitate to contact us.</h2>
                    
                    <div className="quad-container">
                        <div className="contact-quad">Klapaluwawa<br />Rajagiriya<br />Colombo</div>
                        <div className="contact-quad">+942255887744556854<br />+947788556632145</div>
                        <div className="contact-quad">airdyna@mailme.com<br /></div>
                        
                    </div>
                    <div className="social-button facebook-button"></div>
                    <div className="social-button twitter-button"></div>
                    <div className="social-button instagram-button"></div>
                </div>
                <div className="contact-half contact-right">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" className="contact-input" required style={{color:"#050A44"}} />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" className="contact-input" style={{color:"#050A44"}} required />
                    
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="contact-input" style={{color:"#050A44"}} />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" cols="40" rows="5" placeholder="Enter Your Message" className="contact-input big-input" style={{color:"#050A44"}} required></textarea>
                    
                    <button type="submit" className="small-header submit-button" style={{color:"#050A44"}}>Submit</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;

