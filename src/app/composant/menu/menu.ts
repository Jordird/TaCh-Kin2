export interface menu {
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  sousMenu?: Array<menu>;
}
