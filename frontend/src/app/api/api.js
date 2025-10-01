
const API = {
    auth: {
        signup:"/auth/signup",
        signin:"/auth/signin",
        profile: "/auth/profile"
    },
    users:{
        list: "/users",
        byid: (id) => `/users/${id}`,
        update: (id) => `/users/${id}`,
        delete: (id) => `/users/${id}`
    },
    cards: {
        list: "/cards",
        add: "/cards/add",
        byid: (id) => `/cards/${id}`,
        update: (id) => `/cards/${id}`,
        delete: (id) => `/cards/${id}`,
        byUser: (id) => `/cards/${id}`,
        invite: (cardId) => `/cards/${cardId}/invite`,
        acceptInvite: (cardId) => `/cards/${cardId}/invite/accept`,
        tasks: (cardId) => `/cards/${cardId}/tasks`
    },
    tasks: {
        byCard: (cardId) => `/cards/${cardId}/tasks`,
        byId: (cardId, taskId) => `/cards/${cardId}/tasks/${taskId}`,
        assign: (cardId, taskId) => `/cards/${cardId}/tasks/${taskId}/assign`,
        attachments: (cardId, taskId) => `/cards/${cardId}/tasks/${taskId}/github-attachments`,
        attach: (cardId, taskId) => `/cards/${cardId}/tasks/${taskId}/github-attach`
    }
};

export default API;