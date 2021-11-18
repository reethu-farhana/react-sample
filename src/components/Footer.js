import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
           <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Join the newsletter to receive details about the courses
                </p>
                <p className='footer-subscription-text'>
                You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'><i className="far fa-envelope"></i> info@freelearning.com</Link>
                        <Link to='/'><i className="fas fa-phone"></i> +91 9654751238</Link>
                        <Link to='/'><i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Services</h2>
                        <Link to='/'>Online Training</Link>
                        <Link to='/'>Offline Training</Link>
                        <Link to='/'>Weekend Training</Link>
                        <Link to='/'>Corporate Training</Link>
                        <Link to='/'>Job Placement Assistance</Link>
                        <Link to='/'>Hire Train and Deploy</Link>
                    </div>
                    <section className='social-media'>
                        <div className='social-media-wrap'>
                            <h2>Follow Us</h2>
                            <div className='social-icons'>
                                <Link
                                className='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                                >
                                <i className='fab fa-facebook-f' />
                                </Link>
                                <Link
                                className='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                                >
                                <i className='fab fa-instagram' />
                                </Link>
                                <Link
                                className='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                                >
                                <i className='fab fa-youtube' />
                                </Link>
                                <Link
                                className='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                                >
                                <i className='fab fa-twitter' />
                                </Link>
                                <Link
                                className='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                                >
                                <i className='fab fa-linkedin' />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Footer
