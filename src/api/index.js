import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api/';

//boş merge
const API = axios.create({ baseURL: BASE_URL, withCredentials: true });

const api = {
  auth: {
    register: (data) => API.post('/auth/register', data),
    login: (data) => API.post('/auth/login', data),
    forgotPassword: (data) => API.post('/auth/forgotPassword', data),
    resetPassword: (data) => API.post('/auth/', data),
    logout: () => API.get('/auth/logout'),
  },
  clubs: {
    create: (values) => API.post('/club', values),
    getClub: ({ page, limit, name }) => API.get('/club', { params: { page, limit, name } }),
    deleteClub: (id) => API.delete(`/club/${id}`),
    search: (query) => API.get(`/club/search/getByNameContains`, { params: { name: query } }),
    getClubsByUniversity: ({ universityId, page, limit }) =>
      API.get(`/club/search/getByUniversityId`, { params: { universityId, page, limit } }),
    follow: (ClubId) => API.post('/follow', { ClubId }),
  },
  user: {
    changePassword: (data) => API.post('/user/password/change', data),
    edit: (data) => API.put('/user', data),
    changeProfileImage: (data) => API.patch('/user/profileimage/update', data),
    getProfileImage: () => API.get("/user/getprofileimage"),
  },

  universities: {
    list: () => API.get('/university'),
    getUniversity: (id) => API.get(`/university/${id}`),
  },
  follows: {
    getFollowListByUserId: (data) => API.get(`/follow/getFollowListByUserId?userId=${data}&page=1&limit=10`),
  },
  admin: {
    getByUserId: () => API.get("/author/byuserid")
  },
  posts: {
    create: (data) => API.post("/post/", data),
    getByUserId: () => API.get("/post/getuserid/follow"),
    getByUniversityId: (id) => API.get(`/post/getbyuniversityid/${id}`)
  }
};

export default api;
