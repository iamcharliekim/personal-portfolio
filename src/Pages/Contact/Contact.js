import React from 'react';
import ToastAlert from '../../Components/ToastAlert/ToastAlert';
import Context from '../../Context/Context';
import styles from './Contact.module.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends React.Component {
  static contextType = Context;

  state = {
    name: '',
    email: '',
    message: '',
    success: null,
    error: null,
    status: null,
    statusMsg: null,
  };

  nameHandler = (e) => {
    this.setState({ name: e.target.value });
  };

  emailHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  messageHandler = (e) => {
    this.setState({ message: e.target.value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      success: null,
      error: null,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    fetch('http://localhost:8000/send', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          this.setState({
            success: true,
            status: 'success',
            statusMsg: 'Your message has been sent!',
          });

          setTimeout(() => this.resetForm(), 3000);
        } else if (response.status === 'fail') {
          this.setState({
            error: true,
            status: 'error',
            statusMsg: 'Your message was not sent!',
          });
        }
      })
      .catch((error) => {
        this.setState({ error, status: 'error', statusMsg: error.toString() });
      });
  };

  clearErrorMsg = () => {
    if (this.state.error) {
      this.setState({ error: null });
    }
  };

  render() {
    return (
      <div className={styles['Contact']}>
        {(this.state.success || this.state.error) && this.context.showToast ? <ToastAlert status={this.state.status} statusMsg={this.state.statusMsg} /> : null}

        <div className={styles['contact-icons']}>
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

        <form id={styles['contact-form']} onSubmit={this.onSubmit} method='POST'>
          <input type='text' onChange={this.nameHandler} value={this.state.name} placeholder='Full Name' onFocus={this.clearErrorMsg} />
          <input type='email' onChange={this.emailHandler} value={this.state.email} placeholder='Email' onFocus={this.clearErrorMsg} />

          <textarea onChange={this.messageHandler} rows='8' cols='70' value={this.state.message} placeholder='Your Message' onFocus={this.clearErrorMsg} />

          <button className={styles['send-btn']}>SEND</button>
        </form>
      </div>
    );
  }
}
