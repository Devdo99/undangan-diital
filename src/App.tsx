import React, { useState } from 'react';
import Hero from './components/organisms/Hero';
import Profile from './components/organisms/Profile';
import { weddingConfig } from './data/config';
import brideImg from './assets/bride.jpg';
import groomImg from './assets/groom.jpg';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="bg-navy text-cream font-lato h-[100dvh] w-full overflow-hidden relative">
      {!isOpened ? (
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center p-10 text-center">
            <h1 className="font-playfair text-2xl text-gold-light mb-10 tracking-widest uppercase">
              {weddingConfig.bride.shortName} & {weddingConfig.groom.shortName}
            </h1>
            <button 
              onClick={() => setIsOpened(true)} 
              className="px-8 py-3 border border-gold/50 text-gold text-[10px] uppercase tracking-[4px] hover:bg-gold hover:text-navy transition-all"
            >
                Buka Undangan
            </button>
        </div>
      ) : (
        /* Snap-y diaktifkan lagi agar presisi per halaman */
        <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-navy">
          
          <section className="snap-start h-[100dvh] w-full relative">
            <Hero 
              brideName={weddingConfig.bride.shortName} 
              groomName={weddingConfig.groom.shortName} 
              date={weddingConfig.event.date} 
            />
          </section>

          <section className="snap-start h-[100dvh] w-full relative">
            <Profile 
              name={weddingConfig.bride.fullName} 
              parents={weddingConfig.bride.parents} 
              order={weddingConfig.bride.order} 
              photo={brideImg} 
              isBride 
            />
          </section>

          <section className="snap-start h-[100dvh] w-full relative">
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