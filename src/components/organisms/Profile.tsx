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
    <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end">
      
      {/* FOTO: Lapisan Paling Bawah (Benar-benar Full) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={photo} 
          alt={name} 
          /* h-full w-full + object-cover memastikan foto mentok ke semua sisi layar */
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000" 
        />
        {/* Lapisan Hitam Transparan agar Teks Terbaca Jelas */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10" />
      </div>

      {/* TEKS: Lapisan Di Atas Foto (Floating) */}
      <div className="relative z-20 w-full px-6 pb-20 text-center animate-fade-in">
        <div className="max-w-md mx-auto">
          <p className="font-cormorant text-gold italic text-xl mb-2 drop-shadow-lg">
            {isBride ? 'The Bride' : 'The Groom'}
          </p>
          
          <h2 className="font-playfair text-5xl md:text-7xl text-gold-light mb-4 drop-shadow-2xl leading-none">
            {name}
          </h2>
          
          <div className="space-y-1 font-lato text-cream drop-shadow-md">
            <p className="uppercase tracking-[4px] text-[10px] opacity-70">Putra/Putri Dari:</p>
            <p className="font-bold text-xl md:text-2xl">{parents}</p>
            <p className="italic text-sm opacity-80">{order}</p>
          </div>
          
          <button className="mt-8 px-12 py-3 border border-gold/60 text-gold text-xs tracking-[5px] uppercase hover:bg-gold hover:text-navy transition-all backdrop-blur-sm bg-navy/20">
            Instagram
          </button>
        </div>
      </div>

    </div>
  );
};

export default Profile;