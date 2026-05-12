import React, { useState } from 'react';
import Event from './components/organisms/Event';
import Gift from './components/organisms/Gift';
import Hero from './components/organisms/Hero';
import Profile from './components/organisms/Profile';
import RSVP from './components/organisms/RSVP';
import brideImg from './assets/bride.jpg';
import groomImg from './assets/groom.jpg';
import { weddingConfig } from './data/config';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const coupleName = `${weddingConfig.bride.shortName} & ${weddingConfig.groom.shortName}`;

  return (
    <div className="min-h-screen w-full bg-navy text-cream font-lato antialiased selection:bg-gold selection:text-navy">
      {!isOpened ? (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#06101f_0%,#0a1628_46%,#17233f_100%)] p-8 text-center">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_15%,rgba(232,213,160,0.20),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(201,168,76,0.18),transparent_30%)]" />
          <div className="absolute left-1/2 top-10 h-[72dvh] w-[72dvh] -translate-x-1/2 rounded-full border border-gold/10 shadow-[0_0_120px_rgba(201,168,76,0.14)]" />
          <div className="absolute -left-16 top-8 h-56 w-56 rounded-full border border-gold/20 animate-float-slow" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 rotate-12 rounded-[4rem] border border-gold/10 animate-float" />

          <div className="relative z-10 w-full max-w-3xl animate-fade-in rounded-[2rem] border border-gold/15 bg-navy/30 px-6 py-12 shadow-2xl backdrop-blur-md md:px-14">
            <p className="mb-5 font-cormorant text-lg italic tracking-[0.45em] text-gold uppercase">The Wedding of</p>
            <h1 className="font-playfair text-5xl uppercase leading-tight tracking-[0.16em] text-gold-light drop-shadow-2xl md:text-7xl">
              {weddingConfig.bride.shortName}
              <span className="mx-4 block font-cormorant text-4xl italic tracking-normal text-gold/80 md:inline">&</span>
              {weddingConfig.groom.shortName}
            </h1>

            <div className="mx-auto my-8 flex max-w-sm items-center justify-center gap-4 text-gold/70">
              <span className="h-px flex-1 bg-gold/30" />
              <span className="text-xs uppercase tracking-[0.35em]">{weddingConfig.event.date}</span>
              <span className="h-px flex-1 bg-gold/30" />
            </div>

            <p className="mx-auto max-w-md text-sm leading-7 text-cream/70">
              Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk menjadi bagian dari hari bahagia kami.
            </p>

            <button
              onClick={() => setIsOpened(true)}
              className="group relative mt-10 overflow-hidden rounded-full border border-gold/40 px-10 py-4 text-xs font-bold uppercase tracking-[0.38em] text-gold transition duration-500 hover:-translate-y-1 hover:border-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-navy active:translate-y-0"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative">Buka Undangan</span>
            </button>
          </div>
        </div>
      ) : (
        <main className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth bg-navy">
          <section className="h-[100dvh] w-full snap-start">
            <Hero brideName={weddingConfig.bride.shortName} groomName={weddingConfig.groom.shortName} date={weddingConfig.event.date} />
          </section>

          <section className="h-[100dvh] w-full snap-start">
            <Profile name={weddingConfig.bride.fullName} parents={weddingConfig.bride.parents} order={weddingConfig.bride.order} photo={brideImg} isBride />
          </section>

          <section className="h-[100dvh] w-full snap-start">
            <Profile name={weddingConfig.groom.fullName} parents={weddingConfig.groom.parents} order={weddingConfig.groom.order} photo={groomImg} />
          </section>

          <section className="h-[100dvh] w-full snap-start">
            <Event />
          </section>

          <section className="h-[100dvh] w-full snap-start">
            <Gift />
          </section>

          <section className="h-[100dvh] w-full snap-start">
            <RSVP brideName={coupleName} />
          </section>
        </main>
      )}
    </div>
  );
};

export default App;
