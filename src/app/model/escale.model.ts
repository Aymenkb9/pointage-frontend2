import { Navire } from '../model/navire.model';
import { Client } from '../model/client.model';
import { Connaissement } from '../model/connaissement.model';
import { Terminal } from '../model/terminal.model';
import { Pointage } from '../model/pointage.model';

export interface Escale {
    id: string;
    numEscale: number;
    numVoyage: string;
    pointage: Pointage; 
    navire: Navire; 
    client: Client; 
    connaissement: Connaissement; 
    terminal: Terminal; 
}