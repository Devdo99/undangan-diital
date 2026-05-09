export interface WeddingConfig {
  bride: Person;
  groom: Person;
  event: EventDetails;
  gifts: Gift[];
}

interface Person {
  fullName: string;
  shortName: string;
  parents: string;
  order: string;
  photo: string;
}

interface EventDetails {
  date: string;
  day: string;
  akadTime: string;
  resepsiTime: string;
  venue: string;
  address: string;
  mapsLink: string;
}

interface Gift {
  bank: string;
  acc: string;
  owner: string;
}