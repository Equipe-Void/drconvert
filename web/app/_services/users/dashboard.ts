export interface Field {
  isIdentifier: boolean;
  
}

export interface Project {
  id: string;
  name: string;
  totalFields: number;
  files: any[]; 
  fields: Field[];
}
