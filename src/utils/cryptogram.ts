/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-19 14:13:25
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-03-19 14:30:57
 * @Description: 工具函数：加密 & 解密
 */

import * as crypto from 'crypto';

/**
 * Make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

/**
 * Encrypt password
 * @param password 解密前的密码
 * @param salt 密码盐
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return '';
  }
  const tempSalt = Buffer.from(salt, 'base64');
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  );
}
