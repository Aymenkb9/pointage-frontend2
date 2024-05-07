import { Voiture } from "./voiture.model";

export interface Navire {
    id: string;
    nom: string;
    Capacite: number;
    compagnie: string;
    tonnage: number;
    statut: string; // ou utilisez le type Enum Statut_Navire si nécessaire
    voitures: Voiture[]; // Supposons que Voiture soit un modèle distinct
    escaleId: string; // Identifiant de l'escale à laquelle ce navire est associé
}
