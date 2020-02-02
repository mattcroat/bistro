import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <h1>Bistro</h1>
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${styles.colors.mainWhite};
    text-decoration: none;
    font-family: 'Playfair Display', sans-serif;
  }

  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
