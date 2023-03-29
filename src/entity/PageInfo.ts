export class PageQuery {
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
}

export class PageResult {
  currentPageNo: number;
  pageSize: number;
  rows: any;
  constructor(no: number, size: number, rows?: any) {
    this.currentPageNo = no;
    this.pageSize = size;
    this.rows = rows || [];
  }
}
