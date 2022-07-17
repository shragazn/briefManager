export interface User {
  userName: string;
  link?: string;
}

//      Projects      //
export interface ProjectDetails {
  name: string;
  date: string;
  brief: number | string;
  type?: string;
  process?: Process;
  users?: User[];
}

export interface Project extends ProjectDetails {
  client: string;
  products?: Product[];
}

//      Product    //
export interface Product extends ProjectDetails {
  details: ProductDetails;
  description?: string;
}

export interface ProductDetails {
  PO?: number;
  invoice?: number;
  size?: string;
}

export interface ProjectIDInfo {
  brief: string | number;
  type?: string;
  process?: Process;
  users?: User[];
}

export type Process = "חוייב" | "בעבודה" | "נעצר" | "לחיוב";
