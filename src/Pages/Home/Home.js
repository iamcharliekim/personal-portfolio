import React from 'react';
import styles from './Home.module.css';
import Context from '../../Context/Context';

export default class Home extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles['Home']}>
        <header>
          <div className={styles['profile-img-wrapper']}>{/* <img src="/"> */}</div>
        </header>

        <div className={styles['hero-text']}>
          <h1>CHARLIE KIM</h1>

          <h2>Web Developer</h2>

          <h3>I am currently based in the Washington D.C. area.</h3>
          <h4>I am a lover of dogs, music and all things code!</h4>

          <div className={styles['cta-btns']}>
            <button className={styles['cta-projects']}>Projects</button>
            <button className={styles['cta-contact']}>Contact Me</button>
          </div>
        </div>
      </div>
    );
  }
}
