/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-19 16:30:40
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-03-20 09:37:10
 * @Description: JWT 本地策略
 */

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
