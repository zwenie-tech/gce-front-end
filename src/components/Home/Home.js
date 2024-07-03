import React from 'react';
import Section from '../Section/Section';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Sponsors from '../Sponsers/Sponsors';

function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <Carousel/>
      <Section title="Section 1 Title">
        <p className="p-4 bg-gray-100">Content for section 1.</p>
      </Section>
      <Section title="Section 2 Title">
        <p className="p-4 bg-gray-100">Content for section 2.</p>
      </Section>
      {/* Add more sections as needed */}
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default Home;
