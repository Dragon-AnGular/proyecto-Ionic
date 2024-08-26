import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticatedUser = false;
  private userName: string | null = null;

  login(name: string) {
    this.isAuthenticatedUser = true;
    this.userName = name;
  }

  logout() {
    this.isAuthenticatedUser = false;
    this.userName = null;
  }

  getUserName(): string | null {
    return this.userName;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken'); // O usa sessionStorage si prefieres
    // Aquí puedes agregar validaciones adicionales, como verificar la expiración del token
    return !!token; // Retorna true si hay un token, false si no hay
  }
}
