// src/app/services/user.service.ts

import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor() {}

  register(user: User): void {
    this.users.push(user);
  }

  validate(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }
}
