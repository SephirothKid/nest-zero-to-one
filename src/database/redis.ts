/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-07-22 16:03:33
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-07-24 09:53:48
 * @Description: Init redis
 */

import * as Redis from 'ioredis';
import { Logger } from '../utils/log4js';
import config from '../../config/db';

let n: number = 0;
const redisIndex = []; // 用于记录 redis 实例索引
const redisList = []; // 用于存储 redis 实例

export class RedisInstance {
  static async initRedis(method: string, db: number = 0) {
    const isExist = redisIndex.some(x => x === db);
    if (!isExist) {
      Logger.debug(`[Redis ${db}]来自 ${method} 方法调用, Redis 实例化了 ${++n} 次 `);
      redisList[db] = new Redis({ ...config.redis, db });
      redisIndex.push(db);
    } else {
      Logger.debug(`[Redis ${db}]来自 ${method} 方法调用`);
    }
    return redisList[db];
  }
}
