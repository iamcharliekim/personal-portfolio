import React from 'react';
import styles from './Home.module.css';
import Context from '../../Context/Context';

export default class Home extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles['Home']}>
        <div className={styles['hero']}>
          <header>
            <div className={styles['profile-img-wrapper']}>{/* <img src="/"> */}</div>
          </header>

          <div className={styles['hero-text']}>
            <h1>Charlie Kim</h1>

            <h2>Web Developer</h2>

            <h3>I am currently based in the Washington D.C. area.</h3>
            <h4>I am a lover of dogs, music and all things code!</h4>

            <div className='cta-btns'>
              <button className='cta-projects'>Projects</button>
              <button className='cta-contact'>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
