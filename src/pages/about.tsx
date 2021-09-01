import React from 'react';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Who" description="Who" />}>
    <Content>
      <p>
        I am a multidisciplinary software engineer and web developer.
        <br />
        I work together to design, create and produce work that I am proud of for folks that I
        believe in.
      </p>
      <p>
        Hit me up
        <div>
          <a href="https://twitter.com/vianarafaelds" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="aaa" size="lg" />
          </a>
          {' '}
          <a href="https://twitter.com/vianarafaelds" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="aaa" size="lg" />
          </a>
          {' '}
          <a href="https://twitter.com/vianarafaelds" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="aaa" size="lg" />
          </a>
        </div>
      </p>
    </Content>
  </Main>
);

export default About;
