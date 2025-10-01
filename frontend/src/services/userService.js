
import apiClient from "../../src/app/api/apiConfig";
import API from "../../src/app/api/api";


const userService = {
  getAll: async () => {
    const res = await apiClient.get(API.users.list);
    return res.data;
  },

  getById: async (id) => {
    const res = await apiClient.get(API.users.byId(id));
    return res.data;
  },

  update: async (id, payload) => {
    const res = await apiClient.put(API.users.update(id), payload);
    return res.data;
  },

  remove: async (id) => {
    const res = await apiClient.delete(API.users.remove(id));
    return res.data;
  }
};

export default userService;
