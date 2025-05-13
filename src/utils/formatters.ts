import { UserFormValues } from "@/hooks/useUsersForm";
import { UserJson } from "./types";

export function getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0] || '') 
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  
  export const formatUserData = (data: UserJson) => {
    const birthDate = new Date(data.birthday)
    const formattedBirthday = `${birthDate.getDate().toString().padStart(2, "0")}/${(birthDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${birthDate.getFullYear()}`
  
    return {
      ...data,
      status: data.status ? "Ativo" : "Inativo",
      birthday: formattedBirthday,
    }
  }

  function calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
  }
  
  export function formatUserJson(data: UserFormValues): UserJson {
    return {
      name: data.name!,
      email: data.email!,
      phone: data.phone!,
      whatsapp: data.whatsapp ?? false,
      cpf: data.cpf!,
      rg: data.rg!,
      gender: data.gender!,
      status: !!data.status,
      birthday: data.birthDate!,
      age: calculateAge(data.birthDate), 
      time: "3822s",
      typeUser: "Usuário Padrão", 
    };
  }
  
  export const emptyToNull = (value: string | null | undefined): string | null => {
    return value === "" ? null : value ?? null;
  };