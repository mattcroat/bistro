import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: '1',
        icon: <FaFacebook className="icon facebook-icon" />,
        path: '#',
      },
      {
        id: '2',
        icon: <FaTwitter className="icon twitter-icon" />,
        path: '#',
      },
      {
        id: '3',
        icon: <FaInstagram className="icon instagram-icon" />,
        path: '#',
      },
    ],
  };

  render() {
    return (
      <FooterWrapper>
        <div className="title">bistro</div>

        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="copyright">copyright &copy; 2020 bistro</p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};

  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .facebook-icon,
  .twitter-icon,
  .instagram-icon {
    color: ${styles.colors.mainWhite};
  }

  .icon {
    font-size: 1.3rem;
    ${styles.transition({})};

    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin-top: 2rem;
  }

  .title {
    text-align: center;
    width: 14rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`;
