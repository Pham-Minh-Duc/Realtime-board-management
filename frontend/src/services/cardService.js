
import apiClient from "../../src/app/api/apiConfig";
import API from "../../src/app/api/api";

const cardService = {
  getAll: async () => {
    const res = await apiClient.get(API.cards.list);
    return res.data;
  },

  getById: async (id) => {
    const res = await apiClient.get(API.cards.byid(id));
    return res.data;
  },

  getByUser: async (userId) => {
    const res = await apiClient.get(API.cards.byUser(userId));
    return res.data;
  },

  create: async (payload) => {
    const res = await apiClient.post(API.cards.create, payload);
    return res.data;
  },

  update: async (id, payload) => {
    const res = await apiClient.put(API.cards.update(id), payload);
    return res.data;
  },

  remove: async (id) => {
    const res = await apiClient.delete(API.cards.remove(id));
    return res.data;
  },

  invite: async (cardId, invitePayload) => {
    const res = await apiClient.post(API.cards.invite(cardId), invitePayload);
    return res.data;
  },

  acceptInvite: async (cardId, payload) => {
    const res = await apiClient.post(API.cards.acceptInvite(cardId), payload);
    return res.data;
  }
};

export default cardService;
