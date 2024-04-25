import { Escale } from "./escale.model";
import { Port } from "./port.model";
export interface Terminal {
    id: string;
    identif: string;
    capacite: string;
    statut: string; // Supposons que Statut_Terminal soit une énumération avec des valeurs de chaîne de caractères
    escale: Escale[]; // Supposons que vous ayez déjà défini l'interface Escale
    port: Port[]; // Supposons que vous ayez déjà défini l'interface Port
}
