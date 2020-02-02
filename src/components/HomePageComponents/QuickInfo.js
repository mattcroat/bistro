import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae natus laboriosam quam voluptatem modi, odio impedit qui
            praesentium illo eveniet quia asperiores aperiam non exercitationem,
            ipsam eaque illum, atque explicabo nam! Consequatur nostrum cum sint
            eligendi architecto qui dignissimos sunt velit voluptate dolor ad
            ullam, doloremque vitae recusandae aliquam dicta?
          </p>

          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  .text {
    line-height: 1.4rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`;
