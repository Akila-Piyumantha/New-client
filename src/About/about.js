import React, { useEffect } from 'react';
import Rellax from 'rellax';
import './aboutstyles.css'; 
import './aboutcstyles.css';
import './aboutbstyles.css';
import Carda from'./aboutc';
import Banner from'./banner';
import Gallery2 from '../services/gallery2';
import SplitView from './vision';

function About() {
  useEffect(() => {
    new Rellax('.rellax');
  }, []);

 /* return (
    <div className='body3'>
      <section className="section section-top">
        <div className="content rellax" data-rellax-speed="5">
          <h1>WHO ARE WE</h1>
        </div>
      </section>

      <section className="section section-stream">
        <img
          className="play rellax"
          src="https://i.ibb.co/TvdbMhQ/play-button.png"
          alt=""
          data-rellax-speed="-1"
          data-rellax-xs-speed="-5"
        />
        <div className="content rellax" data-rellax-speed="10">
          <div>
            <h2 className="secondary-text">Stream Everything</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
            </p>
          </div>
          <div>
            <h2 className="secondary-text">Short is the New Long</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-grid">
        <div className="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
          <i className="fas fa-video fa-3x secondary-text"></i>
          <h2>Watch<span className="secondary-text dot">.</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
          </p>
        </div>
        <div className="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
          <i className="fas fa-users fa-3x secondary-text"></i>
          <h2>Share<span className="secondary-text dot">.</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
          </p>
        </div>
        <div className="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
          <i className="fas fa-book fa-3x secondary-text"></i>
          <h2>Learn<span className="secondary-text dot">.</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
          </p>
        </div>
      </section>

      
    </div>
  );*/
  return(
    <div id ="about" className='bodyabout'>
      
      <Banner/>

      <SplitView/>
      <div style={{ paddingTop: '30px' }} id="aboutSection">
      <div className="blog-slidera" >
        <div className="blog-slider__wrp">
          <div className="blog-slider__item">
            
            <Carda dataImage={`${process.env.PUBLIC_URL}/tree3.jpg`}>
          <h1>THE ORIGIN</h1>
          <p>OF THE AIRDYANA</p>
        </Carda>
            
            <div className="blog-slider__contenta">
              <span className="custom-slider-code ">Our Story Since 2001</span>
              <div className="blog-slider__titlea">A Legacy of Excellence </div>
              <div className="blog-slider__texta">
              In 2001, AIR Dynamic Solutions embarked on a journey to revolutionize the world of dynamic systems. From humble beginnings, our founders combined their expertise and passion for innovation to create a company dedicated to excellence and professionalism. Over the years, we have grown and evolved, always staying true to our commitment to delivering top-notch solutions for our clients.<br/><br/>
              As we look to the future, AIR Dynamic Solutions remains at the forefront of industry advancements. Our team of dedicated professionals continues to push boundaries, ensuring that we provide cutting-edge solutions tailored to meet the unique needs of our clients. We believe in fostering strong relationships, embracing new challenges, and maintaining the highest standards of quality in everything we do.
              </div>
              
            </div>
        
          </div>
        </div>
    
    </div>
    </div>

    <div style={{ paddingTop: '30px' }}>
    <div className="custom-slider">
      <div className="custom-slider-wrapper">
        <div className="custom-slider-item">
         
        <Carda dataImage={`${process.env.PUBLIC_URL}/kid.jpg`}>
          <h1>THE INNOVATIVE</h1>
          <p> AIRDYANA</p>
        </Carda>
          <div className="custom-slider-content">
            <span className="custom-slider-code">Our Commitment to Cutting-Edge Technology</span>
            <div className="custom-slider-title">Driving Innovation</div>
            <div className="custom-slider-texta">
            At AIR Dynamic Solutions, our commitment to staying ahead of the curve is unwavering. Since our inception in 2001, we have been dedicated to integrating the latest advancements in technology into our solutions. By continuously investing in research and development, we ensure that our clients benefit from the most innovative and efficient systems available. Our team of experts works tirelessly to harness the power of new technologies, providing customized solutions that drive success and set new industry standards. Innovation is at the heart of what we do, propelling us—and our clients—into a future of endless possibilities.
           </div>
           
          </div>
        </div>
      </div>

    </div>
    </div>


    <div style={{ paddingTop: '60px' }}>
      <div className="blog-sliderB" >
        <div className="blog-slider__wrp">
          <div className="blog-slider__item">
            
            <Carda dataImage={`${process.env.PUBLIC_URL}/greenac.jpg`}>
          <h1>SUSTAINABLE</h1>
          <p>AIRDYANA</p>
        </Carda>
            
            <div className="blog-slider__contenta">
              <span className="blog-slider__code">Our Commitment to a Greener Future</span>
              <div className="blog-slider__titlea">SUSTAINABLE AIRDYANA</div>
              <div className="blog-slider__texta">
              At AIRDynamic Solutions, sustainability is at the core of our operations. We are committed to reducing our environmental footprint by integrating energy-efficient HVAC systems that minimize energy consumption and greenhouse gas emissions. Through innovative technologies and responsible practices, we strive to contribute positively to the environment while providing our clients with cost-effective and eco-friendly solutions.<br/><br/>"Sustainable AIRDYANA" is more than just a program—it's a promise to future generations. We are proud to lead the way in sustainable innovation, creating solutions that not only meet today's needs but also preserve the environment for tomorrow. Together, we can build a greener, more sustainable future.
              </div>
              
            </div>
        
          </div>
        </div>

    </div>
    </div>
    <div style={{marginBottom:"0px"}}>
    <Gallery2/>
    </div>
    </div>

  );
}

export default About;
