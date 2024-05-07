import { TypeClient } from "./typeclient.model";
import { Escale } from "./escale.model";

export interface Client {
    id: string;
    nom: string;
    contact: string;
    ice: string;
    typeClient: TypeClient; // Supposons que vous ayez déjà défini l'interface TypeClient
    active: boolean;
    escale: Escale[]; // Supposons que vous ayez déjà défini l'interface Escale
    //createdAt: Date;
    //updatedAt: Date;
}
