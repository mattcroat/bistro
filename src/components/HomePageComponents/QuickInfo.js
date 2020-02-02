/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="menu" title="specials" />
        {/* <QuickInfoWrapper>
          <p className="text">
            Hope you enjoy your fine selection!
          </p>

          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper> */}
      </Section>
    );
  }
}

// const QuickInfoWrapper = styled.div`
//   width: 90%;
//   margin: 2rem auto;

//   .text {
//     text-align: center;
//     line-height: 1.4rem;
//     color: ${styles.colors.mainGrey};
//     word-spacing: 0.1rem;
//   }

//   @media (min-width: 768px) {
//     width: 70%;
//   }

//   @media (min-width: 992px) {
//     width: 60%;
//   }
// `;
