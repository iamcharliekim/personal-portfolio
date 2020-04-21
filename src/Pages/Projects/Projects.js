import React from 'react';
import styles from './Projects.module.css';
import Context from '../../Context/Context';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default class Projects extends React.Component {
  static contextType = Context;

  state = {
    projects: [
      {
        name: 'RHCP QUIZ APP',
        img: 'rhcp-quiz-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
      },
      {
        name: 'PERFECT DATE',
        img: 'rhcp-quiz-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
      },
      {
        name: 'METROCLEANERS',
        img: 'rhcp-quiz-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
      },
      {
        name: 'POST-UP',
        img: 'rhcp-quiz-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
      },
      {
        name: 'STRYD',
        img: 'rhcp-quiz-app.png',
        tech: ['angular', 'ionic', 'sass', 'css'],
      },
    ],
  };

  render() {
    return (
      <div className={styles['Projects']}>
        <div className={styles['project-grid-wrapper']}>
          {this.state.projects.map((project, i) => (
            <ProjectCard key={i} name={project.name} img={project.img} tech={project.tech} />
          ))}
        </div>
      </div>
    );
  }
}
