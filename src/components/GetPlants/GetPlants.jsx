import React from 'react';

import Header from '../Header/Header';
import Sponsors from '../Sponsers/Sponsors';
import Footer from '../Footer/Footer';
import GceBadge from '../../common/GceBadge'

const GetPlants = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* <div className="flex items-center justify-center h-screen bg-cover bg-center"></div> */}
        <div className="flex flex-col gap-4 p-10 text-center">
          <h2 className="text-xl text-center font-semibold mlfont-600">2020 പരിസ്ഥിതി ദിനത്തിൽ ഫലവൃക്ഷത്തൈകൾ സൗജന്യമായി ലഭിക്കാൻ</h2>
          <div className="flex flex-col gap-2 bg-light-green p-8 rounded-3xl">
            <p className='mlfont-400'>ഗ്രീൻ ക്ലീൻ കോഴിക്കോട് പദ്ധതിയുടെ വിജയത്തിനായി ഇന്ത്യൻ ഓയിൽ കോർപറേഷൻറെ സഹകരണത്തോടെ ജിസം ഫൗണ്ടേഷൻ വിതരണം ചെയ്യുന്ന സൗജന്യ ഫലവൃക്ഷത്തൈകൾ ലഭിക്കാൻ ഹരിത ഗ്രാമ മത്സരത്തിൽ പങ്കെടുക്കുക.</p>
            <a href="" className='self-start bg-white p-3 rounded-2xl'>Click here to know more </a>
          </div>
          <a href="" className='text-lg text-primary-green font-medium mlfont-400'>വിത്തുകള്‍ നടുന്ന വിധം Click Here</a>
        </div>
        <GceBadge />
      </main>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default GetPlants;
