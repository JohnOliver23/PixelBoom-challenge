import { queryClient } from "@/lib/queryClient";
import { useRepositories } from "@/repositories/user.repositories";
import { userQueryKeys } from "@/utils/constants";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useUsers() {
  
    const listUsers = useQuery({
      queryKey: ['users'],
      queryFn: () => useRepositories.list().then(res => res.data.results),
    });
  
    const createUserMutation = useMutation({
      mutationFn: useRepositories.create,
      onSuccess: () => queryClient.invalidateQueries(userQueryKeys.getAll),
    });
  
    const updateUserMutation = useMutation({
      mutationFn: ({ id, data }: any) => useRepositories.update(id, data),
      onSuccess: () => queryClient.invalidateQueries(userQueryKeys.getAll),
    });
  
    const deleteUserMutation = useMutation({
      mutationFn: (id: number) => useRepositories.remove(id),
      onSuccess: () => queryClient.invalidateQueries(userQueryKeys.getAll),
    });
  
    return {
      listUsers,
      createUserMutation,
      updateUserMutation,
      deleteUserMutation,
    };
  }