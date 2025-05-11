import { api } from '@/lib/api';
import { Statistic, User } from '@/utils/types';


const USER_TABLE_ID = '534315/';
const STATISTICS_TABLE_ID = '534331/';

export const useRepositories = {
  list: async () => {
    const response = await api.get(`/database/rows/table/${USER_TABLE_ID}?user_field_names=true`);
    return response.data.results as User[]; 
  },
  
  create: async (data: Omit<User, 'id'>) => {
    const response = await api.post(`/database/rows/table/${USER_TABLE_ID}?user_field_names=true`, data);
    return response.data as User;
  },
  
  update: async (id: number, data: Partial<User>) => {
    const response = await api.patch(`/database/rows/table/${USER_TABLE_ID}${id}/?user_field_names=true`, data);
    return response.data as User;
  },
  
  remove: async (id: number) => {
    await api.delete(`/database/rows/table/${USER_TABLE_ID}${id}/`);
    return true;
  },
  
  getStatistics: async () => {
    const response = await api.get(`/database/rows/table/${STATISTICS_TABLE_ID}?user_field_names=true`);
    return response.data.results as Statistic[];
  }
};