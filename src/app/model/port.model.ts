import { Terminal } from "./terminal.model";

export interface Port {
    id: string;
    provenance: string;
    destination: string;
    
    terminals: Terminal[]; // Supposons que vous ayez déjà défini l'interface Terminal
}
