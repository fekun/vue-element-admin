import request from '@/utils/request'

// export function login (data) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data
//   })

// }

// export function getInfo (token) {
//   return request({
//     url: '/user/info',
//     method: 'get'
//     // params: { token }
//   })
// }

// export function logout () {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
export function login (data) {
  return new Promise((resolve, reject) => {
    const { username } = data
    const token = tokens[username]
    // mock error
    if (!token) {
      // reject({
      //   code: 60204,
      //   message: 'Account and password are incorrect.'
      // })
    }

    resolve({
      code: 20000,
      data: token
    })
    console.log('这是模拟响应，并非实际请求！')
    console.log(`
response info:

    ${JSON.stringify({
    code: 20000,
    data: token
  }, null, '\t')}
    `)
  })
}

export function getInfo (token) {
  return new Promise((resolve, reject) => {
    const info = users[token]

    // mock error
    if (!info) {
      // reject({
      //   code: 50008,
      //   message: 'Login failed, unable to get user details.'
      // })
    }

    resolve({
      code: 20000,
      data: info
    })
    console.log('这是模拟响应，并非实际请求！')
    console.log(`
response info:

    ${JSON.stringify({
    code: 20000,
    data: info
  }, null, '\t')}
    `)
  })
}

export function logout () {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: 'success'
    })
    console.log('这是模拟响应，并非实际请求！')
    console.log(`
response info:

    ${JSON.stringify({
    code: 20000,
    data: 'success'
  }, null, '\t')}
    `)
  })
}
