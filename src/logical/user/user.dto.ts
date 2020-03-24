/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-24 10:03:09
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-03-24 11:38:10
 * @Description: DTO of user
 */

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RegisterInfoDTO {
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly accountName: string | number;
  @IsNotEmpty({ message: '真实姓名不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  readonly realName: string;
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
  @IsNotEmpty({ message: '重复密码不能为空' })
  readonly repassword: string;
  @IsNotEmpty({ message: '手机号不能为空' })
  @IsNumber()
  readonly mobile: number;
  readonly role?: string | number;
}
