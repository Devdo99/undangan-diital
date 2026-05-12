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
    receptionTime: '11.00 WIB - Selesai',
    venue: 'Gedung Serbaguna',
    address: 'Jl. Ahmad Yani No. 123, Bandar Lampung',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Gedung%20Serbaguna%20Bandar%20Lampung',
  },
  gifts: [
    { bank: 'BCA', acc: '1234567890', owner: 'Linda Oktamara' },
    { bank: 'Mandiri', acc: '0987654321', owner: 'Rido Rinaldi' },
  ],
};
