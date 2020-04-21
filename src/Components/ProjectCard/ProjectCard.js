import React from 'react';
import styles from './ProjectCard.module.css';
export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className={styles['project-card']}>
        <div className={styles['project-name']}>{this.props.name}</div>

        <div className={styles['project-img-wrapper']}>
          <img src={require(`../../../src/images/${this.props.img}`)} />
        </div>

        <div className={styles['project-tech-wrapper']}>
          {this.props.tech.map((tech, i) => (
            <img src={require(`../../../src/images/${tech}.svg`)} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
