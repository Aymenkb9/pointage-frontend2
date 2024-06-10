// reserve.model.ts
import { Voiture } from './voiture.model';

export interface Reserve {
  id: string;
  nature: string;
  zoneReserve: string;
  emplaceReserve: string;
  voiture: Voiture;
}
