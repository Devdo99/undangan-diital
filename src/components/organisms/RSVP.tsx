import React, { useState } from 'react';

interface RSVPProps {
  brideName: string;
  phone: string;
}

const RSVP: React.FC<RSVPProps> = ({ brideName, phone }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Hadir');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo ${brideName}, saya ${name} mengkonfirmasi akan *${attendance}* pada acara pernikahan kalian. Terima kasih!`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="h-[100dvh] snap-start bg-navy-dark flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(201,168,76,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(201,168,76,0.05),transparent_50%)]" />

      <div className="w-full max-w-sm z-10 text-center animate-fade-in">
        <h2 className="font-playfair text-3xl md:text-4xl text-gold-light mb-4 tracking-widest">RSVP</h2>
        <p className="font-cormorant italic text-cream/70 mb-10 leading-relaxed text-sm">
          Kehadiran Anda adalah hadiah terindah bagi kami. Mohon konfirmasi kehadiran Anda.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="guest-name" className="font-lato text-[10px] text-gold tracking-[3px] uppercase">Nama Lengkap</label>
            <input
              id="guest-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b border-gold/40 text-cream p-2 focus:outline-none focus:border-gold-light transition-colors font-playfair text-lg"
              placeholder="Ketik nama Anda..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="attendance" className="font-lato text-[10px] text-gold tracking-[3px] uppercase">Konfirmasi Kehadiran</label>
            <select
              id="attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="bg-navy-mid border border-gold/30 text-cream p-3 focus:outline-none focus:border-gold-light rounded transition-colors font-playfair"
            >
              <option value="Hadir">Ya, Saya akan Hadir</option>
              <option value="Tidak Hadir">Maaf, Saya Tidak Bisa Hadir</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-4 bg-gold text-navy font-playfair font-bold tracking-[3px] uppercase hover:bg-gold-light transition-colors rounded shadow-lg"
          >
            Kirim Konfirmasi
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
