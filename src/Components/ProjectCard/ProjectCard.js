import React from 'react';
import styles from './ProjectCard.module.css';

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className={styles['project-card']}>
        <div className={styles['project-img-wrapper']}>
          <img src={require(`../../../src/images/${this.props.img}`)} alt='project-screenshot' />
        </div>

        <div className={styles['project-info']}>
          <div className={styles['project-name']}>{this.props.name}</div>
          <div className={styles['project-txt']}>{this.props.info}</div>
        </div>

        <div className={styles['project-tech-wrapper']}>
          {this.props.tech.map((tech, i) => (
            <img src={require(`../../../src/images/${tech}.svg`)} key={i} alt={`${tech}-icon`} />
          ))}
        </div>

        <div className={styles['project-links']}>
          <a href='https://github.com/iamcharliekim' target='_blank' rel='noopener noreferrer'>
            Live Site
          </a>
          <a href='https://github.com/iamcharliekim' target='_blank' rel='noopener noreferrer'>
            Repo
          </a>
        </div>
      </div>
    );
  }
}
