export interface Job {
  anzahl_von_Stellen?: string;
  id: number;
  title: string;
  description: string;
  company?: string;
  location?: string;
  salary?: string;
  jobtyp?: string[];
  Arbeitszeit?: string[];
  veroeffentlicht?: string;
}
