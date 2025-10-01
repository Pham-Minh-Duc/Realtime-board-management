import apiClient from "@/app/api/apiConfig";
import API from "@/app/api/api";

const authService = {
  signup: async (payload) => {
    const res = await apiClient.post(API.auth.signup, payload);
    return res.data;
  },
  signin: async (payload) => {
    const res = await apiClient.post(API.auth.signin, payload);
    return res.data;
  },
  profile: async () => {
    const res = await apiClient.get(API.auth.profile);
    return res.data;
  }
};

export default authService;
