import React from 'react';
import Hero from '../containers/Hero';
import Layout from '../containers/Layout';
import Highlights from '../containers/Highlights';
import Testimonials from '../containers/Testimonials';
import About from '../containers/About';

function Main() {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </Layout>
  );
}

export default Main;
