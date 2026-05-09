import React, { useState } from 'react';
import Hero from './components/organisms/Hero';
import Profile from './components/organisms/Profile';
import { weddingConfig } from './data/config';
import brideImg from './assets/bride.jpg';
import groomImg from './assets/groom.jpg';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="bg-navy text-cream w-full h-[100dvh] overflow-hidden relative">
      {!isOpened ? (
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center p-10 text-center">
          <h1 className="font-playfair text-3xl text-gold-light mb-10 tracking-widest leading-tight">
            {weddingConfig.bride.shortName} & {weddingConfig.groom.shortName}
          </h1>
          <button 
            onClick={() => setIsOpened(true)}
            className="px-10 py-4 border border-gold text-gold uppercase tracking-[3px] text-xs"
          >
            Buka Undangan
          </button>
        </div>
      ) : (
        <main className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-navy">
          <section className="snap-start h-[100dvh] w-full">
            <Hero 
              brideName={weddingConfig.bride.shortName} 
              groomName={weddingConfig.groom.shortName} 
              date={weddingConfig.event.date} 
            />
          </section>

          <section className="snap-start h-[100dvh] w-full">
            <Profile 
              name={weddingConfig.bride.fullName} 
              parents={weddingConfig.bride.parents} 
              order={weddingConfig.bride.order} 
              photo={brideImg} 
              isBride 
            />
          </section>

          <section className="snap-start h-[100dvh] w-full">
            <Profile 
              name={weddingConfig.groom.fullName} 
              parents={weddingConfig.groom.parents} 
              order={weddingConfig.groom.order} 
              photo={groomImg} 
            />
          </section>
        </main>
      )}
    </div>
  );
};

export default App;