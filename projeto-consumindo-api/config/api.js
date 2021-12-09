const axios = require('axios')

const jsonPlaceHolderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com/users'
})

module.exports = {
  jsonPlaceHolderApi,
  gitHubApi
}