var Mock = require('mockjs');
Mock.mock('http://g.cn', {
  'list|10': [
    {
      'name': '@cname',
      'idr': /\d{13}/,
      'phone|1-19999999999': 100,
      'xg': '信息修改',
      'bj': '编辑信息',
      'yl': '预览审核',
      'fd|+1': [
        '押车',
        '房贷'
      ]
    }
  ]
});

