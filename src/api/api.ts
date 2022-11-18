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
    return instance.post(`follow/${userID}`, {});
  },
  unFollowUsers(userID: number) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`);
  }
};