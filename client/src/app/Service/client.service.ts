import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) {}
  signup(newUser) {
    return this.http.post("api/users/register", newUser);
  }
  login(newUser) {
    return this.http.post("api/users/testlogin", newUser);
  }
  getUserProfile(token) {
    return this.http.get("api/profile/", {
      headers: { Authorization: token },
    });
  }
  addExperience(addExp, token) {
    return this.http.post("api/profile/experience", addExp, {
      headers: { Authorization: token },
    });
  }
  deleteExperience(id, token) {
    return this.http.delete(`api/profile/experience/${id}`, {
      headers: { Authorization: token },
    });
  }
  addEducation(addEdu, token) {
    return this.http.post("api/profile/education", addEdu, {
      headers: { Authorization: token },
    });
  }
  deleteEducation(id, token) {
    return this.http.delete(`api/profile/education/${id}`, {
      headers: { Authorization: token },
    });
  }
  deleteUserProfile(token) {
    return this.http.delete("api/profile/", {
      headers: { Authorization: token },
    });
  }
  createEditProfile(profileData, token) {
    return this.http.post("api/profile/", profileData, {
      headers: { Authorization: token },
    });
  }
  getAllProfiles() {
    return this.http.get("api/profile/all");
  }
  getSingleProfile(user_id) {
    return this.http.get(`api/profile/user/${user_id}`);
  }
  createPost(createData, token) {
    return this.http.post("api/posts/", createData, {
      headers: { Authorization: token },
    });
  }
  getPosts() {
    return this.http.get("api/posts/");
  }
  getPostByID(id) {
    return this.http.get(`api/posts/${id}`);
  }
  likePost(id, token) {
    return this.http.post(`/api/posts/like/${id}`, {
      headers: { Authorization: token },
    });
  }
  unlikePost(id, token) {
    return this.http.post(`/api/posts/unlike/${id}`, {
      headers: { Authorization: token },
    });
  }
  DeletePost(id, token) {
    return this.http.delete(`api/posts/${id}`, {
      headers: { Authorization: token },
    });
  }
}
