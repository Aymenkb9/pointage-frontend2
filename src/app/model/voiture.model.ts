// voiture.model.ts
import { Navire } from './navire.model';
import { Reserve } from './reserve.model';

export interface Voiture {
  id: string;
  lot: string;
  vin: string;
  marque: string;
  model: string;
  datePointage: Date;
  etat: string;
  navire: Navire;
  reserves: Reserve[];
}
