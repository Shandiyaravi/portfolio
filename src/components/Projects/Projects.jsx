import React from 'react';

import styles from './Projects.module.css';

import projects from '../../data/projects.json';
import { ProjectContainer } from './ProjectContainer';

export const Projects = () => {
  return (
    <section className={styles.wrapper} id='Projects'>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.container}>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectContainer key={id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};
