import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text' >Take a coffee & chat with me</h2>

      <div className='app__footer-cards' >
        <div>
          <img src= {images.email} alt='email' />
          <a href='mailto:tedsaasfaha@gmail.com' className='p-text' >tedsaasfaha@gmail.com</a>
        </div>
        <div>
          <img src= {images.mobile} alt='mobile' />
          <a href='tel:+251 9 60038351' className='p-text' >+251960038351</a>
        </div>
      </div>
      {!isFormSubmitted ? (
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='username' value={username} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button className='p-text' type='button' onClick={handleSubmit} >{!loading ? 'Send Message' : 'Sending...'}</button>
      </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
}

export default Footer;