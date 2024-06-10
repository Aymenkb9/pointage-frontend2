// navire.model.ts
import { Voiture } from './voiture.model';

export interface Navire {
  id: string;
  nom: string;
  capacite: number;
  compagnie: string;
  tonnage: number;
  statut: string;
  voitures: Voiture[];
  escaleId: string;  // Ajoutez cette ligne
}
