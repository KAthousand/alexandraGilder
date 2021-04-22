import React from 'react';
import "./About.css"
function About(props) {
  const {visible} = props
  return (
    <div className='about-container' id='about'>
      <div className='about-content'>
        <div className={visible ? 'about-title about-title-transition' : 'about-title'}>
          <h1>Alexandra</h1>
        </div>
        <div className='about-main'>
          <div className={visible ? 'about-image about-image-transition' : "about-image"}>
          </div>
          <div className='about-info'>
            <p>Alexandra is an intuitive practitioner with an aim to help clients experience alleviation of pain symptoms, discomfort and stress.</p><br/>
            <p>She believes in the body's natural processes, its ability to heal itself and help assist others in whatever form of therapies best suited for their needs</p><br/>
            <p>Nurturing, therapeutic and attentive with a focus on specific needs to build a customized session for everyone</p><br/>
            <p>Prices reflect the idea that clients can build a maintenance routine to manage stress and tension contact by phone to schedule.</p>
            </div>
        </div>
        <div className='about-contact'>
          <p className='contact-number'>(248) 613-8418</p>
          <p className='contact-email'>lexandraga@gmail.com</p>
        </div>
        <p className='house-call'> *House calls available upon request, add travel fees based on location. Contact for more information.</p>
        <div className='about-shape1'></div>
        <div className='about-shape2'></div>
        <div className='about-shape3'></div>
        <div className='about-shape4'></div>
        <div className='about-shape5'></div>
        <div className='about-plant1'></div>
        <div className='about-plant2'></div>
        <div className='about-plant3'></div>
      </div>
      <div className='top-button-container'>
        <a href="#title" className='back-to-top'>BACK TO TOP</a>
      </div>
    </div>

  );
}

export default About;