/**
 * Extrai as iniciais de um nome (primeiras letras das palavras, máximo 2 caracteres)
 * @param name Nome completo
 * @returns Iniciais em maiúsculas (ex: "José Ricardo Gomes" → "JR")
 */
export function getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0] || '') // Pega a primeira letra de cada parte
      .join('')
      .slice(0, 2) // Limita a 2 caracteres
      .toUpperCase();
  }