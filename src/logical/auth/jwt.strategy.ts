/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-19 16:26:28
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-07-22 17:19:55
 * @Description: JWT 策略
 */

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { RedisInstance } from '../../database/redis';

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
    const token = jwtFromRequest;
    console.log('validate:', token);
    return { userId: payload.sub, username: payload.username, realName: payload.realName, role: payload.role };
  }
}
