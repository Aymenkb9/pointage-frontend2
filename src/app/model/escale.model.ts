import { Navire } from '../model/navire.model';
import { Client } from '../model/client.model';
import { Connaissement } from '../model/connaissement.model';
import { Terminal } from '../model/terminal.model';
import { Pointage } from '../model/pointage.model';
import { Voiture } from '../model/voiture.model'; // Assurez-vous que le modèle Voiture est bien importé

export interface Escale {
  statutNavire: string;
  voitures: Voiture[]; // Utilisez l'importation correcte pour Voiture
  id: string;
  numEscale: number;
  numVoyage: string;
  pointage: Pointage;
  navire: Navire;
  client: Client;
  connaissement: Connaissement;
  terminal: Terminal;
}
