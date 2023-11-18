// auth/auth.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Implemente a lógica de validação do usuário
  async validateUser(payload: any): Promise<any> {
    // Use o payload para obter informações do usuário
    // Exemplo: return await this.userService.findOneById(payload.sub);
  }
}
