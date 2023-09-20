export interface Client {
  idClient: number;
  nom: string | null;
  prenom: string | null;
  email: string | null;
  sexe: string | null;
  adresse: string | null;
  ville: string | null;
  pays: string | null;
  numPhone: string | null;
  codePostal: number | null;
  photo: string | null;
}
