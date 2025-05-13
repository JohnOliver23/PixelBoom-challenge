import { api } from '@/lib/api';
import { formatUserData } from '@/utils/formatters';
import { Statistic, User, UserJson } from '@/utils/types';

const USER_TABLE_ID = '534315/';
const STATISTICS_TABLE_ID = '534331/';

export const useRepositories = {
  list: async (): Promise<User[]> => {
    const response = await api.get(`/database/rows/table/${USER_TABLE_ID}?user_field_names=true`);
    return response.data.results.map((user: UserJson) => formatUserData(user))
  },

  create: async (data: Omit<UserJson, 'id'>): Promise<UserJson> => {
    const response = await api.post(`/database/rows/table/${USER_TABLE_ID}?user_field_names=true`, data);
    return response.data as UserJson;
  },

  update: async (id: number, data: Partial<UserJson>): Promise<UserJson> => {
    const response = await api.patch(`/database/rows/table/${USER_TABLE_ID}${id}/?user_field_names=true`, data);
    return response.data as UserJson;
  },

  remove: async (id: number): Promise<boolean> => {
    await api.delete(`/database/rows/table/${USER_TABLE_ID}${id}/`);
    return true;
  },

  getStatistics: async (): Promise<Statistic[]> => {
    const response = await api.get(`/database/rows/table/${STATISTICS_TABLE_ID}?user_field_names=true`);
    return response.data.results as Statistic[];
  }
};
