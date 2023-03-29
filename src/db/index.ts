// 导入 mysql 模块
import mysql, { MysqlError, PoolConnection } from "mysql";
// 创建数据库连接对象
export const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "house_rent",
});
// 向外共享 db 数据库连接对象
// module.exports = db;
export const connection = (sql: string) => {
  return new Promise((resolve, reject) => {
    try {
      db.getConnection((err: MysqlError, connection: PoolConnection) => {
        connection.query(sql, (error: MysqlError | null, results?: any) => {
          if (results) {
            resolve(results);
          }
          if (error) {
            reject(error);
          }
        });
        connection.release();
      });
    } catch (err) {
      reject(err);
    }
  });
};
