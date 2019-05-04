import request from '@/utils/request'
import Mock from 'mockjs'
// export function fetchList (query) {
//   return request({
//     url: '/article/list',
//     method: 'get',
//     params: query
//   })
// }

// export function fetchArticle (id) {
//   return request({
//     url: '/article/detail',
//     method: 'get',
//     params: { id }
//   })
// }

// export function fetchPv (pv) {
//   return request({
//     url: '/article/pv',
//     method: 'get',
//     params: { pv }
//   })
// }

// export function createArticle (data) {
//   return request({
//     url: '/article/create',
//     method: 'post',
//     data
//   })
// }

// export function updateArticle (data) {
//   return request({
//     url: '/article/update',
//     method: 'post',
//     data
//   })
// }

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}
export function fetchList (query) {
  return new Promise((resolve, reject) => {
    const page = 1
    const limit = 20

    let mockList = List.filter(item => {
      // if (importance && item.importance !== +importance) return false
      // if (type && item.type !== type) return false
      // if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    // if (sort === '-id') {
    //   mockList = mockList.reverse()
    // }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    resolve({
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList
      }
    })
  })
}

export function fetchArticle (id) {
  return new Promise((resolve, reject) => {
    for (const article of List) {
      if (article.id === +id) {
        resolve({
          code: 20000,
          data: article
        })
      }
    }
  })
}

export function fetchPv (pv) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: {
        pvData: [
          { key: 'PC', pv: 1024 },
          { key: 'mobile', pv: 1024 },
          { key: 'ios', pv: 1024 },
          { key: 'android', pv: 1024 }
        ]
      }
    })
  })
}

export function createArticle (data) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: 'success'
    })
  })
}

export function updateArticle (data) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: 'success'
    })
  })
}
