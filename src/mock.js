var Mock = require('mockjs');
Mock.mock('/index/List', {
  'list|10': [
    {
      'name': '@cname',
      'idr': /\d{13}/,
      'phone|1-19999999999': 100,
      'xg': '信息修改',
      'bj': '编辑信息',
      'yl': '预览审核',
      'fd|+1': [
        {
          car: 'ss',
          che: ''
        }
      ]
    }
  ]
});

Mock.mock('/index/pass', {
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
        '房贷',
        '押房不押车'
      ]
    }
  ]
});
Mock.mock('/index/no_pass', {
  'list|6': [
    {
      'name': '@cname',
      'idr': /\d{13}/,
      'phone|1-19999999999': 100,
      'xg': '信息修改',
      'bj': '编辑信息',
      'yl': '预览审核',
      'fd|+1': [
        '押车',
        '房贷',
        '押房不押车'
      ]
    }
  ]
});
Mock.mock('/index/edit', {
  'list|1': [
    {
      'name': '@cname',
      'idr': /\d{13}/,
      'phone|1-19999999999': 100,
      'xg': '信息修改',
      'bj': '编辑信息',
      'yl': '预览审核',
      'img': '@image(150x17, #50B347, #FFF, Mock.js)',
      'fd|+1': [
        '押车',
        '房贷',
        '押房不押车'
      ]
    }
  ]
});
Mock.mock('/index/daihou', {
  'list|2': [
    {
      'name': '@cname',
      'idr': /\d{13}/,
      'phone|1-19999999999': 100,
      'xg': '信息修改',
      'bj': '编辑信息',
      'yl': '预览审核',
      'fd|+1': [
        '押车',
        '房贷',
        '押房不押车'
      ]
    }
  ]
});
export default Mock;
