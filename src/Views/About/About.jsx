import React from 'react';
import styles from './About.module.css'; 

function About() {
  return (
    <div className={styles['about-container']}>
      <div className={styles.title}>
        <h1>¿Quién soy?</h1>
      </div>
      <img
        src={require('../../components/Images/f.png')}
        alt="Imagen de perfil"
        className={styles.profileImage}
      />
      <div className={styles.p}>
        <p>
          ¡Hola! Soy Florencia, estoy aprendiendo a desarrollar aplicaciones web.
        </p>
        <p>
          Es un gran y emocionante desafío aprender nuevas tecnologías y crear proyectos.
        </p>
        <p>
          Si quieres saber más sobre mí, ¡No dudes en contactarme!
        </p>
      </div>
    </div>
  );
}

export default About;
