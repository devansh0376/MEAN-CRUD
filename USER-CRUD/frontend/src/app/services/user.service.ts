import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="http://localhost:3000"
  httpClient=inject(HttpClient)
  constructor() { }

  getUsers()
  {
    return this.httpClient.get<User[]>(this.apiUrl+'/user')
  }
  addUser(model :User)
  {
    return this.httpClient.post(this.apiUrl+'/user',model)
  }
  getUserID(id: string) {
    return this.httpClient.get<User>(this.apiUrl + '/user/' +id)
  }

  updateUser(id :string ,model : User)
  {
    return this.httpClient.put(this.apiUrl + '/user/' +id ,model)
  }

  deleteUser(id:string)
  {
    return this.httpClient.delete(this.apiUrl + '/user/' +id)
  }
}
