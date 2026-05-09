import React from 'react';
import { weddingConfig } from '../../data/config';

const Gift: React.FC = () => {
  return (
    <section className="h-full w-full bg-navy flex flex-col items-center justify-center p-8 text-center">
      <h2 className="font-playfair text-4xl text-gold-light mb-6">Wedding Gift</h2>
      <p className="font-cormorant italic text-cream/70 mb-10 max-w-xs mx-auto">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
      </p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        {weddingConfig.gifts.map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-gold/10 p-6 rounded-xl">
             <p className="text-gold-light text-xs tracking-widest uppercase mb-2">{item.bank}</p>
             <h4 className="font-playfair text-xl mb-1">{item.acc}</h4>
             <p className="font-lato text-cream/50 text-sm italic">a.n {item.owner}</p>
             <button className="mt-4 text-[10px] text-gold uppercase tracking-widest border-b border-gold/30 pb-1">
               Salin Nomor
             </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gift;