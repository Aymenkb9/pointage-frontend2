import { Navire } from "./navire.model";
import { Reserve } from "./reserve.model";

export interface Voiture {
    id: string;
    lot: string;
    vin: string;
    marque: string;
    model: string;
    datePointage: Date;
    etat: string; // Vous pouvez utiliser une énumération pour les états de voiture si nécessaire

    navire: Navire; // Supposons que vous ayez déjà défini l'interface Navire
    reserves: Reserve[]; // Supposons que vous ayez déjà défini l'interface Reserve
}
