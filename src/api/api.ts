import axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  //'API-KEY': 'adlkas;dkdsa;dskasd'
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageRenderUserSize: number = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageRenderUserSize}`).then(response => response.data);
  },
  followUsers(userID: number) {
    return instance.post(`follow/${userID}`);
  },
  unFollowUsers(userID: number) {
    return instance.delete(`follow/${userID}`);
  },
  getProfileUser(userID: number) {
    console.warn('deprecated method. Use profileApi');
    return profileAPI.getProfileUser(userID);
  },
  authMe() {
    return instance.get(`auth/me`);
  },
};
export const profileAPI = {
  getProfileUser(userID: number) {
    return instance.get(`profile/${userID}`);
  },
  getStatusUser(userID: number) {
    return instance.get(`profile/status/${userID}`);
  },
  updateStatus(newStatus: string) {
    return instance.put(`profile/status`, {status: newStatus});
  }
};