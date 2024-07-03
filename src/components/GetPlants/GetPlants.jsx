import React from 'react';
import LoginForm from '../Login/LoginForm';
import Header from '../Header/Header';
import Sponsors from '../Sponsers/Sponsors';
import Footer from '../Footer/Footer';

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


const GceBadge = () => {
  return (
    <div className='px-10 mb-10 shadow-top-bottom'>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="flex flex-col gap-2">
          <h2 className='text-primary-green font-medium text-xl'>Green Clean Earth Movement</h2>
          <p className='mlfont-400'>ഭൂമിയെ ഹരിതാഭമാക്കാനും, മാലിന്യ മുക്തമാക്കാനും ജനങ്ങളെ പ്രേരിപ്പിക്കാൻവിവിധ സ്ഥാപങ്ങളുടെയും,സംഘടനകളുടെയും , സഹകരണത്തോടെ GCEM Foundation ആവിഷ്‌കരിച്ച് നടപ്പിൽ വരുത്തുന്ന ഒരു ബഹുജനമുന്നേറ്റമാണ് Green Clean Earth Movement(GCEM).</p>
          <h2 className='text-primary-green font-medium text-xl mt-4'>GCEM Foundation</h2>
          <p>Www.GreenCleanEarth.Org</p>
          <p className='mlfont-400'>മനുഷ്യൻെറ പ്രാഥമിക ആവശ്യങ്ങളായ ഭക്ഷണം ,വസ്ത്രം,പാർപ്പിടം,വിദ്യാഭ്യാസം ,ആരോഗ്യം ,ഗതാഗതം വാർത്താ വിനിമയം എന്നീ മേഖലകളിൽ മെച്ചപ്പെട്ട സേവനം എല്ലാവർക്കും ലഭ്യമാക്കാൻ വേണ്ടിയും, ആഗോള താപനം ,വരൾച്ച ,മലിനീകരണം എന്നിവയുടെ മഹാവിപത്തിൽ നിന്നും ഭൂമിയെ രക്ഷിക്കാൻ വേണ്ടിയും, കാരുണ്യ പ്രവർത്തനങ്ങൾ നടത്താനും വേണ്ടിയും രൂപീകൃതമായ ഒരു സന്നദ്ധസംഘടനയാണ് GCEM Foundation (ജിസം ഫൗണ്ടേഷൻ).Rg number 246/4 16</p>
        </div>
        <div className='p-10'>
          <img src="./images/planting_trees.jpg" className="w-full md:w-[100%] px-5" alt="image: planting trees"/>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className='p-10'>
          <img src="/images/planting_trees_2.jpg" alt="" className='w-full md:w-[100%] px-5' />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className='mlfont-400 text-primary-green font-medium text-xl'>നിങ്ങൾക്കും പങ്കെടുക്കാം</h2>
          <p className='mlfont-400'>ഗ്രീൻ ക്ളീൻ എർത്ത് മൂവ്മെന്റ് പ്രവർത്തനങ്ങളിലേക്ക് താങ്കളെ സ്വാഗതം ചെയ്യുന്നു. മെമ്പർഷിപ്പ്. ഒരു വൃക്ഷത്തൈ നട്ട് ഹരിതപുരസ്കാരം സമ്മാന പദ്ധതിയിൽ അപ്‌ലോഡ് ചെയ്യാൻ തയ്യാറുള്ളവരും പരിസ്ഥിതി പ്രവർത്തനങ്ങളിൽ സേവനം ചെയ്യാൻ താല്പര്യവുമുള്ളവരുമായ ആർക്കും മെമ്പർഷിപ്പിന് അപേക്ഷിക്കാവുന്നതാണ്.അപേക്ഷയൊപ്പം താങ്കൾ ഇതുവരെ ചെയ്തതും ചെയ്യാൻ ഉദ്ദേശിക്കുന്നതുമായ സാമൂഹ്യപ്രവർത്തനങ്ങളെ കുറിച്ച് ഒരു ലഘു വിവരണവും നല്കേണ്ടതാണ്. കമ്മിറ്റിയുടെ അംഗീകാരം ലഭിച്ചാൽ താങ്കൾക്ക് മെമ്പർഷിപ്പ് ലഭിക്കുന്നതാണ്. അപേക്ഷകൾ സമർപ്പിക്കേണ്ടത്. Mail id- gcemfoundation@gmail.com</p>
        </div>
      </div>
      
    </div>
  )
}



export default GetPlants;
