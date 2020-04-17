import React from 'react';
import styles from './Contact.module.css';
import Context from '../../Context/Context';

export default class Contact extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles['Contact']}>
        <h1>Contact</h1>
      </div>
    );
  }
}
