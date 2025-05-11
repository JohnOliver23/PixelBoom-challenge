export const userQueryKeys = {
    getAll: () => ['users'],
    getOne: (userId: string | number) => ['users', userId],
    getEntityLabel: () => 'usuário',
  };
