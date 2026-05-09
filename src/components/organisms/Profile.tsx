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
    <section className="relative w-full h-[100dvh] snap-start overflow-hidden bg-navy-dark">
      
      {/* 1. BACKGROUND FOTO (Benar-benar Full Screen 100%) */}
      <img 
        src={photo} 
        alt={name} 
        // object-top memastikan dahi/wajah dari atas tidak terpotong
        className="absolute inset-0 w-full h-full object-cover object-top" 
      />
      
      {/* 2. GRADIENT MASK (Hanya muncul di 60% area bawah) 
          Ini memastikan 40% area atas (wajah) BENAR-BENAR BENING TANPA GRADASI, 
          dan teks di bawah tetap terbaca jelas */}
      <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent"></div>

      {/* 3. TEKS (Dikunci mutlak di bagian bawah) */}
      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center text-center px-8 pb-16 z-10">
        
        <p className="font-cormorant italic text-gold-light tracking-[4px] text-[10px] uppercase mb-2 drop-shadow-md">
          Mempelai {isBride ? 'Wanita' : 'Pria'}
        </p>
        
        <h2 className="font-playfair text-4xl md:text-5xl text-gold-light mb-4 drop-shadow-lg">
          {name}
        </h2>
        
        <div className="h-[0.5px] w-16 bg-gold/50 mx-auto mb-5"></div>
        
        <p className="font-cormorant italic text-cream/80 text-sm md:text-base mb-1">
          Putra {order} dari Pasangan:
        </p>
        
        <p className="font-playfair text-gold-light font-bold text-lg md:text-xl uppercase tracking-widest drop-shadow-md">
          {parents}
        </p>
        
      </div>

    </section>
  );
};

export default Profile;