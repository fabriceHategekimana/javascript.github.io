import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const logoUrl = useBaseUrl('/img/javascript.png');

	const projectsUrl = useBaseUrl('/docs/projects/intro');
	const aboutUrl = useBaseUrl('/docs/about');
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Logo */}
        <img
          src={logoUrl}
          alt="JavaScript Projects logo"
          className={styles.logo}
        />

        {/* Titre */}
        <h1 className={styles.title}>
          Projets JavaScript pour Débutants
          <span className={styles.subtitle}>
            Pratiques & Progressifs
          </span>
        </h1>

        {/* Tagline */}
        <p className={styles.tagline}>
          Une collection de projets pratiques pour apprendre les bases de JavaScript.
          Découvrez la manipulation du DOM, les événements, les fonctions, les objets et les concepts
          fondamentaux à travers des exercices concrets et progressifs.
        </p>

        {/* Cartes */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Apprentissage progressif</h3>
            <p>
              Commencez par des projets simples comme une calculatrice ou un compteur,
              puis progressez vers des applications plus complexes comme un quiz interactif ou une todo list.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Concepts fondamentaux</h3>
            <p>
              Maîtrisez les variables, fonctions, boucles, conditions, événements,
              manipulation du DOM et stockage local à travers la pratique.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Projets guidés</h3>
            <p>
              Chaque projet inclut des objectifs clairs, des conseils techniques
              et des ressources pour vous accompagner dans votre apprentissage.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href={projectsUrl} className={styles.secondaryButton}>
            Découvrir les projets
          </a>
          <a href={aboutUrl} className={styles.secondaryButton}>
            En savoir plus
          </a>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          Une ressource pour les étudiants qui souhaitent apprendre JavaScript
          de manière pratique et construire des projets concrets.
        </footer>
      </div>
    </main>
  );
}
