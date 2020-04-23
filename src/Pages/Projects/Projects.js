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
        info:
          'This quiz app is a tribute to one of my favorite bands of all time, The Red Hot Chili Peppers! Users are asked 5 multiple-choice RHCP-trivia questions and given feedback at the end to determine whether you are a fan, super-fan, or just a poser!',
      },
      {
        name: 'PERFECT DATE',
        img: 'rhcp-quiz-app.png',
        tech: ['html5', 'css', 'javascript', 'jquery'],
        info:
          'The Perfect Date App allows you to plan, and keep track of all the logistics and details that go into the perfect date by utilizing multiple APIs (Seat Geek API, Google GeoCode API, Zomato API) to help users search and find local entertainment and restaurants within walking distance.',
      },
      {
        name: 'METROCLEANERS',
        img: 'rhcp-quiz-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
        info:
          'MetroCleaners App is a customer relationship management app for local drycleaning businesses that keeps track of customers and their orders while using automated SMS notifications via Twilio API to keep them in the loop.',
      },
      {
        name: 'POST-UP',
        img: 'rhcp-quiz-app.png',
        tech: ['react', 'nodejs', 'express', 'css'],
        info:
          'Post-Up App allows you to create, organize and find pickup basketball games in your area. Each game has a roster-list of players who will be attending and also a commentboard to allow players to communicate and discuss anything they want before the game.',
      },
      {
        name: 'STRYD',
        img: 'rhcp-quiz-app.png',
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
      </div>
    );
  }
}
