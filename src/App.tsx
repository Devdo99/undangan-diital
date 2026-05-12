import React, { useState } from 'react';
import Hero from './components/organisms/Hero';
import Profile from './components/organisms/Profile';
import Gift from './components/organisms/Gift';
import { weddingConfig } from './data/config';
import brideImg from './assets/bride.jpg';
import groomImg from './assets/groom.jpg';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="bg-navy text-cream font-lato min-h-screen w-full relative">
      {!isOpened ? (
        /* --- HALAMAN BUKA UNDANGAN (BERSINAR & TERBANG) --- */
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center p-10 text-center overflow-hidden">
          
          {/* Efek Cahaya Bersinar (Glow) */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-light/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

          {/* Ornamen Terbang */}
          <div className="absolute -top-10 -left-10 opacity-20 animate-float-slow">
            <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="gold">
              <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative z-10 space-y-8 animate-fade-in">
            <p className="font-cormorant text-gold italic text-xl tracking-[0.4em] uppercase">The Wedding of</p>
            
            <h1 className="font-playfair text-5xl md:text-7xl text-gold-light tracking-[0.15em] leading-tight uppercase drop-shadow-2xl">
              {weddingConfig.bride.shortName} <span className="text-3xl font-serif block md:inline-block my-4 md:my-0 opacity-70">&</span> {weddingConfig.groom.shortName}
            </h1>

            <div className="py-4">
              <div className="h-[1px] bg-gold/50 mx-auto animate-width"></div>
            </div>

            <button 
              onClick={() => setIsOpened(true)} 
              className="group relative px-12 py-4 mt-8 overflow-hidden rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gold opacity-10 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute inset-0 border border-gold/40 rounded-full group-hover:border-gold transition-colors"></div>
              
              <span className="relative z-10 text-gold text-xs uppercase tracking-[6px] font-bold">
                Buka Undangan
              </span>
            </button>
          </div>

          <div className="absolute -bottom-20 -right-20 opacity-20 animate-float">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="gold">
              <rect x="20" y="20" width="60" height="60" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      ) : (
        /* --- ISI UTAMA UNDANGAN --- */
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

          {/* Bagian Amplop */}
          <section className="snap-start h-[100dvh] w-full relative">
            <Gift />
          </section>

        </main>
      )}
    </div>
  );
};

export default App;