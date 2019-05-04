import request from '@/utils/request'
import Mock from 'mockjs'
// export function searchUser (name) {
//   return request({
//     url: '/search/user',
//     method: 'get',
//     params: { name }
//   })
// }

// export function transactionList (query) {
//   return request({
//     url: '/transaction/list',
//     method: 'get',
//     params: query
//   })
// }

const NameList = []
const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}
NameList.push({ name: 'mock-Pan' })

export function searchUser (name) {
  return new Promise((resolve, reject) => {
    const mockNameList = NameList.filter(item => {
      const lowerCaseName = item.name.toLowerCase()
      return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
    })
    resolve({
      code: 20000,
      data: { items: mockNameList }
    })
    console.log('这是模拟响应，并非实际请求！')
    console.log(`
response info:

    ${JSON.stringify({
    code: 20000,
    data: { items: mockNameList }
  }, null, '\t')}
    `)
  })
}

export function transactionList (query) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: {
        total: 20,
        items: [
          {
            order_no: '123126353',
            timestamp: +Mock.Random.date('T'),
            username: 'jfawef',
            price: '2521.21',
            status: 'success'
          },
          {
            order_no: '45755235235',
            timestamp: +Mock.Random.date('T'),
            username: 'xzcvx',
            price: '1313.231',
            status: 'pending'
          },
          {
            order_no: '886325234124',
            timestamp: +Mock.Random.date('T'),
            username: 'sadsa',
            price: '14314.12',
            status: 'success'
          }
        ]
      }
    })
    console.log('这是模拟响应，并非实际请求！')
    console.log(`
response info:

    ${JSON.stringify({
    code: 20000,
    data: {
      total: 20,
      items: [
        {
          order_no: '123126353',
          timestamp: +Mock.Random.date('T'),
          username: 'jfawef',
          price: '2521.21',
          status: 'success'
        },
        {
          order_no: '45755235235',
          timestamp: +Mock.Random.date('T'),
          username: 'xzcvx',
          price: '1313.231',
          status: 'pending'
        },
        {
          order_no: '886325234124',
          timestamp: +Mock.Random.date('T'),
          username: 'sadsa',
          price: '14314.12',
          status: 'success'
        }
      ]
    }
  }, null, '\t')}
    `)
  })
}
