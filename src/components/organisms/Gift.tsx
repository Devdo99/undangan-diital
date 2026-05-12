import React from 'react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { useCopy } from '../../hooks/useCopy';

interface AccountProps {
  bank: string;
  number: string;
  owner: string;
}

const AccountCard: React.FC<AccountProps> = ({ bank, number, owner }) => {
  // Pastikan hook Anda mengembalikan 'copied' (bukan isCopied)
  const { copied, copy } = useCopy();

  return (
    <div className="relative group animate-float">
      {/* Efek Cahaya di Belakang Kartu (Glow) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 to-gold-light/40 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
      
      <div className="relative bg-navy/60 backdrop-blur-2xl border border-gold/20 p-8 rounded-3xl text-center transition-all duration-500 hover:-translate-y-3">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gold/10 rounded-full text-gold animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <GiftIcon size={28} />
          </div>
        </div>
        
        <p className="font-playfair text-gold-light text-2xl mb-2 tracking-widest">{bank}</p>
        <p className="font-lato text-cream text-xl font-bold mb-4 tracking-[4px]">{number}</p>
        <p className="font-cormorant text-cream/50 italic text-sm mb-8 tracking-widest uppercase">a.n {owner}</p>
        
        <button
          onClick={() => copy(number)}
          className="flex items-center justify-center gap-3 mx-auto px-8 py-3 bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-[3px] hover:bg-gold hover:text-navy transition-all duration-500 rounded-full active:scale-90"
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
    <div className="relative h-screen w-full py-10 px-6 flex flex-col items-center justify-center bg-navy overflow-hidden">
      
      {/* Background Ornaments (Terbang) */}
      <div className="absolute top-10 left-[-50px] opacity-10 animate-float-slow pointer-events-none">
        <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="gold">
            <circle cx="50" cy="50" r="45" strokeWidth="0.3" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="relative z-10 text-center mb-12 animate-fade-in">
        <p className="font-cormorant text-gold italic text-xl mb-2">Digital Gift</p>
        <h2 className="font-playfair text-4xl text-gold-light mb-6 uppercase tracking-[0.25em]">Kado Pernikahan</h2>
        <p className="font-lato text-cream/50 text-[10px] max-w-xs mx-auto leading-relaxed italic uppercase tracking-widest">
          Doa restu Anda adalah karunia terindah, namun jika ingin memberikan tanda kasih, Anda dapat melalui:
        </p>
      </div>

      <div className="relative z-10 w-full max-w-sm space-y-10">
        <AccountCard bank="BANK BCA" number="1234567890" owner="Linda Permata" />
        <AccountCard bank="BANK MANDIRI" number="0987654321" owner="Rido Pratama" />
      </div>

      <div className="absolute bottom-[-50px] right-[-50px] opacity-10 animate-float pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="white">
            <rect x="20" y="20" width="60" height="60" strokeWidth="0.2" rotate="15" />
        </svg>
      </div>
    </div>
  );
};

export default Gift;