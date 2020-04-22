import React from 'react';
import styles from './ToastAlert.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Context from '../../Context/Context';

export default class ToastAlert extends React.Component {
  static contextType = Context;

  clearAlert = () => {
    this.context.hideToast();
  };

  render() {
    return (
      <div className={styles['ToastAlert']}>
        <div className={this.props.status === 'success' ? styles['ToastAlertSuccess'] : styles['ToastAlertError']}>
          <div className={styles['toast-inner-wrapper']}>
            {this.props.status === 'success' ? (
              <FontAwesomeIcon icon={faCheckCircle} className={styles['status-icon']} />
            ) : (
              <FontAwesomeIcon icon={faExclamationCircle} className={styles['status-icon']} />
            )}

            <div className={styles['toast-msg']}>
              {this.props.status === 'success' ? <h3>Success!</h3> : <h3>Error!</h3>}

              <div className={styles['status-msg']}>{this.props.statusMsg}</div>
              <FontAwesomeIcon icon={faTimes} className={styles['exit-icon']} onClick={this.clearAlert} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
