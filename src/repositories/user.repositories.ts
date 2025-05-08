import { api } from "@/lib/api";

export const useRepositories = {
    list: () => api.get('/'),
    create: (data: any) => api.post('/', data),
    update: (id: number, data: any) => api.patch(`/${id}/`, data),
    remove: (id: number) => api.delete(`/${id}/`),
  };