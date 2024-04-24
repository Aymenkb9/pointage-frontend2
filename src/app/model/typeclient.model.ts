import { Client } from "./client.model";

export interface TypeClient {
    id: string;
    code: string;
    libelle: string;
    clients: Client[]; // Supposons que vous ayez déjà défini l'interface Client
}
