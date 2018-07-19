export default function ({
  $axios,
  app
}) {
  $axios.onRequest(config => {
    // console.debug('Making request to ' + config.url, config)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.error('axios error ' + code, error)
    console.error('error response', error.response)
    // window.$nuxt.error({
    //   statusCode: code,
    //   message: error + ' path - ' + error.response.data.path
    // })
  })
}