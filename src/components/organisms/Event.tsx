import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { weddingConfig } from '../../data/config';

const Event: React.FC = () => {
  const { event } = weddingConfig;

  return (
    <section className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden overflow-y-auto bg-[linear-gradient(180deg,#0a1628_0%,#111f3a_48%,#07101d_100%)] px-5 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,213,160,0.16),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(201,168,76,0.12),transparent_28%)]" />
      <div className="absolute -right-20 top-12 h-56 w-56 rounded-full border border-gold/10 animate-float" />
      <div className="absolute -bottom-24 left-8 h-72 w-72 rounded-full border border-gold/10 animate-float-slow" />

      <div className="relative z-10 w-full max-w-5xl text-center">
        <p className="font-cormorant text-xl italic text-gold">Save the Date</p>
        <h2 className="mt-2 font-playfair text-4xl uppercase tracking-[0.22em] text-gold-light md:text-5xl">Rangkaian Acara</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-cream/65">
          Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="group rounded-[2rem] border border-gold/20 bg-navy/55 p-5 md:p-7 text-left shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-gold/50">
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full bg-gold/10 p-3 text-gold"><CalendarDays size={22} /></span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cream/45">Prosesi</p>
                <h3 className="font-playfair text-3xl text-gold-light">Akad Nikah</h3>
              </div>
            </div>
            <div className="space-y-4 text-sm text-cream/75">
              <p className="flex items-center gap-3"><CalendarDays size={18} className="text-gold" /> {event.day}, {event.date}</p>
              <p className="flex items-center gap-3"><Clock size={18} className="text-gold" /> {event.akadTime}</p>
              <p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-gold" /> <span><strong className="block text-gold-light">{event.venue}</strong>{event.address}</span></p>
            </div>
          </article>

          <article className="group rounded-[2rem] border border-gold/20 bg-navy/55 p-5 md:p-7 text-left shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-gold/50 md:mt-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full bg-gold/10 p-3 text-gold"><CalendarDays size={22} /></span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cream/45">Perayaan</p>
                <h3 className="font-playfair text-3xl text-gold-light">Resepsi</h3>
              </div>
            </div>
            <div className="space-y-4 text-sm text-cream/75">
              <p className="flex items-center gap-3"><CalendarDays size={18} className="text-gold" /> {event.day}, {event.date}</p>
              <p className="flex items-center gap-3"><Clock size={18} className="text-gold" /> {event.receptionTime}</p>
              <p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-gold" /> <span><strong className="block text-gold-light">{event.venue}</strong>{event.address}</span></p>
            </div>
          </article>
        </div>

        <a
          href={event.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-[11px] font-bold uppercase tracking-[0.32em] text-navy shadow-[0_12px_35px_rgba(201,168,76,0.25)] transition hover:-translate-y-1 hover:bg-gold-light"
        >
          Lihat Google Maps
        </a>
      </div>
    </section>
  );
};

export default Event;
