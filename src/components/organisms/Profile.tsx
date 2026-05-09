import React from 'react';

interface ProfileProps {
  name: string;
  parents: string;
  order: string;
  photo: string;
  isBride?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ name, parents, order, photo, isBride }) => {
  return (
    <div className="relative w-full h-[100dvh] flex flex-col justify-end overflow-hidden bg-navy">
      
      {/* 1. LAYER FOTO UTAMA - FULL SCREEN & UTUH */}
      <div className="absolute inset-0 z-0">
        <img 
          src={photo} 
          alt={name} 
          /* object-cover: Memastikan foto memenuhi seluruh layar tanpa sisa ruang.
             object-center: Memastikan badan mempelai berada di tengah layar.
          */
          className="w-full h-full object-cover object-center transition-all duration-1000" 
        />
        {/* Overlay Gradasi: Menjamin teks terbaca namun tidak menutupi badan */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent z-10" />
      </div>

      {/* 2. AKSEN BUNGA DI PINGGIR (DEKORASI SUDUT) */}
      <div className="absolute top-0 left-0 z-20 w-40 h-40 opacity-60 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold w-full h-full">
          <path d="M0 0C40 0 60 20 60 60" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="0.2"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-20 w-40 h-40 opacity-60 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-light w-full h-full">
          <path d="M0 0C40 0 60 20 60 60" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        </svg>
      </div>

      {/* 3. TEKS INFORMASI (MINIMALIS DI POSISI PALING BAWAH) */}
      <div className="relative z-30 w-full px-6 pb-10 text-center animate-fade-in">
        <div className="max-w-md mx-auto">
          {/* Label Kecil */}
          <p className="font-cormorant text-gold italic text-xs mb-1 tracking-[0.4em] uppercase drop-shadow-md">
            {isBride ? 'Mempelai Wanita' : 'Mempelai Pria'}
          </p>
          
          {/* Nama - Ukuran elegan agar tidak naik menutupi badan */}
          <h2 className="font-playfair text-2xl md:text-4xl text-gold-light mb-3 drop-shadow-2xl uppercase tracking-[0.2em] leading-tight">
            {name}
          </h2>
          
          {/* Info Orang Tua */}
          <div className="space-y-0.5 font-lato text-cream/80 drop-shadow-md">
            <p className="uppercase tracking-[3px] text-[7px] opacity-60">Putra/Putri Dari:</p>
            <p className="font-bold text-sm md:text-base leading-tight tracking-wide">{parents}</p>
            <p className="italic text-[10px] opacity-60">{order}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;