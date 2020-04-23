import React from 'react';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles['Sidebar']}>
        <a href='mailto:cwkim3@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} className={styles['icon']} />
        </a>

        <a href='https://github.com/iamcharliekim' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} className={styles['icon']} />
        </a>

        <a href='https://www.linkedin.com/in/charleswkim/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className={styles['icon']} />
        </a>
      </div>
    );
  }
}
