import { connection } from "../db/index";
import sqlMap from "../db/sql_map";
import { PageResult } from "../entity/PageInfo";
import { ResultInfo } from "../entity/CommonResult";
import { Router, Request, Response } from "express";
const router = Router();
/* GET users listing. */
router.get("/", function (req: Request, res: Response) {
  res.send("respond with a resource");
});
router.get("/getList", function (req: Request, res: Response) {
  const query: PageQuery = req.query;
  const result = new ResultInfo<PageResult>();
  const pageResult = new PageResult(query.pageNo, query.pageSize, []);
  connection(sqlMap.query_limit(query.pageNo, query.pageSize, query.keyWord))
    .then(data => {
      pageResult.rows = data;
      result.code = 200;
      result.msg = "请求成功";
      result.data = pageResult;
      res.send(result);
    })
    .catch(err => {
      result.code = 500;
      result.msg = "`请求失败`" + err;
      result.data = pageResult;
      res.send(result);
    });
});
export default router;
