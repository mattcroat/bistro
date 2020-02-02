import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';
import QuickInfo from '../components/HomePageComponents/QuickInfo';
import { Gallery } from '../components/HomePageComponents/Gallery-1';
import Menu from '../components/HomePageComponents/Menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="Bob's Burgers"
        subtitle="55 main street - santa monica, CA"
      >
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
);

export default IndexPage;
