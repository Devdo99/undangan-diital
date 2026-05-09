import React, { useState } from 'react';
import Hero from './components/organisms/Hero';
import Profile from './components/organisms/Profile';
import { weddingConfig } from './data/config';
import brideImg from './assets/bride.jpg';
import groomImg from './assets/groom.jpg';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative bg-navy text-cream font-lato h-screen w-screen overflow-hidden">
      {!isOpened ? (
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center p-10 text-center animate-fade-in">
          <div className="mb-10">
            <p className="font-cormorant italic text-gold/50 tracking-[4px] uppercase text-xs mb-2">The Wedding of</p>
            <h1 className="font-playfair text-3xl text-gold-light tracking-widest leading-tight">
              {weddingConfig.bride.shortName} & {weddingConfig.groom.shortName}
            </h1>
          </div>

          <button 
            onClick={() => setIsOpened(true)}
            className="group relative px-10 py-4 border border-gold text-gold font-lato tracking-[3px] uppercase text-xs transition-all duration-500 hover:bg-gold hover:text-navy"
          >
            Buka Undangan
          </button>
        </div>
      ) : (
        <main className="main-scroller animate-fade-in">
          <Hero 
            brideName={weddingConfig.bride.shortName} 
            groomName={weddingConfig.groom.shortName} 
            date={weddingConfig.event.date} 
          />
          <Profile 
            name={weddingConfig.bride.fullName} 
            parents={weddingConfig.bride.parents} 
            order={weddingConfig.bride.order} 
            photo={brideImg} 
            isBride 
          />
          <Profile 
            name={weddingConfig.groom.fullName} 
            parents={weddingConfig.groom.parents} 
            order={weddingConfig.groom.order} 
            photo={groomImg} 
          />
        </main>
      )}
    </div>
  );
};

export default App;