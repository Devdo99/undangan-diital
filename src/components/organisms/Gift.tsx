import React from 'react';
import { Check, Copy, Gift as GiftIcon } from 'lucide-react';
import { weddingConfig } from '../../data/config';
import { useCopy } from '../../hooks/useCopy';

interface AccountProps {
  bank: string;
  number: string;
  owner: string;
}

const AccountCard: React.FC<AccountProps> = ({ bank, number, owner }) => {
  const { copied, copy } = useCopy();

  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-r from-gold/40 to-gold-light/40 opacity-20 blur transition duration-700 group-hover:opacity-60" />
      <div className="relative rounded-[1.75rem] border border-gold/20 bg-navy/60 p-5 text-center shadow-2xl backdrop-blur-2xl transition duration-500 group-hover:-translate-y-2 md:p-7">
        <div className="mb-5 flex justify-center">
          <div className="rounded-full bg-gold/10 p-4 text-gold shadow-[0_0_24px_rgba(201,168,76,0.22)]">
            <GiftIcon size={26} />
          </div>
        </div>

        <p className="font-playfair text-2xl tracking-widest text-gold-light">BANK {bank}</p>
        <p className="mt-3 break-all font-lato text-xl font-bold tracking-[0.22em] text-cream">{number}</p>
        <p className="mb-7 mt-3 font-cormorant text-sm italic uppercase tracking-widest text-cream/55">a.n {owner}</p>

        <button
          onClick={() => copy(number)}
          className="mx-auto flex items-center justify-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-7 py-3 text-[10px] uppercase tracking-[0.28em] text-gold transition duration-500 hover:bg-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-gold/60 active:scale-95"
        >
          {copied ? (
            <><Check size={16} /> Tersalin</>
          ) : (
            <><Copy size={16} /> Salin Nomor</>
          )}
        </button>
      </div>
    </div>
  );
};

const Gift: React.FC = () => {
  return (
    <section className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden overflow-y-auto bg-navy px-5 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(232,213,160,0.14),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(201,168,76,0.12),transparent_30%)]" />
      <div className="absolute left-[-70px] top-8 opacity-20 animate-float-slow pointer-events-none">
        <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-gold">
          <circle cx="50" cy="50" r="45" strokeWidth="0.3" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="relative z-10 mb-7 max-w-xl text-center animate-fade-in">
        <p className="font-cormorant text-xl italic text-gold">Digital Gift</p>
        <h2 className="mt-2 font-playfair text-4xl uppercase tracking-[0.22em] text-gold-light md:text-5xl">Kado Pernikahan</h2>
        <p className="mx-auto mt-5 max-w-md text-xs uppercase leading-7 tracking-[0.2em] text-cream/55">
          Doa restu Anda adalah karunia terindah. Jika ingin memberikan tanda kasih, dapat melalui rekening berikut.
        </p>
      </div>

      <div className="relative z-10 grid w-full max-w-3xl gap-4 md:grid-cols-2">
        {weddingConfig.gifts.map((gift) => (
          <AccountCard key={`${gift.bank}-${gift.acc}`} bank={gift.bank} number={gift.acc} owner={gift.owner} />
        ))}
      </div>

      <div className="absolute bottom-[-70px] right-[-60px] opacity-10 animate-float pointer-events-none">
        <svg width="320" height="320" viewBox="0 0 100 100" fill="none" stroke="white">
          <rect x="20" y="20" width="60" height="60" strokeWidth="0.2" transform="rotate(15 50 50)" />
        </svg>
      </div>
    </section>
  );
};

export default Gift;
