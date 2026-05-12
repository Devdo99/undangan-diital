import React from 'react';

interface HeroProps {
  brideName: string;
  groomName: string;
  date: string;
}

const Hero: React.FC<HeroProps> = ({ brideName, groomName, date }) => {
  return (
    <section className="h-screen snap-start bg-navy flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.1),transparent_70%)]"></div>

      <div className="z-10 animate-fade-in">
        <p className="font-cormorant text-gold text-xs tracking-[6px] mb-8 uppercase">Bismillahirrahmanirrahim</p>
        <h3 className="font-cormorant italic text-gold/60 text-lg tracking-[3px] mb-6">The Wedding of</h3>
        <h1 className="font-playfair text-6xl md:text-8xl text-gold-light leading-tight mb-8">
          {brideName} <span className="font-cormorant text-gold italic">&</span> {groomName}
        </h1>
        <div className="flex items-center justify-center gap-6">
          <div className="h-[0.5px] w-16 bg-gold/40"></div>
          <p className="font-lato text-cream tracking-[5px] text-sm uppercase">{date}</p>
          <div className="h-[0.5px] w-16 bg-gold/40"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;