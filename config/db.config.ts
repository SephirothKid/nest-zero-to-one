/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2020-03-17 16:14:15
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2020-03-17 16:39:24
 * @Description: 数据库配置文件
 */

const productConfig = {
  mysql: {
    port: '数据库端口',
    host: '数据库地址',
    user: '用户名',
    password: '密码',
    database: '表名',
    connectionLimit: 10, // 连接限制
  },
};

const localConfig = {
  mysql: {
    port: 3306,
    host: '数据库地址',
    user: '用户名',
    password: '密码',
    database: '表名',
    connectionLimit: 10, // 连接限制
  },
};

// 本地开发环境是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;
