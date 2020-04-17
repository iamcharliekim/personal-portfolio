import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <span className={styles['copyright']}>© 2019 Charlie Kim</span>
        <ul className={styles['footer-links']}>
          <li>
            <a href='mailto:cwkim3@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} className={styles['icon']} />
            </a>
          </li>

          <li>
            <a href='https://github.com/iamcharliekim' target='_blank'>
              <FontAwesomeIcon icon={faGithub} className={styles['icon']} />
            </a>
          </li>

          <li>
            <a href='https://www.linkedin.com/in/charleswkim/' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className={styles['icon']} />
            </a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
  );
}
