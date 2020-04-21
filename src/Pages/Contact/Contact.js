import React from 'react';
import styles from './Contact.module.css';
import Context from '../../Context/Context';

export default class Contact extends React.Component {
  static contextType = Context;

  state = {
    name: '',
    email: '',
    message: '',
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
    this.setState({ name: '', email: '', message: '' });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    fetch('http://localhost:8000/send', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          alert('Message Sent.');
          this.resetForm();
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  };

  render() {
    return (
      <div className={styles['Contact']}>
        <form id={styles['contact-form']} onSubmit={this.onSubmit} method='POST'>
          <input type='text' onChange={this.nameHandler} value={this.state.name} placeholder='Full Name' />
          <input type='email' onChange={this.emailHandler} value={this.state.email} placeholder='Email' />

          <textarea onChange={this.messageHandler} rows='8' cols='70' value={this.state.message} placeholder='Your Message' />

          <button className={styles['send-btn']}>SEND</button>
        </form>
      </div>
    );
  }
}
