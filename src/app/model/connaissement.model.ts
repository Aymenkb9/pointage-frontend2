import { Escale } from "./escale.model";

export interface Connaissement {
    id: string;
    num: number;
    escale: Escale; // Supposons que vous ayez déjà défini l'interface Escale
}
