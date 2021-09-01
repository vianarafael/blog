import React from 'react';

import Head from 'next/head';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Who" description="Who" />}>
    <Head>
      <link
        href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css"
        rel="stylesheet"
      />
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
        rel="stylesheet"
      />
    </Head>
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
            <i className="icon-twitter" />
          </a>
          {' '}
          <a href="https://github.com/vianarafael" target="_blank" rel="noreferrer">
            <i className="icon-github" />
          </a>
          {' '}
          <a href="https://www.linkedin.com/in/rafael-viana/" target="_blank" rel="noreferrer">
            <i className="icon-linkedin" />
          </a>
        </div>
      </p>
    </Content>
  </Main>
);

export default About;
