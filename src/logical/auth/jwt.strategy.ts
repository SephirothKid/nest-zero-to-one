/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-19 16:26:28
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-03-20 11:47:29
 * @Description: JWT 策略
 */

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // JWT验证 - Step 4: 被守卫调用
  async validate(payload: any) {
    // console.log(`JWT验证 - Step 4: 被守卫调用`);
    return { userId: payload.sub, username: payload.username, realName: payload.realName, role: payload.role };
  }
}
