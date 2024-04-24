import { Voiture } from "./voiture.model";

export interface Reserve {
    id: string;
    nature: string;
    zoneReserve: string;
    emplaceReserve: string;

    voiture: Voiture; // Supposons que vous ayez déjà défini l'interface Voiture
}
