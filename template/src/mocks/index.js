import Mock from 'mockjs'

const GATEWAY = process.env.GATEWAY_URL

Mock.mock(`${GATEWAY}/mocks/test`, {
  'user|1-3': [
    {
      name: '@cname',
      'id|+1': 1
    }
  ]
})
