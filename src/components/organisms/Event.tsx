import React from 'react';
import { weddingConfig } from '../../data/config';

const Event: React.FC = () => {
  const { event } = weddingConfig;
  return (
    <section className="min-h-screen w-full bg-navy flex flex-col items-center justify-center p-8 relative">
      <div className="floral-overlay"></div>
      
      <div className="z-10 w-full max-w-sm text-center">
        <h2 className="font-playfair text-3xl text-gold-light mb-10 tracking-[5px] uppercase">Acara Spesial</h2>
        
        <div className="space-y-8">
          {/* Card Akad */}
          <div className="border border-gold/20 p-8 rounded-tr-[50px] rounded-bl-[50px] bg-navy-mid/40 backdrop-blur-md">
             <h3 className="font-cormorant italic text-gold text-2xl mb-4">Akad Nikah</h3>
             <p className="text-xs tracking-[3px] text-cream/60 mb-2">{event.day}, {event.date}</p>
             <p className="font-playfair text-gold-light text-xl">08.00 - 10.00 WIB</p>
          </div>

          {/* Card Resepsi & Maps */}
          <div className="border border-gold/20 p-8 rounded-tl-[50px] rounded-br-[50px] bg-navy-mid/40 backdrop-blur-md">
             <h3 className="font-cormorant italic text-gold text-2xl mb-4">Resepsi</h3>
             <p className="text-xs tracking-[3px] text-cream/60 mb-2">{event.day}, {event.date}</p>
             <p className="font-playfair text-gold-light text-xl mb-6">11.00 WIB - Selesai</p>
             
             <p className="font-lato text-sm text-cream/80 mb-6 px-4">
                <span className="font-bold text-gold-light block mb-1">{event.venue}</span>
                {event.address}
             </p>

             <div className="flex flex-col gap-3">
                <a href={event.mapsLink} target="_blank" className="bg-gold text-navy py-3 text-[10px] font-bold tracking-[3px] uppercase hover:bg-gold-light transition-all rounded-full">
                  Lihat Google Maps
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;