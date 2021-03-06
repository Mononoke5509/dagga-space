/*global require*/
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open-Source',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        Dagga Space is open-source and free to access. We don&apos;t track you,
        nor do we serve ads.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/undraw_to_the_stars.svg').default,
    description: (
      <>
        Dagga Space is lightweight and fast thanks to{' '}
        <a href='https://docusaurus.io'>🦖 Docusaurus</a> and{' '}
        <a href='https://reactjs.org/'>React</a>.
      </>
    ),
  },
  {
    title: 'Simple',
    Svg: require('@site/static/img/undraw_search.svg').default,
    description: (
      <>
        Dagga Space is like documentation for stoners. Head on over to{' '}
        <Link to={'strains/intro'}>Strains</Link>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

Feature.propTypes = {
  Svg: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.object,
};
