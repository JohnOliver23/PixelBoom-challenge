import { useQuery, useMutation, UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { useRepositories } from '@/repositories/user.repositories';
import { Statistic, User, UserJson } from '@/utils/types';

export function useUsers() {
  const listUsers: UseQueryResult<User[], Error> = useQuery({
    queryKey: ['users'], 
    queryFn: useRepositories.list,
    staleTime: 1000 * 60 * 5,
  });

  const getStatistics: UseQueryResult<Statistic[], Error> = useQuery({
    queryKey: ['statistics'],
    queryFn: useRepositories.getStatistics,
  });

  const createUserMutation: UseMutationResult<UserJson, Error, Omit<UserJson, 'id'>> = useMutation({
    mutationFn: (data) => useRepositories.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
    },
    onError: (error) => {
      console.error('Erro ao criar usuário:', error);
    },
  });

  const updateUserMutation: UseMutationResult<UserJson, Error, { id: number; data: Partial<UserJson> }> = useMutation({
    mutationFn: ({ id, data }) => useRepositories.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
    },
  });

  const deleteUserMutation: UseMutationResult<boolean, Error, number> = useMutation({
    mutationFn: useRepositories.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
    },
  });

  return {
    listUsers,
    getStatistics,
    createUserMutation,
    updateUserMutation,
    deleteUserMutation,
  };
}

export type UseUsersReturn = ReturnType<typeof useUsers>;
