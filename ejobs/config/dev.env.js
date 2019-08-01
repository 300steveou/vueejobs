// 開發中的環境
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 記得要'"字串"'
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    APIPATH: '"https://vue-course-api.hexschool.io/api/"',    
    CUSTOMPATH: '"300steveou"',
  })

  