import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
  render() {
    let navLinks;

    navLinks = [
      <Link to='/' key='0' className={styles['nav-link']}>
        Home
      </Link>,
      <Link to='/about' key='3' className={styles['nav-link']}>
        About
      </Link>,
      <Link to='/projects' key='4' className={styles['nav-link']}>
        Projects
      </Link>,
      <Link to='/contact' key='' className={styles['nav-link']}>
        Contact
      </Link>,
    ];

    return (
      <nav className={styles['navbar']}>
        <div className={styles['inner-nav']}>
          <Link to='/' className={styles['logo']} onClick={this.props.closeNav}>
            <div className={styles['logo-wrapper']}>
              <span>CK</span>
            </div>
          </Link>

          <div className={styles['nav-links-wrapper']}>{navLinks.map((link) => link)}</div>

          <div className={styles['hamburger']} onClick={this.props.onOpenNav}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
