import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

@Injectable()
export class UserService {
  async findOne(username: string): Promise<any | undefined> {
    const sql = `
      SELECT
        user_id id, real_name realName, role
      FROM
        admin_user
      WHERE
        account_name = '${username}'
    `; // 一段平淡无奇的 SQL 查询语句
    try {
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台
      });
      const user = res[0];
      if (user) {
        return {
          code: 200, // 返回状态码，可自定义
          data: {
            user,
          },
          msg: 'Success',
        };
      } else {
        return {
          code: 600,
          msg: '查无此人',
        };
      }
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
