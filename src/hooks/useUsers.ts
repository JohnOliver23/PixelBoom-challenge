import { useQuery, useMutation, UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { useRepositories } from '@/repositories/user.repositories';
import { Statistic, User } from '@/utils/types';


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

  const createUserMutation: UseMutationResult<User, Error, Omit<User, 'id'>> = useMutation({
    mutationFn: useRepositories.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Erro ao criar usuário:', error);
    },
  });

  const updateUserMutation: UseMutationResult<User, Error, { id: number; data: Partial<User> }> = useMutation({
    mutationFn: ({ id, data }) => useRepositories.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  const deleteUserMutation: UseMutationResult<boolean, Error, number> = useMutation({
    mutationFn: useRepositories.remove,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
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