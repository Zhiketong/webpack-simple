import Mock from 'mockjs'

const GATEWAY = 'http://web-api-gateway.yin126.com'

Mock.mock(`${GATEWAY}/mocks/test`, {
  'user|1-3': [
    {
      name: '@cname',
      'id|+1': 1
    }
  ]
})
