import React from 'react';
import styles from './Projects.module.css';
import Context from '../../Context/Context';

export default class Projects extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles['Projects']}>
        <h1>Projects</h1>
      </div>
    );
  }
}
