import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Context from '../../Context/Context';
import styles from './Projects.module.css';

export default class Projects extends React.Component {
  static contextType = Context;

  state = {
    projects: [
      {
        name: 'RHCP QUIZ APP',
        img: 'rhcp-quiz-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
        info: 'The Red Hot Chili Peppers Quiz App allows users to test their RHCP trivia knowledge with 5 multiple choices questions.',
      },
      {
        name: 'PERFECT DATE',
        img: 'perfect-date-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
        info: 'The Perfect Date App allows you to plan, and keep track of all the logistics and details that go into the perfect date.',
      },
      {
        name: 'METROCLEANERS',
        img: 'metrocleaners-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
        info: 'MetroCleaners App is a CRM app for drycleaning businesses that also utilizes automated SMS notifications via Twilio API to notify customers when their order is ready.',
      },
      {
        name: 'POST-UP',
        img: 'post-up-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
        info: 'Post-Up App allows you to create, organize and find pickup basketball games in your area.',
      },
      {
        name: 'STRYD',
        img: 'stryd-app.png',
        tech: ['angular', 'ionic', 'sass', 'css'],
        info: 'STRYD is a venue-management app that allows venues to manage their promoters, street-teams, and ticket sales.',
      },
    ],
    projectsRow1: [
      {
        name: 'RHCP QUIZ APP',
        img: 'rhcp-quiz-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
        info: 'The Red Hot Chili Peppers Quiz App allows users to test their RHCP trivia knowledge with 5 multiple choices questions.',
      },
      {
        name: 'PERFECT DATE',
        img: 'perfect-date-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
        info: 'The Perfect Date App allows you to plan, and keep track of all the logistics and details that go into the perfect date.',
      },
      {
        name: 'METROCLEANERS',
        img: 'metrocleaners-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
        info: 'MetroCleaners App is a CRM app for drycleaning businesses that also utilizes automated SMS notifications via Twilio API to notify customers when their order is ready.',
      },
    ],
    projectsRow2: [
      {
        name: 'POST-UP',
        img: 'post-up-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
        info: 'Post-Up App allows you to create, organize and find pickup basketball games in your area.',
      },
      {
        name: 'STRYD',
        img: 'stryd-app.png',
        tech: ['angular', 'ionic', 'sass', 'css'],
        info: 'STRYD is a venue-management app that allows venues to manage their promoters, street-teams, and ticket sales.',
      },
    ],
  };

  render() {
    return (
      <div className={styles['Projects']}>
        
        <div className={styles['project-grid-wrapper']}>
          {this.state.projects.map((project, i) => (
            <ProjectCard key={i} name={project.name} img={project.img} tech={project.tech} info={project.info} />
          ))}
        </div>

        <div className={styles['project-row-1']}>
          {this.state.projectsRow1.map((project, i) => (
            <ProjectCard key={i} name={project.name} img={project.img} tech={project.tech} info={project.info} />
          ))}
        </div>

        <div className={styles['project-row-2']}>
          {this.state.projectsRow2.map((project, i) => (
            <ProjectCard key={i} name={project.name} img={project.img} tech={project.tech} info={project.info} />
          ))}
        </div>

      </div>
    );
  }
}
