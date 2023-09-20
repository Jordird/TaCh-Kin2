export interface Achat {
  idAchat: number;
  nomCLient: string | null;
  date: number | null;
  description: string | null;
  prixUnitaire: number | null;
  quantite: number | null;
  prixTotal: number | null;
  prixHT: number | null;
  tva: number | null;
  prixTTC: number | null;
}
