// src/types/api.ts
export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
  }
  
  export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  }
  
  export interface Statistic {
    id: number;
    name: string;
    value: string | number;
  }
  
  export interface UserJson {
    name: string;
    age?: number;
    gender: Gender;
    birthday: string;
    time?: string;
    typeUser?: string;
    status: boolean;
    email: string;
    phone: string;
    whatsapp: boolean;
    cpf: string;
    rg: string;
  }
  
  
  export interface User {
    id: number;
    name: string;
    age: number;
    gender:  Gender;
    birthday: string;
    time: string;
    typeUser: string;
    status: 'Ativo' | 'Inativo';
    email: string;
    phone: string;
    whatsapp: boolean;
    cpf: string;
    rg: string;
  }

export type Gender = "male" | "female";

export const GENDER_TRANSLATION: Record<Gender, string> = {
  male: "Homem",
  female: "Mulher"
};
