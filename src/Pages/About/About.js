import React from 'react';
import styles from './About.module.css';
import Context from '../../Context/Context';

export default class About extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles['About']}>
        <div className={styles['bio']}>
          <header>
            <h1>About</h1>
          </header>

          <h2>I am an aspiring Full Stack Web Developer currently based in the Washington D.C. area.</h2>

          <h3>I specialize in designing and building interactive user interfaces that are conducive to a stimulating and engaging user experience.</h3>

          <h4>I love the challenge of solving complex problems with a team and always striving to learn from my teammates. </h4>

          <h5>When I’m not coding, you can find me playing guitar, composing and producing music, hiking, in a downward dog, or just catching up with friends over a cup of coffee!</h5>
        </div>
      </div>
    );
  }
}
