/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-24 10:03:09
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-04-14 10:01:59
 * @Description: DTO of user
 */

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({ description: '用户名', example: 'koa2', })
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly username: string;
  @ApiProperty({ description: '密码', example: 'a123456' })
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}

export class RegisterInfoDTO {
  @ApiProperty()
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly accountName: string;
  @ApiProperty()
  @IsNotEmpty({ message: '真实姓名不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  readonly realName: string;
  @ApiProperty()
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
  @ApiProperty()
  @IsNotEmpty({ message: '重复密码不能为空' })
  readonly repassword: string;
  @ApiProperty()
  @IsNotEmpty({ message: '手机号不能为空' })
  @IsNumber()
  readonly mobile: number;
  @ApiPropertyOptional({
    description: '[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）',
  })
  readonly role?: number | string;
}
