import type { WeddingConfig } from './types';

export const weddingConfig: WeddingConfig = {
  bride: {
    fullName: 'Linda Oktamara',
    shortName: 'Linda',
    parents: 'Bapak Sariman & Ibu Dahniar',
    order: 'Putri Ketiga',
  },
  groom: {
    fullName: 'Rido Rinaldi',
    shortName: 'Rido',
    parents: 'Bapak Herman & Ibu Siti',
    order: 'Putra Pertama',
  },
  event: {
    date: '10 Agustus 2026',
    day: 'Senin',
    akadTime: '08.00 - 10.00 WIB',
    resepsiTime: '11.00 WIB - Selesai',
    venue: 'Gedung Serbaguna',
    address: 'Jl. Ahmad Yani No. 123, Bandar Lampung',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Jl.%20Ahmad%20Yani%20No.%20123%2C%20Bandar%20Lampung',
  },
  gifts: [
    { bank: 'BCA', acc: '1234567890', owner: 'Rido Rinaldi' },
    { bank: 'Mandiri', acc: '0987654321', owner: 'Rido Rinaldi' },
  ],
  rsvp: {
    phone: '6281234567890',
  },
};
