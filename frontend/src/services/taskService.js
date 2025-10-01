
import apiClient from "../../src/app/api/apiConfig";
import API from "../../src/app/api/api";


const taskService = {
  getByCard: async (cardId) => {
    const res = await apiClient.get(API.tasks.byCard(cardId));
    return res.data;
  },

  add: async (cardId, payload) => {
    const res = await apiClient.post(API.tasks.byCard(cardId), {
      ...payload,
      status: null 
    });
    return res.data;
  },

  update: async (cardId, taskId, payload) => {
    const res = await apiClient.put(API.tasks.byId(cardId, taskId), payload);
    return res.data;
  },

  patch: async (cardId, taskId, payload) => {
    const res = await apiClient.patch(API.tasks.byId(cardId, taskId), payload);
    return res.data;
  },

  remove: async (cardId, taskId) => {
    const res = await apiClient.delete(API.tasks.byId(cardId, taskId));
    return res.data;
  },

  assign: async (cardId, taskId, memberId) => {
    const res = await apiClient.post(API.tasks.assign(cardId, taskId), { memberId });
    return res.data;
  },

  getAttachments: async (cardId, taskId) => {
    const res = await apiClient.get(API.tasks.attachments(cardId, taskId));
    return res.data;
  },

  attachGitHub: async (cardId, taskId, payload) => {
    const res = await apiClient.post(API.tasks.attach(cardId, taskId), payload);
    return res.data;
  }
};

export default taskService;
