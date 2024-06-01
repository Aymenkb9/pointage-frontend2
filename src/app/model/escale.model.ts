import { Navire } from '../model/navire.model';
import { Client } from '../model/client.model';
import { Connaissement } from '../model/connaissement.model';
import { Terminal } from '../model/terminal.model';
import { Pointage } from '../model/pointage.model';

export interface Escale {
    statutNavire: string;
    voitures: import("c:/Users/aymen/POINTAGE-FRONTEND2/src/app/model/voiture.model").Voiture[];
    id: string;
    numEscale: number;
    numVoyage: string;
    pointage: Pointage; 
    navire: Navire; 
    client: Client; 
    connaissement: Connaissement; 
    terminal: Terminal; 
}