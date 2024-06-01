export interface SaveEscaleDTO {
  numEscale: number;
  numVoyage: string;
  nomNavire: string;
  identifTerminal: string;
  nomClient: string; // Champ pour le nom du client
  provenance: string;
  statutTerminal: string; // Mettez à jour le type selon votre besoin
  statutNavire: string; // Ajout du champ pour le statut du navire
}
