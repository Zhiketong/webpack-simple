import api from '@/api'

function _fetch (context, args = {}) {
  return api[args.method](args.url, args.params)
}

function bmwApi ({dispatch}, args={}) {
  var method = args.method.toLowerCase()
  var params = method === 'get' ? { params: args.params } : args.params
  return dispatch('_fetch', {
    method,
    url: `restful/${args.url}`,
    params
  }).then((res) => res.body.response.result)
}

function graphqlApi ({dispatch}, args={}) {
  return dispatch('_fetch', {
    method: 'graphql',
    url: args.url,
    params: args.params
  }).then((res) => res.body.data)
}

function javaApi ({dispatch}, args={}) {
  var method = args.method.toLowerCase()
  var params = method === 'get' ? { params: args.params } : args.params
  return dispatch('_fetch', {
    method,
    url: `api/${args.url}`,
    params
  }).then((res) => res.body.data)
}

function reportApi ({dispatch}, args={}) {
  var method = args.method.toLowerCase()
  var params = method === 'get' ? { params: args.params } : args.params
  return dispatch('_fetch', {
    method,
    url: `report/${args.url}`,
    params
  }).then((res) => res.body.data)
}

function wxApi ({dispatch}, args={}) {
  var method = args.method.toLowerCase()
  var params = method === 'get' ? { params: args.params } : args.params
  return dispatch('_fetch', {
    method,
    url: `wx/${args.url}`,
    params
  }).then((res) => res.data)
}

export default {
  _fetch,
  bmwApi,
  graphqlApi,
  javaApi,
  reportApi,
  wxApi
}
