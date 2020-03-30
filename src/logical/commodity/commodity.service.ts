import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

@Injectable()
export class CommodityService {
  /**
   * 查询商品列表
   * @param {*} body
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof CommodityService
   */
  async queryCommodityList(body: any): Promise<any> {
    const { pageIndex = 1, pageSize = 10, keywords = '' } = body;
    // 分页查询条件
    const currentIndex = (pageIndex - 1) * pageSize < 0 ? 0 : (pageIndex - 1) * pageSize;
    const queryCommodityListSQL = `
      SELECT
        id, ccolumn_id columnId, commodity_name name, commodity_desc description,
        sale_money saleMoney, market_price marketPrice,
        c_by createBy, DATE_FORMAT(c_time, '%Y-%m-%d %H:%i:%s') createTime,
        u_by updateBy, DATE_FORMAT(u_time, '%Y-%m-%d %H:%i:%s') updateTime
      FROM
        commodity
      WHERE
        commodity_name LIKE '%${keywords}%'
      ORDER BY
        id DESC
      LIMIT ${currentIndex}, ${pageSize}
    `;
    const commodityList: any[] = await sequelize.query(queryCommodityListSQL, {
      type: Sequelize.QueryTypes.SELECT,
      raw: true,
      logging: false,
    });

    // 统计数据条数
    const countCommodityListSQL = `
      SELECT
        COUNT(*) AS total
      FROM
        commodity
      WHERE
        commodity_name LIKE '%${keywords}%'
    `;
    const count: any = (
      await sequelize.query(countCommodityListSQL, {
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        logging: false,
      })
    )[0];

    return {
      code: 200,
      data: {
        commodityList,
        total: count.total,
      },
    };
  }

  /**
   * 创建商品
   *
   * @param {*} body
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof CommodityService
   */
  async createCommodity(body: any, username: string): Promise<any> {
    const { columnId = 0, name, description = '', marketPrice = 0, saleMoney = 0 } = body;
    const createCommoditySQL = `
      INSERT INTO commodity
        (ccolumn_id, commodity_name, commodity_desc, market_price, sale_money, c_by)
      VALUES
        ('${columnId}', '${name}', '${description}', ${marketPrice}, ${saleMoney}, '${username}');
    `;
    await sequelize.query(createCommoditySQL, { logging: false });
    return {
      code: 200,
      msg: 'Success',
    };
  }

  /**
   * 修改商品
   *
   * @param {*} body
   * @param {string} username
   * @returns
   * @memberof CommodityService
   */
  async updateCommodity(body: any, username: string) {
    const { id, columnId, name, description, saleMoney, marketPrice } = body;

    const updateCommoditySQL = `
      UPDATE
        commodity
      SET
        ccolumn_id = ${columnId},
        commodity_name = '${name}',
        commodity_desc = '${description}',
        market_price = ${marketPrice},
        sale_money = ${saleMoney},
        u_by = '${username}'
      WHERE
        id = ${id}
    `;
    await sequelize.query(updateCommoditySQL, { logging: false });
    return {
      code: 200,
      msg: 'Success',
    };
  }

  /**
   * 删除商品
   *
   * @param {*} body
   * @returns
   * @memberof CommodityService
   */
  async deleteCommodity(body: any) {
    const { id } = body;
    const deleteCommoditySQL = `
      DELETE FROM
        commodity
      WHERE
        id = ${id}
    `;
    await sequelize.query(deleteCommoditySQL, { logging: false });
    return {
      code: 200,
      msg: 'Success',
    };
  }
}
