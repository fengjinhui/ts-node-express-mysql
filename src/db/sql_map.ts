export default {
  query_limit: (pageNo?: number, pageSize?: number, keyWord?: string): string => {
    if (pageNo && pageSize) {
      let cPageNo = (pageNo - 1) * pageSize;
      let cPageSize = pageSize;
      return `select * from sys_post where post_name like '%${keyWord}%' limit ${cPageNo},${cPageSize}`;
    } else {
      return "select * from sys_post";
    }
  },
  query_toatl: "select count(post_id) as total from sys_user",
};
